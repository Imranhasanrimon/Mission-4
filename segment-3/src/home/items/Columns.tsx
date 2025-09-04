import { type ColumnDef } from "@tanstack/react-table"
import UpdateItemModal from "../updateItems/UpdateItemModal";

export interface Item {
    _id: string;
    name: string;
    sku: string;
    category: string;
    quantity: number;
    unit: string;
    description: string;
    status: "In Stock" | "Out of Stock";
    createdAt?: string; // ISO date string
    updatedAt?: string; // ISO date string
}

export const columns: ColumnDef<Item>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "unit",
        header: "Unit",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
            const date = row.getValue<string>("createdAt")
            return date ? new Date(date).toLocaleDateString() : "-"
        },
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) => {
            const date = row.getValue<string>("updatedAt")
            return date ? new Date(date).toLocaleDateString() : "-"
        },
    },
    {
        id: "actions", // <-- no accessorKey because it's custom
        header: "Actions",
        cell: ({ row }) => {
            const item = row.original // full row data
            return (
                <UpdateItemModal item={item} />
            )
        },
    },
]
