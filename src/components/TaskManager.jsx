import React, {useState, useEffect} from "react";

import { v4 as uuid } from "uuid";

import TaskItem from "./TaskItem";

function TaskManager(){
const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem('tasks')
    if(!tasks) return [];
    return JSON.parse(tasks);

});
const [input, setInput] = useState("");
// console.log(tasks);
const handleSubmit = (e) => {
    e.preventDefault();
    if(input === "") return;

    let newTask = {
        id: uuid(),
        text: input,
        completed: true,
    };

    setTasks([newTask, ...tasks], () => {})

    setInput("")
};
    
    const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
};
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks) )
    },[tasks])

    return (
 <div className="h-screen w-screen bg-blue-600 flex justify-center items-center" >
            <div className="max-w-xl w-full max-h-96 bg-white rounded-xl px-5 py-10">
                <form  onSubmit={handleSubmit} className="space-x-5 w-{30rem} flex mb-10">
                    <input type= "text" className="border-2
                     border-green-400 p-2 rounded-md outline-none w-10/12" 
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                      />
                     
                    <button type="Submit" className="bg-blue-600
                     text-white text-lg py-2 px-7 rounded-md"
                    disabled={input === ""}
                     > Add</button>
                </form>
                <div className="space-y-3 h-56 overflow-y-auto">
                    {
                    tasks.map((task) => (
                    <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
                ))}
                </div>
            </div>
    </div>
    );
}

export default TaskManager;