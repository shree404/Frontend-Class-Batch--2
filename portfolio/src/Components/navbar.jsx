import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
        <nav>
            {/* <a href="facebook.com" > facebook</a> */}
            {/* <button>Facebook</button> <button>Instagram</button> */}
            <Link to="https:facebook.com" >Facebook</Link>
        </nav>
        </>
    )
}

export default Navbar;