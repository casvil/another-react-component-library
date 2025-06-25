import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail, Lock, User, Phone, MapPin, Bell } from 'lucide-react';

import { Form } from './Form';
import { FormInput } from './FormInput';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';
import { Divider } from '../../atoms/Divider/Divider';
import { UserPreview } from '../UserPreview/UserPreview';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { Switch } from '../../atoms/Switch/Switch';
import { FormField } from '../FormField/FormField';
import type { FormData, FormHelpers, FormErrors } from './types';
import { Select } from '../Select/Select';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';

const meta: Meta<typeof Form> = {
  title: 'Molecules/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['onSubmit', 'onValidate', 'onFieldChange', 'onFieldBlur'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'grid'],
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    gridColumns: {
      control: { type: 'number', min: 1, max: 4 },
    },
    onSubmit: { action: 'form-submitted' },
    onValidate: { action: 'form-validated' },
    onFieldChange: { action: 'field-changed' },
    onFieldBlur: { action: 'field-blurred' },
    validateOnChange: {
      control: 'boolean',
      description: 'Validate fields as the user types',
    },
    validateOnBlur: {
      control: 'boolean',
      description: 'Validate fields when they lose focus',
    },
    validateOnSubmit: {
      control: 'boolean',
      description: 'Validate the entire form before submission',
    },
    resetOnSubmit: {
      control: 'boolean',
      description: 'Reset the form after successful submission',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire form',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic form example with Storybook actions
export const BasicForm: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(
        `Form submitted! Check console for detailed logs.\n\nData: ${JSON.stringify(data, null, 2)}`,
      );
    };

    return (
      <div className="w-96">
        <Form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="Enter your email"
            tooltip="We'll never share your email with anyone"
            required
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            icon={Lock}
            placeholder="Enter your password"
            tooltip="Must be at least 8 characters"
            required
            validate={(value) => {
              if (value && value.length < 8) {
                return 'Password must be at least 8 characters';
              }
            }}
          />
        </Form>
      </div>
    );
  },
};

// Advanced validation example with actions
export const WithValidation: Story = {
  args: {
    onSubmit: () => {},
    onValidate: () => {},
  },
  render: (args) => {
    const validateForm = async (data: FormData): Promise<FormErrors> => {
      const errors: FormErrors = {};

      // Log validation to Actions panel
      args.onValidate(data);

      // Simulate async validation (e.g., checking email availability)
      if (data.email === 'taken@example.com') {
        errors.email = 'This email is already taken';
      }

      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }

      return errors;
    };

    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      try {
        // Log to Actions panel
        args.onSubmit(data, helpers);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Registration successful:', data);
        alert('Registration successful!');
        helpers.reset();
      } catch {
        helpers.setErrors({ form: 'Registration failed. Please try again.' });
      }
    };

    return (
      <div className="w-96">
        <Form
          onSubmit={handleSubmit}
          onValidate={validateForm}
          validateOnBlur={true}
          submitText="Register"
          loadingText="Creating account..."
        >
          <FormInput
            name="firstName"
            label="First Name"
            icon={User}
            placeholder="John"
            required
          />

          <FormInput
            name="lastName"
            label="Last Name"
            icon={User}
            placeholder="Doe"
            required
          />

          <FormInput
            name="email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="john@example.com"
            tooltip="Try 'taken@example.com' to see validation error"
            required
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            icon={Lock}
            placeholder="••••••••"
            tooltip="Must be at least 8 characters with numbers"
            required
            validate={(value) => {
              if (!value) return;
              if (value.length < 8)
                return 'Password must be at least 8 characters';
              if (!/\d/.test(value))
                return 'Password must contain at least one number';
            }}
          />

          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            icon={Lock}
            placeholder="••••••••"
            tooltip="Must match your password"
            required
          />
        </Form>
      </div>
    );
  },
};

// Grid layout example
export const GridLayout: Story = {
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Contact form submitted:', data);
      alert('Message sent successfully!');
    };

    return (
      <div className="w-full max-w-2xl">
        <Form
          onSubmit={handleSubmit}
          layout="grid"
          gridColumns={2}
          spacing="lg"
          submitText="Send Message"
        >
          <FormInput
            name="firstName"
            label="First Name"
            icon={User}
            placeholder="John"
            required
          />
          <FormInput
            name="lastName"
            label="Last Name"
            icon={User}
            placeholder="Doe"
            required
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            icon={Mail}
            placeholder="john@example.com"
            tooltip="We'll respond to this email"
            required
          />
          <FormInput
            name="phone"
            label="Phone"
            type="tel"
            icon={Phone}
            placeholder="+1 (555) 123-4567"
            tooltip="Optional: For urgent matters"
          />
          <div className="col-span-2">
            <FormField
              label="Message"
              name="message"
              tooltip="Tell us how we can help you"
              placeholder="Your message here..."
              required
            />
          </div>
        </Form>
      </div>
    );
  },
};

// Horizontal layout example
export const HorizontalLayout: Story = {
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Search submitted:', data);
    };

    return (
      <div className="w-full">
        <Form
          onSubmit={handleSubmit}
          layout="horizontal"
          spacing="sm"
          submitText="Search"
        >
          <FormInput
            name="query"
            label="Search"
            placeholder="Enter search terms..."
            tooltip="Search across all products"
            className="min-w-64"
          />
          <FormInput
            name="category"
            label="Category"
            placeholder="All categories"
            tooltip="Filter by category"
            className="min-w-40"
          />
        </Form>
      </div>
    );
  },
};

// Controlled form example
export const ControlledForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      username: 'john_doe',
      email: 'john@example.com',
    });

    const handleSubmit = async (data: FormData) => {
      setFormData(data);
      console.log('Updated data:', data);
    };

    const handleFieldChange = (name: string, value: unknown) => {
      console.log(`Field ${name} changed to:`, value);
    };

    return (
      <div className="w-96 space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Current Form Data:</h3>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        <Form
          onSubmit={handleSubmit}
          initialValues={formData}
          onFieldChange={handleFieldChange}
          validateOnChange={true}
          submitText="Update Profile"
        >
          <FormInput
            name="username"
            label="Username"
            icon={User}
            placeholder="Enter username"
            tooltip="Must be unique and 3+ characters"
            required
            validate={(value) => {
              if (!value) return;
              if (value.length < 3)
                return 'Username must be at least 3 characters';
              if (!/^[a-zA-Z0-9_]+$/.test(value))
                return 'Username can only contain letters, numbers, and underscores';
            }}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            icon={Mail}
            placeholder="Enter email"
            tooltip="We'll send notifications here"
            required
          />
          <FormInput
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
            tooltip="Optional: Share a bit about yourself"
          />
        </Form>
      </div>
    );
  },
};

// Custom submit button example
export const CustomSubmitButton: Story = {
  render: () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      console.log('Custom submit:', data);
      alert('Custom submission complete!');
    };

    return (
      <div className="w-96">
        <Form
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          showSubmitButton={false}
        >
          <FormInput
            name="title"
            label="Post Title"
            placeholder="Enter title"
            required
          />
          <FormInput
            name="content"
            label="Content"
            placeholder="Write your post..."
            required
          />
          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              label={isSubmitting ? 'Publishing...' : 'Publish Post'}
              disabled={isSubmitting}
              variant="primary"
            />
            <Button
              type="button"
              label="Save Draft"
              variant="secondary"
              onClick={() => console.log('Save draft')}
            />
          </div>
        </Form>
      </div>
    );
  },
};

// Demo: Form integrating with library components
export const ComponentShowcase: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(
        `Form submitted! Check console for detailed logs.\n\nData: ${JSON.stringify(data, null, 2)}`,
      );
    };

    const countryOptions = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
    ];

    const hobbyOptions = [
      { value: 'reading', label: 'Reading' },
      { value: 'gaming', label: 'Gaming' },
      { value: 'cooking', label: 'Cooking' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
    ];

    const accountTypeOptions = [
      {
        value: 'personal',
        label: 'Personal Account',
        description: 'For individual use',
      },
      {
        value: 'business',
        label: 'Business Account',
        description: 'For teams and organizations',
      },
      {
        value: 'enterprise',
        label: 'Enterprise Account',
        description: 'For large organizations',
      },
    ];

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">User Registration Form</h2>
          <p className="text-gray-600">
            This showcases Form molecule orchestrating atoms and molecules from
            our library
          </p>
          <Badge variant="warning" className="mt-2">
            Molecule Component
          </Badge>
        </div>

        <Form
          onSubmit={handleSubmit}
          layout="grid"
          gridColumns={2}
          spacing="lg"
          submitText="Create Account"
          loadingText="Creating account..."
        >
          {/* Personal Information Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
          </div>

          <FormInput
            name="firstName"
            label="First Name"
            icon={User}
            placeholder="John"
            tooltip="Your given name"
            required
          />
          <FormInput
            name="lastName"
            label="Last Name"
            icon={User}
            placeholder="Doe"
            tooltip="Your family name"
            required
          />
          <FormInput
            name="email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="john@example.com"
            tooltip="We'll use this for login and notifications"
            required
          />
          <FormInput
            name="phone"
            label="Phone Number"
            type="tel"
            icon={Phone}
            placeholder="+1 (555) 123-4567"
            tooltip="For account verification and support"
          />

          {/* Address Section */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Address Information
            </h3>
          </div>

          <div className="col-span-2">
            <FormInput
              name="address"
              label="Street Address"
              icon={MapPin}
              placeholder="123 Main Street"
              tooltip="Your full street address"
              required
            />
          </div>

          <FormInput name="city" label="City" placeholder="New York" required />

          <Select
            name="country"
            label="Country"
            placeholder="Select country"
            options={countryOptions}
            required
          />

          {/* Account Preferences */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Account Preferences
            </h3>
          </div>

          <div className="col-span-2">
            <RadioGroup
              name="accountType"
              label="Account Type"
              options={accountTypeOptions}
              required
            />
          </div>

          <div className="col-span-2">
            <CheckboxGroup
              name="hobbies"
              label="Interests & Hobbies"
              description="Select all that apply (optional)"
              options={hobbyOptions}
            />
          </div>

          <div className="col-span-2">
            <TextArea
              name="bio"
              label="Bio"
              placeholder="Tell us a bit about yourself..."
              rows={3}
              tooltip="Optional: Share your background or interests"
            />
          </div>

          {/* Notification Settings */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </h3>
          </div>

          <div className="col-span-2 space-y-4">
            <Switch
              name="emailNotifications"
              label="Email Notifications"
              description="Receive updates and news via email"
              defaultChecked={true}
            />
            <Switch
              name="smsNotifications"
              label="SMS Notifications"
              description="Receive important alerts via SMS"
            />
            <Switch
              name="marketingEmails"
              label="Marketing Communications"
              description="Receive product updates and special offers"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="col-span-2 mt-6">
            <Divider />
            <div className="pt-4">
              <Switch
                name="agreeToTerms"
                label="I agree to the Terms of Service and Privacy Policy"
                description="Required to create an account"
                required
              />
            </div>
          </div>
        </Form>
      </div>
    );
  },
};

// Demo: User Profile Preview Integration
export const WithUserPreview: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const [previewData, setPreviewData] = useState({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      status: 'online' as const,
    });

    const handleSubmit = async (data: FormData) => {
      setPreviewData((prev) => ({ ...prev, ...data }));
      console.log('Profile updated:', data);
    };

    const handleFieldChange = (name: string, value: unknown) => {
      setPreviewData((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Profile Editor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <UserPreview
              avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              name={`${previewData.firstName} ${previewData.lastName}`.trim()}
              username={previewData.email?.split('@')[0] || 'username'}
              status={previewData.status}
              size="lg"
              layout="vertical"
              className="justify-center"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="info" size="sm">
                  Name
                </Badge>
                <span className="text-sm">
                  {`${previewData.firstName} ${previewData.lastName}`.trim() ||
                    'Not set'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning" size="sm">
                  Email
                </Badge>
                <span className="text-sm">
                  {previewData.email || 'Not set'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">
                  Status
                </Badge>
                <span className="text-sm capitalize">{previewData.status}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <Form
              onSubmit={handleSubmit}
              onFieldChange={handleFieldChange}
              initialValues={previewData}
              validateOnChange={true}
              submitText="Update Profile"
              spacing="md"
            >
              <FormInput
                name="firstName"
                label="First Name"
                icon={User}
                placeholder="John"
                required
              />
              <FormInput
                name="lastName"
                label="Last Name"
                icon={User}
                placeholder="Doe"
                required
              />
              <FormInput
                name="email"
                label="Email"
                type="email"
                icon={Mail}
                placeholder="john@example.com"
                required
              />

              <RadioGroup
                name="status"
                label="Status"
                options={[
                  { value: 'online', label: 'Online' },
                  { value: 'offline', label: 'Offline' },
                  { value: 'away', label: 'Away' },
                  { value: 'busy', label: 'Busy' },
                ]}
                required
              />
            </Form>
          </div>
        </div>
      </div>
    );
  },
};

// Contact form with actions logging
export const ContactFormWithActions: Story = {
  args: {
    onSubmit: () => {},
    onFieldChange: () => {},
  },
  render: (args) => {
    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      // Log to Actions panel
      args.onSubmit(data, helpers);

      console.log('Contact form submitted:', data);
      alert(`Message sent from ${data.firstName} ${data.lastName}!`);
    };

    const handleFieldChange = (
      name: string,
      value: unknown,
      allValues: FormData,
    ) => {
      // Log field changes to Actions panel
      args.onFieldChange({
        fieldName: name,
        fieldValue: value,
        formValues: allValues,
      });
    };

    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          Contact Us (with Actions Logging)
        </h2>

        <Form
          onSubmit={handleSubmit}
          onFieldChange={handleFieldChange}
          layout="grid"
          gridColumns={2}
          spacing="lg"
          showSubmitButton={false}
        >
          <FormInput
            name="firstName"
            label="First Name"
            icon={User}
            placeholder="John"
            tooltip="Your given name"
            required
          />

          <FormInput
            name="lastName"
            label="Last Name"
            icon={User}
            placeholder="Doe"
            tooltip="Your family name"
            required
          />

          <FormInput
            name="email"
            label="Email"
            icon={Mail}
            type="email"
            placeholder="john@example.com"
            tooltip="We'll respond to this email"
            required
          />

          <FormInput
            name="phone"
            label="Phone"
            icon={Phone}
            type="tel"
            placeholder="+1 (555) 123-4567"
            tooltip="Optional: For urgent matters"
          />

          {/* Message field spans full width */}
          <div className="col-span-2">
            <FormField
              label="Message"
              name="message"
              tooltip="Tell us how we can help you"
              placeholder="Your message here..."
              required
            />
          </div>

          {/* Submit button positioned to not grow vertically */}
          <div className="col-span-2 flex justify-end">
            <Button
              type="submit"
              label="Send Message"
              variant="primary"
              size="md"
              className="px-8"
            />
          </div>
        </Form>
      </div>
    );
  },
};
