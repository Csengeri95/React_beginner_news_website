import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import AuthorSlider from "./AuthorSlider";





export default function Content({ pages }) {
    const location = useLocation();
    const { user } = useContext(UserContext)

    return (

        <Routes location={location} key={location.pathname}>

            {pages.map(pages => (
                <Route key={pages.path} element={pages.element} path={pages.path} />
            ))}

            <Route path="/political/:slug" element={<Home />} />
            <Route path="/cultural/:slug" element={<Home />} />


            <Route path="/authors/:slug" element={<AuthorSlider />} />

            <Route path="/register" element={<Register />} />
            {user == null && <Route path="/login" element={<Login />} />}
            {user !== null && <Route path="/login" element={<Home />} />}

       
            <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    )



}