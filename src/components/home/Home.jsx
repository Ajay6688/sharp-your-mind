import { Outlet } from "react-router-dom";
import NavBar from "../navbar"


const Home = ()=>{
    return <>
      <NavBar/>
      <Outlet/>
    </>
}

export default Home ;