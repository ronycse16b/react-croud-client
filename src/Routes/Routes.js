import { createBrowserRouter } from "react-router-dom"
import AddUser from "../components/AddUser";
import Home from "../components/Home";
import Update from "../components/Update";

const router = createBrowserRouter([

{
    path:'/',
    element:<Home></Home>,
    loader: () => fetch('https://crud-server-weld.vercel.app/users')

},

{
    path:'/users/add',
    element:<AddUser></AddUser>
},
{
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params}) =>fetch(`https://crud-server-weld.vercel.app/users/${params.id}`)
}




]);

export default router;