import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import User from "./User/User.jsx";
import Github from "./Github/Github.jsx";

const githubInfo = async () => {
    const res = await fetch("https://api.github.com/users/saif87211");
    return res.json();
}
export { Header, Home, Footer, About, Contact, User, Github, githubInfo };