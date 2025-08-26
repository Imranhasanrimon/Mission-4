import { useGetItemsQuery } from "@/redux/api/itemCreateApi"
import { DataTable } from "./data-table";
import { columns } from "./Columns";
import AddItemModal from "../addItems/AddItemModal";

export default function ItemPage() {
    const { data, isLoading } = useGetItemsQuery(undefined);


    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <DataTable columns={columns} data={data} />
            <div className="flex flex-col items-center justify-center">
                <AddItemModal />
            </div>
        </div>
    )
}
