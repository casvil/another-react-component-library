import React, {
  forwardRef,
  useState,
  useCallback,
  useMemo,
  useRef,
  DragEvent,
  ChangeEvent,
} from 'react';
import { clsx } from 'clsx';
import { themeClasses } from '../../theme/utils';

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
  if (disabled) return 'text-[var(--color-text-tertiary)]';
  if (variant === 'success') return 'text-[var(--color-success-500)]';
  if (variant === 'error') return 'text-[var(--color-error-500)]';
  if (isDragOver) return 'text-[var(--color-primary-500)]';
  return 'text-[var(--color-text-secondary)]';
};

const getBorderColor = (
  disabled: boolean,
  variant: DropZoneVariant,
  isDragOver: boolean,
) => {
  if (disabled) return 'border-[var(--color-border-tertiary)]';
  if (variant === 'success') return 'border-[var(--color-success-300)]';
  if (variant === 'error') return 'border-[var(--color-error-300)]';
  if (isDragOver) return 'border-[var(--color-primary-400)] border-solid';
  return 'border-[var(--color-border-primary)] border-dashed';
};

const getBackgroundColor = (
  disabled: boolean,
  variant: DropZoneVariant,
  isDragOver: boolean,
) => {
  if (disabled) return 'bg-[var(--color-surface-tertiary)]';
  if (variant === 'success') return 'bg-[var(--color-success-50)]';
  if (variant === 'error') return 'bg-[var(--color-error-50)]';
  if (isDragOver) return 'bg-[var(--color-primary-50)]';
  return 'bg-[var(--color-surface-primary)] hover:bg-[var(--color-surface-secondary)]';
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
 * DropZone molecule component. A file upload area that supports both drag & drop
 * and click-to-select functionality with comprehensive validation and accessibility features.
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
      const fileInputRef = useRef<HTMLInputElement>(null);

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

      // Process files from any source (drag & drop or file input)
      const processFiles = useCallback(
        (files: FileList) => {
          if (files.length === 0) return;

          const { valid, invalid, error } = validateFiles(files);

          if (valid.length > 0 && onDrop) {
            onDrop(valid);
          }

          if (invalid.length > 0 && error && onDropRejected) {
            onDropRejected(invalid, error);
          }
        },
        [validateFiles, onDrop, onDropRejected],
      );

      // Handle file input change
      const handleFileInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files) {
            processFiles(files);
          }
          // Reset input value to allow selecting the same file again
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        },
        [processFiles],
      );

      // Handle click to open file dialog
      const handleClick = useCallback(() => {
        if (disabled || loading) return;
        fileInputRef.current?.click();
      }, [disabled, loading]);

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
          processFiles(files);
        },
        [disabled, loading, processFiles],
      );

      const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading) {
            e.preventDefault();
            handleClick();
          }
        },
        [disabled, loading, handleClick],
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
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {/* Hidden file input for click-to-upload functionality */}
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleFileInputChange}
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
          />

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
