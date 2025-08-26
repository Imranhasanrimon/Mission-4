import { useGetItemsQuery } from "@/redux/api/itemCreateApi"
import { DataTable } from "./data-table";
import { columns } from "./Columns";

export default function ItemPage() {
    const { data, isLoading } = useGetItemsQuery(undefined);


    if (isLoading) {
        return <p>Loading...</p>
    }

    console.log(data);
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
