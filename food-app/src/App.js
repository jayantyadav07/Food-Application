import React, { lazy ,Suspense, useEffect, useState} from "react";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter ,Outlet} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';
// import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import appStore from "./appStore"
import Cart from "./Cart";


const About = lazy(()=>import("./About"))
function App() {
   const[username,setUsername]=useState("")

  useEffect(()=>{
    const data={
      name:"jayant yadav"
    }
    setUsername(data.name)
  },[])
  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username,setUsername}}>
      <Header />
     <Outlet/>
     </UserContext.Provider>
     </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
       
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,
     
      },
      {
        path:"/contact",
        element:<Contact/>,
     
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>,

  },

 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={appRouter}/>

);

export default App;
