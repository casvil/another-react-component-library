import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DropZone } from './DropZone';

// Mock the useStableId hook
vi.mock('../../hooks/useStableId/useStableId', () => ({
  useStableId: () => 'test-id',
}));

// Mock DataTransfer API for testing environment
class MockDataTransfer {
  files: FileList;
  items: {
    add: (file: File) => void;
    length: number;
  };
  dropEffect: string = 'none';
  effectAllowed: string = 'all';

  constructor() {
    const fileArray: File[] = [];

    this.files = {
      length: 0,
      item: (index: number) => fileArray[index] || null,
      [Symbol.iterator]: function* () {
        for (let i = 0; i < fileArray.length; i++) {
          yield fileArray[i];
        }
      },
    } as FileList;

    this.items = {
      length: 0,
      add: (file: File) => {
        fileArray.push(file);
        Object.defineProperty(this.files, 'length', {
          value: fileArray.length,
          configurable: true,
        });
        Object.defineProperty(this.files, fileArray.length - 1, {
          value: file,
          configurable: true,
        });
        this.items.length = fileArray.length;
      },
    };
  }
}

// Mock DragEvent for testing
class MockDragEvent extends Event {
  dataTransfer: MockDataTransfer;

  constructor(type: string, options: EventInit = {}) {
    super(type, options);
    this.dataTransfer = new MockDataTransfer();
  }
}

// Mock File constructor
class MockFile extends File {
  constructor(chunks: BlobPart[], name: string, options?: FilePropertyBag) {
    super(chunks, name, options);
  }
}

// Set up global mocks
beforeEach(() => {
  // Mock DataTransfer globally
  global.DataTransfer = MockDataTransfer as unknown as typeof DataTransfer;
  global.DragEvent = MockDragEvent as unknown as typeof DragEvent;
  global.File = MockFile as unknown as typeof File;
});

describe('DropZone', () => {
  const mockOnDrop = vi.fn();
  const mockOnDropRejected = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Helper function to create mock files
  const createMockFile = (name: string, size: number, type: string): File => {
    const file = new File([''], name, { type });
    Object.defineProperty(file, 'size', { value: size, configurable: true });
    return file;
  };

  // Helper function to create mock FileList
  const createMockFileList = (files: File[]): FileList => {
    const dt = new MockDataTransfer();
    files.forEach((file) => dt.items.add(file));
    return dt.files;
  };

  // Helper to create drop event with files
  const createDropEvent = (files: File[]) => {
    const dropEvent = new MockDragEvent('drop', { bubbles: true });
    const fileList = createMockFileList(files);
    Object.defineProperty(dropEvent.dataTransfer, 'files', {
      value: fileList,
      configurable: true,
    });
    return dropEvent;
  };

  // Helper to simulate file input change
  const simulateFileInput = (input: HTMLInputElement, files: File[]) => {
    const fileList = createMockFileList(files);
    Object.defineProperty(input, 'files', {
      value: fileList,
      configurable: true,
    });
    fireEvent.change(input);
  };

  it('renders correctly with default props', () => {
    render(<DropZone />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Drop file here')).toBeInTheDocument();
    expect(screen.getByText(/Click to select/)).toBeInTheDocument();
  });

  it('renders with custom title and description', () => {
    render(
      <DropZone title="Upload Image" description="Select a JPG or PNG file" />,
    );

    expect(screen.getByText('Upload Image')).toBeInTheDocument();
    expect(screen.getByText('Select a JPG or PNG file')).toBeInTheDocument();
  });

  it('shows multiple files text when multiple prop is true', () => {
    render(<DropZone multiple />);

    expect(screen.getByText('Drop files here')).toBeInTheDocument();
    expect(screen.getByText(/Click to select files/)).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<DropZone size="sm" data-testid="dropzone" />);
    expect(screen.getByTestId('dropzone')).toHaveClass('min-h-32', 'p-4');

    rerender(<DropZone size="lg" data-testid="dropzone" />);
    expect(screen.getByTestId('dropzone')).toHaveClass('min-h-48', 'p-8');
  });

  it('applies disabled state correctly', () => {
    render(<DropZone disabled data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    expect(dropzone).toHaveClass('cursor-not-allowed', 'opacity-60');
    expect(dropzone).toHaveAttribute('tabIndex', '-1');
  });

  it('applies loading state correctly', () => {
    render(<DropZone loading data-testid="dropzone" />);

    expect(screen.getByTestId('dropzone')).toHaveClass('cursor-wait');
  });

  it('shows success variant styling', () => {
    render(<DropZone variant="success" data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    expect(dropzone).toHaveClass('border-green-300', 'bg-green-50');
  });

  it('shows error variant styling', () => {
    render(<DropZone variant="error" data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    expect(dropzone).toHaveClass('border-red-300', 'bg-red-50');
  });

  it('handles keyboard activation', () => {
    render(<DropZone onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByRole('button');
    const fileInput = screen
      .getByRole('button')
      .querySelector('input[type="file"]') as HTMLInputElement;

    // Mock the click method
    const clickSpy = vi.spyOn(fileInput, 'click').mockImplementation(() => {});

    fireEvent.keyDown(dropzone, { key: 'Enter' });
    expect(clickSpy).toHaveBeenCalled();

    fireEvent.keyDown(dropzone, { key: ' ' });
    expect(clickSpy).toHaveBeenCalledTimes(2);

    clickSpy.mockRestore();
  });

  it('does not handle keyboard activation when disabled', () => {
    render(<DropZone disabled onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByRole('button');
    const fileInput = screen
      .getByRole('button')
      .querySelector('input[type="file"]') as HTMLInputElement;

    // Mock the click method
    const clickSpy = vi.spyOn(fileInput, 'click').mockImplementation(() => {});

    fireEvent.keyDown(dropzone, { key: 'Enter' });
    expect(clickSpy).not.toHaveBeenCalled();

    clickSpy.mockRestore();
  });

  it('opens file dialog when clicked', () => {
    render(<DropZone onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const fileInput = dropzone.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    // Mock the click method
    const clickSpy = vi.spyOn(fileInput, 'click').mockImplementation(() => {});

    fireEvent.click(dropzone);
    expect(clickSpy).toHaveBeenCalled();

    clickSpy.mockRestore();
  });

  it('does not open file dialog when disabled', () => {
    render(<DropZone disabled onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const fileInput = dropzone.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    // Mock the click method
    const clickSpy = vi.spyOn(fileInput, 'click').mockImplementation(() => {});

    fireEvent.click(dropzone);
    expect(clickSpy).not.toHaveBeenCalled();

    clickSpy.mockRestore();
  });

  it('handles file input change with valid files', async () => {
    render(<DropZone onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const fileInput = dropzone.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    const files = [createMockFile('test.txt', 1000, 'text/plain')];
    simulateFileInput(fileInput, files);

    await waitFor(() => {
      expect(mockOnDrop).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  it('resets file input value after processing files', () => {
    render(<DropZone onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const fileInput = dropzone.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    const files = [createMockFile('test.txt', 1000, 'text/plain')];
    simulateFileInput(fileInput, files);

    expect(fileInput.value).toBe('');
  });

  it('has hidden file input with correct attributes', () => {
    render(<DropZone accept="image/*" multiple data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const fileInput = dropzone.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', 'image/*');
    expect(fileInput).toHaveAttribute('multiple');
    expect(fileInput).toHaveClass('sr-only');
    expect(fileInput).toHaveAttribute('tabIndex', '-1');
    expect(fileInput).toHaveAttribute('aria-hidden', 'true');
  });

  it('prevents default drag events', () => {
    render(<DropZone data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');

    const dragEvent = new MockDragEvent('dragover', { bubbles: true });
    const preventDefaultSpy = vi.spyOn(dragEvent, 'preventDefault');

    fireEvent(dropzone, dragEvent);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('calls onDrop with valid files via drag and drop', async () => {
    render(<DropZone onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const files = [createMockFile('test.txt', 1000, 'text/plain')];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    await waitFor(() => {
      expect(mockOnDrop).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  it('calls onDropRejected for files that are too large', async () => {
    const maxSize = 1000;
    render(
      <DropZone
        onDrop={mockOnDrop}
        onDropRejected={mockOnDropRejected}
        maxSize={maxSize}
        data-testid="dropzone"
      />,
    );

    const dropzone = screen.getByTestId('dropzone');
    const files = [createMockFile('large.txt', 2000, 'text/plain')];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    await waitFor(() => {
      expect(mockOnDropRejected).toHaveBeenCalledWith(
        expect.any(Object),
        expect.stringContaining('too large'),
      );
    });
  });

  it('rejects too many files', async () => {
    render(
      <DropZone
        onDrop={mockOnDrop}
        onDropRejected={mockOnDropRejected}
        maxFiles={2}
        data-testid="dropzone"
      />,
    );

    const dropzone = screen.getByTestId('dropzone');
    const files = [
      createMockFile('file1.txt', 1000, 'text/plain'),
      createMockFile('file2.txt', 1000, 'text/plain'),
      createMockFile('file3.txt', 1000, 'text/plain'),
    ];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    await waitFor(() => {
      expect(mockOnDropRejected).toHaveBeenCalledWith(
        expect.any(Object),
        expect.stringContaining('Too many files'),
      );
    });
  });

  it('validates file types correctly', async () => {
    render(
      <DropZone
        onDrop={mockOnDrop}
        onDropRejected={mockOnDropRejected}
        accept="image/jpeg,image/png"
        data-testid="dropzone"
      />,
    );

    const dropzone = screen.getByTestId('dropzone');
    const files = [createMockFile('document.txt', 1000, 'text/plain')];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    await waitFor(() => {
      expect(mockOnDropRejected).toHaveBeenCalledWith(
        expect.any(Object),
        expect.stringContaining('not accepted'),
      );
    });
  });

  it('accepts wildcard file types', async () => {
    render(
      <DropZone onDrop={mockOnDrop} accept="image/*" data-testid="dropzone" />,
    );

    const dropzone = screen.getByTestId('dropzone');
    const files = [createMockFile('image.jpg', 1000, 'image/jpeg')];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    await waitFor(() => {
      expect(mockOnDrop).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  it('does not handle drop when disabled', () => {
    render(<DropZone disabled onDrop={mockOnDrop} data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    const files = [createMockFile('test.txt', 1000, 'text/plain')];
    const dropEvent = createDropEvent(files);

    fireEvent(dropzone, dropEvent);

    expect(mockOnDrop).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<DropZone className="custom-class" data-testid="dropzone" />);

    expect(screen.getByTestId('dropzone')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<DropZone ref={ref} data-testid="dropzone" />);

    expect(ref.current).toBe(screen.getByTestId('dropzone'));
  });

  it('has proper accessibility attributes', () => {
    render(<DropZone aria-label="File upload area" data-testid="dropzone" />);

    const dropzone = screen.getByTestId('dropzone');
    expect(dropzone).toHaveAttribute('role', 'button');
    expect(dropzone).toHaveAttribute('aria-label', 'File upload area');
    expect(dropzone).toHaveAttribute('aria-describedby');
  });
});
