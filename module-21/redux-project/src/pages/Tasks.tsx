import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { changePriority, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch()
    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Tasks</h1>
                <div className="flex justify-end">
                    <Tabs defaultValue="All" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger onClick={() => dispatch(changePriority("All"))} value="All">All</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(changePriority("High"))} value="High">High</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(changePriority("Medium"))} value="Medium">Medium</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(changePriority("Low"))} value="Low">Low</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <AddTaskModal />
                </div>
            </div>

            {
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            }
        </div>
    )
}

export default Tasks