import { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";
import type { Column } from "./components/DataTable";

const sampleData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Editor" },
  { id: 4, name: "Diana", email: "diana@example.com", role: "Admin" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "User" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "Editor" },
  { id: 7, name: "Grace", email: "grace@example.com", role: "User" },
];

const columns: Column<(typeof sampleData)[0]>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
  { key: "role", title: "Role", dataIndex: "role", sortable: true },
];

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Component Demo</h1>

      <div>
        <h2 className="text-xl mb-2">InputField Example</h2>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          helperText="Controlled input example"
        />
      </div>

      <div>
        <h2 className="text-xl mb-2">DataTable Example</h2>
        <DataTable data={sampleData} columns={columns} selectable />
      </div>
    </div>
  );
}

export default App;
