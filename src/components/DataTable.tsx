import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: number | string }>({
  data,
  columns,
  loading = false,
  selectable = false,
  multiple = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    setSortConfig((prev) => {
      if (prev.key === col.dataIndex) {
        return {
          key: col.dataIndex,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key: col.dataIndex, direction: "asc" };
    });
  };

  const handleRowSelect = (row: T) => {
    let updated: T[];
    if (multiple) {
      updated = selectedRows.includes(row)
        ? selectedRows.filter((r) => r !== row)
        : [...selectedRows, row];
    } else {
      updated = [row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2"></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 border-b cursor-pointer select-none"
              onClick={() => handleSort(col)}
            >
              {col.title}
              {col.sortable && sortConfig.key === col.dataIndex && (
                <span className="ml-1">
                  {sortConfig.direction === "asc" ? "🔼" : "🔽"}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="border-b hover:bg-gray-50">
            {selectable && (
              <td className="p-2 text-center">
                <input
                  type={multiple ? "checkbox" : "radio"}
                  checked={selectedRows.includes(row)}
                  onChange={() => handleRowSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
