import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import type { Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const users: User[] = [
  { id: 1, name: "Alice", age: 24, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 29, email: "charlie@example.com" },
  { id: 4, name: "David", age: 35, email: "david@example.com" },
  { id: 5, name: "Eva", age: 27, email: "eva@example.com" },
  { id: 6, name: "Frank", age: 31, email: "frank@example.com" },
  { id: 7, name: "Grace", age: 26, email: "grace@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: users,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const SingleSelect: Story = {
  args: {
    data: users,
    columns,
    selectable: true,
    multiple: false,
  },
};

export const MultiSelect: Story = {
  args: {
    data: users,
    columns,
    selectable: true,
    multiple: true,
  },
};
