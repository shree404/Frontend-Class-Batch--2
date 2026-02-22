import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



function Navbar(){

    // const [isActive , setisActive] = useState();

    const NavItems = [
        {
            name:"Home",
            slug:"/"
        },
         {
            name:"About",
            slug:"/about"
        },
         {
            name:"Contact",
            slug:"/contact"
        }

    ]


    // const isActive = (path) => pathname === path;
    return(
        <>
        <nav style={{display:'flex' , justifyContent:"space-around" , position:'fixed' , top:'0' ,left:'0',right:'0'}}>
            {/* <a href="facebook.com" > facebook</a> */}
            {/* <button>Facebook</button> <button>Instagram</button> */}
            {/* <Link to="https:facebook.com" >Facebook</Link> */}
          
          
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link> */}
            {NavItems.map((item,index) => (
                <NavLink to={item.slug} key={index} className={({isActive }) => isActive ?  "active" :""}>{item.name}</NavLink>
            ))}
            
        </nav>
        </>
    )
}

export default Navbar;