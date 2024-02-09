import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Signup from "../component/Signup";
import Feed from "../component/Feed";

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feed" element={<Feed />} />
        </Routes>
        </>
    )
}
export default MainRoute