import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react"
import type { Item } from "../items/Columns"
import { UpdateItemForm } from "./UpdateItemForm"
import { useState } from "react"

export interface UpdateItemModalProps {
    item: Item
}

export default function UpdateItemModal({ item }: UpdateItemModalProps) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="border px-5 py-1 rounded-md mt-5 cursor-pointer bg-gray-300"><Pencil /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <UpdateItemForm
                    item={item}
                    setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    )
}
