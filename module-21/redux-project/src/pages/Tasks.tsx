import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Tasks</h1>
                <AddTaskModal />
            </div>

            {
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            }
        </div>
    )
}

export default Tasks