import { useApi } from "@/hooks/use-api";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useEffect, useState } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

interface propsReactTable {
    columns: any,
    url: string,
}

export function ReactTabel<T = unknown>(props: propsReactTable) {

    const [data, setData] = useState<T[]>([]);
    const { get } = useApi();
    async function init() {
        const url = `${props.url}?skip=0`;
        const response = await get<any>(url);
        if(response){
            setData(response.values)
        }
    }
    
    const theme = useTheme([
        getTheme(),
        {
          Table: `
            --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
          `,
        },
      ]);

    useEffect(() => {
        init();
    }, [])

    if(data?.length === 0) return null;

    return (
        <CompactTable
            columns={props.columns}
            data={data}
            theme={theme}
            layout={{ custom: true, horizontalScroll: true }}
        />
    )
}