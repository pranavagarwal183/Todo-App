export function Todos({ todos, markAsComplete }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button
                        onClick={() => markAsComplete(todo.id)}
                        disabled={todo.completed}
                    >
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
