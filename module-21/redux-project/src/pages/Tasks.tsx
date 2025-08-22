import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetTasksQuery } from "@/redux/api/baseAPI";

const Tasks = () => {
    const { data, isLoading, isError } = useGetTasksQuery(undefined)
    console.log({ data, isLoading, isError });

    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Tasks</h1>
                <div className="flex justify-end">
                    <Tabs defaultValue="All" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="All">All</TabsTrigger>
                            <TabsTrigger value="High">High</TabsTrigger>
                            <TabsTrigger value="Medium">Medium</TabsTrigger>
                            <TabsTrigger value="Low">Low</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <AddTaskModal />
                </div>
            </div>

            {
                data.tasks.map(task => <TaskCard key={task.id} task={task} />)
            }
        </div>
    )
}

export default Tasks