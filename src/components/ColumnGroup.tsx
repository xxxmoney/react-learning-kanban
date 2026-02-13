import type { ColumnType } from "../types";
import Column from "./Column";

export default function ColumnGroup({ columnList }: { columnList: ColumnType[] }) {

    return (
        <>
            <div className="column-group">
                {columnList.map(column => <Column column={column} />)}
            </div>
        </>
    )
}
