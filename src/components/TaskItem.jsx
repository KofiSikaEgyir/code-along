import {TrashIcon} from "@heroicons/react/outline";

function TaskItem({task, handleDelete}) {
    return(
        <div className="flex items-center bg-teal-200 p-2 borer-2 border-grey-300 rounded-md">
                <div className="flex-1">{task}</div>
                <div className="bg-blue-600 p-2 rounded-md"
                onClick={() => handleDelete(task)}
                >
                    <TrashIcon height={24} color="white" />
                </div>
        </div>
    )
}

export default TaskItem;