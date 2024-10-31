import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <div>Login again</div>
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Here is the username : {user.username}</h2>
        </div>
    )
}