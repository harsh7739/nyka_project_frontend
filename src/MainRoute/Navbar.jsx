import { Link, Route, Routes } from "react-router-dom"

function Navbar(){
    return (
        <>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/feed"}>Feed</Link>
        </>
    )
}
export default Navbar