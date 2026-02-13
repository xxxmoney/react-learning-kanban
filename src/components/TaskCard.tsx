import type { TaskType } from "../types";

export default function TaskCard({ task }: { task: TaskType }) {

    return (
        <>
            <article className="task-card" data-id={task.id}>
                <h3 className="task-card__title">{task.title}</h3>

                <p className="task-card__description">{task.description}</p>

                <button className="task-card__edit-button" aria-label="Edit">
                    <i className="task-card__edit-button-icon" aria-hidden="true">&#9998;</i>
                </button>
            </article>
        </>
    )
}
