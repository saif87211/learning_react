import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth"

export default function LogoutBtn() {
    const distpatcher = useDispatch();

    const logoutHandler = () => {
        authService
            .logout()
            .then(() => distpatcher(logout()));
    }
    return <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full">Logout</button>
}