import { useEffect, type Dispatch, type SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { Item } from "../items/Columns"
import { useUpdateItemMutation } from "@/redux/api/itemCreateApi"
// import { useUpdateItemMutation } from "@/redux/api/itemCreateApi" // 👈 change to your update API

//schema definition (same as create)
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    sku: z.string().min(1, "SKU is required"),
    category: z.string().min(1, "Category is required"),
    quantity: z.number().int().nonnegative("Quantity must be >= 0"),
    unit: z.string().min(1, "Unit is required"),
    description: z.string().optional(),
})

interface UpdateItemFormProps {
    item: Item
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export function UpdateItemForm({ item, setOpen }: UpdateItemFormProps) {
    const [updateItem, { isLoading, isSuccess, }] = useUpdateItemMutation()
    useEffect(() => {
        if (isSuccess) {
            setOpen?.(false);
        }
    }, [isSuccess, setOpen]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: item.name,
            sku: item.sku,
            category: item.category,
            quantity: item.quantity,
            unit: item.unit,
            description: item.description || "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await updateItem({ id: item._id, data: values }).unwrap()
            console.log("✅ Updated:", res)
            // if (isSuccess) {
            //     setOpen?.(false) // close modal or refresh table
            // }
        } catch (err) {
            console.error("❌ Update failed:", err)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Item Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Provide your item name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* SKU */}
                <FormField
                    control={form.control}
                    name="sku"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>SKU</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. MRK-244" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Category */}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. Stationery" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Quantity */}
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter quantity"
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Unit */}
                <FormField
                    control={form.control}
                    name="unit"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. pcs, box, kg" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Optional item description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update"}
                </Button>
            </form>
        </Form>
    )
}
