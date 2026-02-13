import type { ColumnType } from "../types"
import TaskCard from "./TaskCard"

export default function Column({ column }: { column: ColumnType }) {

    return (
        <>
            <section className="column">
                <h2 className="column__title">{column.title}</h2>

                <div className="column__task-card-group">
                    {column.tasks.map(task => <TaskCard task={task} />)}
                </div>
            </section>
        </>   
    )
}
