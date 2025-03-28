import { RegisterOptions } from "react-hook-form";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  feedback: string;
};

export type FormField = {
  name: keyof FormData;
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  rules: Omit<RegisterOptions<FormData, keyof FormData>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate">;
};

export const formFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    rules: { required: "First name is required" },
  },
  {
    name: "lastName",
    label: "Last Name",
    rules: { required: "Last name is required" },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    rules: {
      required: "Email is required",
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
    },
  },
  {
    name: "feedback",
    label: "What can I do to improve my portfolio?",
    multiline: true,
    rows: 4,
    rules: { required: "Feedback is required" },
  },
];
