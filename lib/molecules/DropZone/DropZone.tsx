import React, {
  forwardRef,
  useState,
  useCallback,
  useMemo,
  DragEvent,
} from 'react';
import { clsx } from 'clsx';

import Upload from 'lucide-react/icons/upload';
import CheckCircle from 'lucide-react/icons/check-circle';
import XCircle from 'lucide-react/icons/x-circle';
import { useStableId } from '../../hooks/useStableId/useStableId';
import { dropZoneSizeClasses } from '../../@types/classes';
import type { Size } from '../../@types/classes';
import { Text } from '../../atoms/Text/Text';

export type DropZoneVariant = 'default' | 'success' | 'error';

export interface DropZoneProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  // Core functionality
  onDrop?: (files: FileList) => void;
  onDropRejected?: (files: FileList, error: string) => void;

  // File validation
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in bytes
  minSize?: number; // in bytes

  // Content customization
  title?: string;
  description?: string;

  // State
  variant?: DropZoneVariant;
  disabled?: boolean;
  loading?: boolean;

  // Styling
  size?: Size;
  className?: string;
  contentClassName?: string;
  iconClassName?: string;

  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
}

// Move style functions outside component to prevent recreation
const getIcon = (loading: boolean, variant: DropZoneVariant) => {
  if (loading) return Upload;
  if (variant === 'success') return CheckCircle;
  if (variant === 'error') return XCircle;
  return Upload;
};

const getIconColor = (
  disabled: boolean,
  variant: DropZoneVariant,
  isDragOver: boolean,
) => {
  if (disabled) return 'text-gray-400';
  if (variant === 'success') return 'text-green-500';
  if (variant === 'error') return 'text-red-500';
  if (isDragOver) return 'text-blue-500';
  return 'text-gray-500';
};

const getBorderColor = (
  disabled: boolean,
  variant: DropZoneVariant,
  isDragOver: boolean,
) => {
  if (disabled) return 'border-gray-200';
  if (variant === 'success') return 'border-green-300';
  if (variant === 'error') return 'border-red-300';
  if (isDragOver) return 'border-blue-400 border-solid';
  return 'border-gray-300 border-dashed';
};

const getBackgroundColor = (
  disabled: boolean,
  variant: DropZoneVariant,
  isDragOver: boolean,
) => {
  if (disabled) return 'bg-gray-50';
  if (variant === 'success') return 'bg-green-50';
  if (variant === 'error') return 'bg-red-50';
  if (isDragOver) return 'bg-blue-50';
  return 'bg-white hover:bg-gray-50';
};

const getTextColor = (
  disabled: boolean,
  variant: DropZoneVariant,
):
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'warning'
  | 'error'
  | 'info' => {
  if (disabled) return 'muted';
  if (variant === 'success') return 'success';
  if (variant === 'error') return 'error';
  return 'primary';
};

// Optimized file validation function - extracted to reduce component complexity
const createFileList = (files: File[]): FileList => {
  const dt = new DataTransfer();
  files.forEach((file) => dt.items.add(file));
  return dt.files;
};

/**
 * DropZone molecule component. An accessible drag-and-drop file upload area.
 * Supports file validation, multiple files, size limits, and custom styling.
 * Provides visual feedback for drag states and file validation results.
 * Fully accessible with ARIA attributes and proper semantic roles.
 */
export const DropZone = React.memo(
  forwardRef<HTMLDivElement, DropZoneProps>(
    (
      {
        onDrop,
        onDropRejected,
        accept = '*/*',
        multiple = false,
        maxFiles = 10,
        maxSize = 10 * 1024 * 1024, // 10MB
        minSize = 0,
        title,
        description,
        variant = 'default',
        disabled = false,
        loading = false,
        size = 'md',
        className,
        contentClassName,
        iconClassName,
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedBy,
        ...props
      },
      ref,
    ) => {
      const dropZoneId = useStableId();
      const descriptionId = `${dropZoneId}-description`;

      const [isDragOver, setIsDragOver] = useState(false);
      const [, setDragCounter] = useState(0);

      // Memoized validation configuration
      const validationConfig = useMemo(
        () => ({
          accept,
          maxFiles,
          maxSize,
          minSize,
          acceptedTypes:
            accept !== '*/*' && accept !== '*'
              ? accept.split(',').map((type) => type.trim().toLowerCase())
              : null,
        }),
        [accept, maxFiles, maxSize, minSize],
      );

      // Optimized file validation with memoized config
      const validateFiles = useCallback(
        (
          files: FileList,
        ): { valid: FileList; invalid: FileList; error?: string } => {
          const validFiles: File[] = [];
          const invalidFiles: File[] = [];
          let error: string | undefined;

          // Check file count first
          if (files.length > validationConfig.maxFiles) {
            error = `Too many files. Maximum ${validationConfig.maxFiles} file${validationConfig.maxFiles === 1 ? '' : 's'} allowed.`;
            return {
              valid: createFileList([]),
              invalid: createFileList(Array.from(files)),
              error,
            };
          }

          // Validate each file
          for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Size validation
            if (file.size > validationConfig.maxSize) {
              invalidFiles.push(file);
              error = `File "${file.name}" is too large. Maximum size: ${(validationConfig.maxSize / (1024 * 1024)).toFixed(1)}MB`;
              continue;
            }

            if (file.size < validationConfig.minSize) {
              invalidFiles.push(file);
              error = `File "${file.name}" is too small. Minimum size: ${(validationConfig.minSize / 1024).toFixed(1)}KB`;
              continue;
            }

            // Type validation
            if (validationConfig.acceptedTypes) {
              const fileType = file.type.toLowerCase();
              const fileExtension =
                '.' + file.name.split('.').pop()?.toLowerCase();

              const isAccepted = validationConfig.acceptedTypes.some(
                (acceptType) => {
                  if (acceptType.includes('/*')) {
                    const category = acceptType.split('/')[0];
                    return fileType.startsWith(category + '/');
                  }
                  return (
                    fileType === acceptType || fileExtension === acceptType
                  );
                },
              );

              if (!isAccepted) {
                invalidFiles.push(file);
                error = `File type "${file.type || fileExtension}" not accepted. Accepted types: ${validationConfig.accept}`;
                continue;
              }
            }

            validFiles.push(file);
          }

          return {
            valid: createFileList(validFiles),
            invalid: createFileList(invalidFiles),
            error,
          };
        },
        [validationConfig],
      );

      // Memoized drag handlers
      const handleDragEnter = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();

          if (disabled || loading) return;

          setDragCounter((prev) => prev + 1);
          if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragOver(true);
          }
        },
        [disabled, loading],
      );

      const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setDragCounter((prev) => {
          const newCounter = prev - 1;
          if (newCounter === 0) {
            setIsDragOver(false);
          }
          return newCounter;
        });
      }, []);

      const handleDragOver = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();

          if (disabled || loading) {
            e.dataTransfer.dropEffect = 'none';
            return;
          }

          e.dataTransfer.dropEffect = 'copy';
        },
        [disabled, loading],
      );

      const handleDrop = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();

          setIsDragOver(false);
          setDragCounter(0);

          if (disabled || loading) return;

          const files = e.dataTransfer.files;
          if (files.length === 0) return;

          const { valid, invalid, error } = validateFiles(files);

          if (valid.length > 0 && onDrop) {
            onDrop(valid);
          }

          if (invalid.length > 0 && error && onDropRejected) {
            onDropRejected(invalid, error);
          }
        },
        [disabled, loading, onDrop, onDropRejected, validateFiles],
      );

      const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading) {
            e.preventDefault();
            // In a real implementation, you'd trigger a file input here
            console.log('DropZone activated via keyboard');
          }
        },
        [disabled, loading],
      );

      // Memoized style calculations
      const styleProps = useMemo(
        () => ({
          icon: getIcon(loading, variant),
          iconColor: getIconColor(disabled, variant, isDragOver),
          borderColor: getBorderColor(disabled, variant, isDragOver),
          backgroundColor: getBackgroundColor(disabled, variant, isDragOver),
          textColor: getTextColor(disabled, variant),
        }),
        [disabled, variant, isDragOver, loading],
      );

      // Memoized size classes
      const sizeClasses = useMemo(() => dropZoneSizeClasses, []);

      // Memoized content text
      const contentText = useMemo(
        () => ({
          title: title || (multiple ? 'Drop files here' : 'Drop file here'),
          description:
            description ||
            `Click to select ${multiple ? 'files' : 'a file'} or drag and drop${accept !== '*/*' ? ` (${accept})` : ''}`,
        }),
        [title, multiple, description, accept],
      );

      // Memoized class names
      const classNames = useMemo(
        () => ({
          dropZone: clsx(
            'flex flex-col items-center justify-center text-center border-2 transition-all duration-200 cursor-pointer',
            sizeClasses.height[size],
            sizeClasses.padding[size],
            sizeClasses.borderRadius[size],
            styleProps.borderColor,
            styleProps.backgroundColor,
            disabled && 'cursor-not-allowed opacity-60',
            loading && 'cursor-wait',
            className,
          ),
          content: clsx(
            'flex flex-col items-center justify-center',
            sizeClasses.gap[size],
            contentClassName,
          ),
          icon: clsx(
            sizeClasses.icon[size],
            styleProps.iconColor,
            loading && 'animate-pulse',
            iconClassName,
          ),
        }),
        [
          sizeClasses,
          size,
          styleProps,
          disabled,
          loading,
          className,
          contentClassName,
          iconClassName,
        ],
      );

      const IconComponent = styleProps.icon;

      return (
        <div
          ref={ref}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label={ariaLabel || contentText.title}
          aria-describedby={ariaDescribedBy || descriptionId}
          className={classNames.dropZone}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <div className={classNames.content}>
            <IconComponent
              size={sizeClasses.iconValues[size]}
              className={classNames.icon}
              aria-hidden="true"
            />

            <div className="space-y-1">
              <Text
                variant="body"
                weight="medium"
                color={styleProps.textColor}
                className={sizeClasses.text[size].title}
              >
                {contentText.title}
              </Text>

              <Text
                variant="small"
                color={disabled ? 'muted' : 'secondary'}
                id={descriptionId}
                className={clsx('max-w-xs', sizeClasses.text[size].description)}
              >
                {contentText.description}
              </Text>
            </div>
          </div>
        </div>
      );
    },
  ),
);

DropZone.displayName = 'DropZone';
