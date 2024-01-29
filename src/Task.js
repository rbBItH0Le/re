export const Task = (prop) =>{
    return(
        <div className="task" 
        style={{ backgroundColor: prop.completed ? "green" : "white" }}>
            <h1>{prop.taskname}</h1>
            <button onClick={()=>prop.deleteTask(prop.id)}>X</button>
            <button onClick={() =>prop.completeTask(prop.id)}>Complete</button>
        </div>
    )
}