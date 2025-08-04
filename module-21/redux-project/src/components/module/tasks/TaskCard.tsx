import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import type { ITask } from "@/types"
import { Trash2 } from "lucide-react"

interface IProps {
    task: ITask;
}
const TaskCard = ({ task }: IProps) => {

    return (
        <div className="border p-3 rounded-md mt-3">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "Low",
                        "bg-yellow-500": task.priority === "Medium",
                        "bg-red-500": task.priority === "High",
                    })} />
                    <h2 className="font-bold text-lg">{task.title}</h2>
                </div>

                <div className="flex items-center gap-2">
                    <Trash2 size={18} className="text-red-500" />
                    <Checkbox />
                </div>
            </div>

            <h3 className="mt-5">{task.description}</h3>
        </div>
    )
}

export default TaskCard