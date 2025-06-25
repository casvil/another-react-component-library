import * as React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from './Form';
import { FormInput } from './FormInput';

describe('Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders form with children', () => {
      const onSubmit = vi.fn();

      const { container } = render(
        <Form onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
          <FormInput name="password" label="Password" type="password" />
        </Form>,
      );

      expect(container.querySelector('form')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('renders default submit button', () => {
      const onSubmit = vi.fn();

      render(
        <Form onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
        </Form>,
      );

      expect(
        screen.getByRole('button', { name: 'Submit' }),
      ).toBeInTheDocument();
    });

    it('renders custom submit text', () => {
      const onSubmit = vi.fn();

      render(
        <Form onSubmit={onSubmit} submitText="Send Message">
          <FormInput name="email" label="Email" />
        </Form>,
      );

      expect(
        screen.getByRole('button', { name: 'Send Message' }),
      ).toBeInTheDocument();
    });

    it('hides submit button when showSubmitButton is false', () => {
      const onSubmit = vi.fn();

      render(
        <Form onSubmit={onSubmit} showSubmitButton={false}>
          <FormInput name="email" label="Email" />
        </Form>,
      );

      expect(
        screen.queryByRole('button', { name: 'Submit' }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Layout and Styling', () => {
    it('applies vertical layout by default', () => {
      const onSubmit = vi.fn();

      const { container } = render(
        <Form onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
        </Form>,
      );

      const form = container.querySelector('form');
      expect(form).toHaveClass('flex', 'flex-col');
    });

    it('applies custom className', () => {
      const onSubmit = vi.fn();

      const { container } = render(
        <Form onSubmit={onSubmit} className="custom-form-class">
          <FormInput name="email" label="Email" />
        </Form>,
      );

      const form = container.querySelector('form');
      expect(form).toHaveClass('custom-form-class');
    });
  });

  describe('Form Submission', () => {
    it('calls onSubmit with form data', async () => {
      const user = userEvent.setup();
      const onSubmit = vi.fn().mockResolvedValue(undefined);

      render(
        <Form onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
          <FormInput name="name" label="Name" />
        </Form>,
      );

      // Fill out form
      await user.type(screen.getByLabelText('Email'), 'test@example.com');
      await user.type(screen.getByLabelText('Name'), 'John Doe');

      // Submit form
      await user.click(screen.getByRole('button', { name: 'Submit' }));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          {
            email: 'test@example.com',
            name: 'John Doe',
          },
          expect.objectContaining({
            reset: expect.any(Function),
            setErrors: expect.any(Function),
            setFieldValue: expect.any(Function),
            getFieldValue: expect.any(Function),
            setFieldError: expect.any(Function),
            clearFieldError: expect.any(Function),
            isSubmitting: true,
          }),
        );
      });
    });
  });

  describe('DOM Props Handling (Critical Fix)', () => {
    it('passes valid HTML form props to form element', () => {
      const onSubmit = vi.fn();

      render(
        <Form
          onSubmit={onSubmit}
          id="my-form"
          role="form"
          data-testid="test-form"
          aria-label="Contact form"
        >
          <FormInput name="email" label="Email" />
        </Form>,
      );

      const form = screen.getByRole('form');
      expect(form).toHaveAttribute('id', 'my-form');
      expect(form).toHaveAttribute('data-testid', 'test-form');
      expect(form).toHaveAttribute('aria-label', 'Contact form');
    });

    it('does not pass custom Form props to DOM element (prevents React warnings)', () => {
      const onSubmit = vi.fn();
      const onValidate = vi.fn();

      const { container } = render(
        <Form
          onSubmit={onSubmit}
          onValidate={onValidate}
          validateOnBlur={true}
          validateOnChange={true}
          validateOnSubmit={true}
          initialValues={{ email: 'test@example.com' }}
        >
          <FormInput name="email" label="Email" />
        </Form>,
      );

      const form = container.querySelector('form');

      // These should NOT appear as DOM attributes (this was the bug)
      expect(form).not.toHaveAttribute('validateonblur');
      expect(form).not.toHaveAttribute('validateonchange');
      expect(form).not.toHaveAttribute('validateonsubmit');
      expect(form).not.toHaveAttribute('onvalidate');
      expect(form).not.toHaveAttribute('initialvalues');
    });
  });

  describe('Accessibility', () => {
    it('sets noValidate attribute on form', () => {
      const onSubmit = vi.fn();

      const { container } = render(
        <Form onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
        </Form>,
      );

      const form = container.querySelector('form');
      expect(form).toHaveAttribute('noValidate');
    });
  });

  describe('Forward Ref', () => {
    it('forwards ref to form element', () => {
      const onSubmit = vi.fn();
      const ref = React.createRef<HTMLFormElement>();

      const { container } = render(
        <Form ref={ref} onSubmit={onSubmit}>
          <FormInput name="email" label="Email" />
        </Form>,
      );

      expect(ref.current).toBeInstanceOf(HTMLFormElement);
      expect(ref.current).toBe(container.querySelector('form'));
    });
  });
});
