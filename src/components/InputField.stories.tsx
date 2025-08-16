import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
    value: "",
  },
  argTypes: {
    onChange: { action: "changed" },
    onClear: { action: "cleared" },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Cannot edit",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    helperText: "Filled style input",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    helperText: "Ghost style input",
  },
};

export const WithClearButton: Story = {
  args: {
    clearable: true,
    value: "Clear me",
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    type: "password",
    passwordToggle: true,
  },
};
