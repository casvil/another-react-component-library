import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropZone } from './DropZone';

const meta: Meta<typeof DropZone> = {
  title: 'Molecules/DropZone',
  component: DropZone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the drop zone',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
      description: 'Visual variant for different states',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (MIME types or extensions)',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files allowed',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the drop zone',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
  },
  args: {
    onDrop: () => {},
    onDropRejected: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Upload Image',
    description: 'JPG, PNG up to 5MB',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    title: 'Drop Your Files',
    description: 'Any file type, multiple files allowed',
    multiple: true,
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    maxFiles: 5,
    title: 'Upload Multiple Images',
    description: 'Select up to 5 images (JPG, PNG)',
    accept: 'image/jpeg,image/png,.jpg,.png',
  },
};

export const ImageOnly: Story = {
  args: {
    accept: 'image/*',
    title: 'Upload Image',
    description: 'JPG, PNG, GIF, WebP images only',
    maxSize: 5 * 1024 * 1024, // 5MB
  },
};

export const DocumentsOnly: Story = {
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    title: 'Upload Documents',
    description: 'PDF, Word, or text files only',
    multiple: true,
    maxFiles: 10,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Files Uploaded Successfully',
    description: '3 files uploaded successfully',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Upload Failed',
    description: 'File too large. Maximum size: 10MB',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Upload Disabled',
    description: 'File upload is currently disabled',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    title: 'Uploading Files...',
    description: 'Please wait while files are being processed',
  },
};

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled Upload',
    description: 'This drop zone has custom styling',
    className: 'border-purple-300 bg-purple-50',
    iconClassName: 'text-purple-500',
    size: 'lg',
  },
};

export const WithCallbacks: Story = {
  args: {
    title: 'Interactive Upload',
    description: 'Drop files to see console output',
    multiple: true,
    maxSize: 1024 * 1024, // 1MB
    onDrop: (files: FileList) => {
      console.log(
        'Files accepted:',
        Array.from(files).map((f) => f.name),
      );
    },
    onDropRejected: (files: FileList, error: string) => {
      console.log(
        'Files rejected:',
        Array.from(files).map((f) => f.name),
      );
      console.log('Error:', error);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Open the browser console to see file drop events.',
      },
    },
  },
};
