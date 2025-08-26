import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ItemForm } from "./ItemForm"

export default function AddItemModal() {
    return (
        <Dialog>
            <DialogTrigger className="border px-5 py-1 rounded-md mt-5 cursor-pointer bg-gray-300">Add Item</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <ItemForm />
            </DialogContent>
        </Dialog>
    )
}
