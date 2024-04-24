import { ReactTabel } from "@/components/react-table";
import { columns } from "./config";

export function Banner() {
    return (
        <ReactTabel
            columns={columns}
            url="banners/paginacao"
        />
    )
}