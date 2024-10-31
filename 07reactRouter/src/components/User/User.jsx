import { useParams } from "react-router-dom"
export default function User() {
    const { userId } = useParams();
    return <h1 className="p-8 text-center text-3xl font-bold"> User {userId}</h1>
}