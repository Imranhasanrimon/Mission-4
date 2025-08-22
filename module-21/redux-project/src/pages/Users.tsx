import { AddUserModal } from "@/components/module/users/AddUserModal"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useAppSelector } from "@/redux/hook"

const Users = () => {
    const users = useAppSelector(selectUsers)

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
                    <h2 className="text-red-500 font-bold">{user.name}</h2>
                    <p className="text-xs">{user.id}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Users