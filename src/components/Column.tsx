import TaskCard from "./TaskCard"

export default function Column() {

    return (
        <>
            <section className="column">
                <h2 className="column__title">Column Title</h2>

                <div className="column__task-card-group">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </section>
        </>   
    )
}
