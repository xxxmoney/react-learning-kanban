
export default function TaskCard() {

    return (
        <>
            <article className="task-card">
                <h3 className="task-card__title">Task Title</h3>

                <p className="task-card__description">Task description</p>

                <button className="task-card__edit-button" aria-label="Edit">
                    <i className="task-card__edit-button-icon" aria-hidden="true">&#9998;</i>
                </button>
            </article>
        </>
    )
}
