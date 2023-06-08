import Home from "./Pages/home"
import { Login } from "./Pages/Login"
import { Route, Link, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';
import { useState } from "react";

function App() {
  document.title = 'Nero';
  const router = createBrowserRouter(

    createRoutesFromElements(<Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<p> Theres nothing here: 404!</p>} />
      </Route>
    )
  );
  
  return (
    <>
      <div>
         <RouterProvider router={router}/>
       </div>
    </>
  )
}

const Root = () =>{

  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);

  return (
    <>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        
        {user ? (
        <button onClick={handleLogout}>Sign Out</button>
        ) : (
            <button onClick={handleLogin}>Sign In</button>
        )} 
      </nav>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
