import { AddUserModal } from "@/components/module/users/AddUserModal"
import { deleteUser, selectUsers } from "@/redux/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { Trash2 } from "lucide-react"

const Users = () => {
    const users = useAppSelector(selectUsers)
    const dispatch = useAppDispatch()

    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Users</h1>
                <AddUserModal />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
                {users.map(user => <div
                    className="bg-accent/20 border rounded-md p-2"
                    key={user.id}>
                    <div className="flex justify-between">
                        <h2 className="text-green-400 font-bold">{user.name}</h2>
                        <Trash2 size={18} className="text-red-500" onClick={() => dispatch(deleteUser(user.id))} />
                    </div>
                    <p className="text-xs">{user.id}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Users