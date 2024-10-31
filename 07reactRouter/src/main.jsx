import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import { Home, About, Contact, User, Github, githubInfo } from './components/index.js';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about-us",
//       element: <About />
//     }, {
//       path: "contact-us",
//       element: <Contact />
//     }]
//   }
// ]);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element=<Layout /> >
    <Route path='' element=<Home /> />
    <Route path='about-us' element=<About /> />
    <Route path='contact-us' element=<Contact /> />
    <Route path='user/:userId' element=<User /> />
    <Route path='github' loader={githubInfo} element=<Github /> />
  </Route>
));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
