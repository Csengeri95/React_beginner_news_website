import "../styles/Navbar.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import StyleButton from "./Button"
import { UserContext } from "../contexts/UserContext"
import Image from "../images/profile.png"
import Logo from "./Logo";
import { AiFillSetting } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { SnackbarContext } from "../contexts/SnackbarContext"
import axios from "axios"



export default function Navbar({ pages }) {



    const [navbar, setNavbar] = useState(false)
    const location = useLocation();
    const { user, setUser } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const { setLogout } = useContext(SnackbarContext)

    const [userImage, setUserImage] = useState(Image)



    const menuRef = useRef();
    const imgRef = useRef();


    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false)
        }
    })
    function handleLogout() {
        setLogout(true);
        setUser(null);
        setNavbar(false);
        window.location.href = '/';
        localStorage.removeItem("news")


    }
    const navigate = useNavigate()


    useEffect(() => {
        if (user !== null) {
            axios.get(`http://127.0.0.1:8000/profile/${user.id}/profilePicture`)
                .then(response => {
                    if (response.data.data.image !== "") {
                        setUserImage(response.data.data.image)
                    }
                })
        }

    }, [user])

    return (
        <div className="header">
            <div className="row">
                <nav className="navbar col-12">


                    <div className="logo"><Logo /></div>
                    <ul className={navbar ? "navbar-mobile" : "navbar-links"} >

                        {user == null && pages.filter(e => e.status === true).map((pages, index) => {
                            let classes = "";
                            if (pages.path === location.pathname) {
                                classes += "active"
                            }

                            return (
                                <Link
                                    className={classes}
                                    onClick={() => setNavbar(false)} key={index} to={pages.path}><li>{pages.name}</li></Link>

                            )

                        })}

                        {user !== null &&
                            pages.filter(e => e.status === true).map((pages, index) => {
                                let classes = "";
                                if (pages.path === location.pathname) {
                                    classes += "active"
                                }
                                return (
                                    <Link
                                        className={classes}
                                        key={index}
                                        onClick={() => setNavbar(false)} to={pages.path} ><li>{pages.name}</li>
                                    </Link>
                                )
                            })}

                        {user == null && <Link onClick={() => setNavbar(false)} to="/login"><button type="button" className="btn">Belépés</button> </Link>}

                        {user !== null &&
                            <div className="mobile-menus">
                                <Link to={"/profile/" + user.id} onClick={() => setNavbar(false)}>Profil</Link>
                                <Link onClick={() => setNavbar(false)}>Beállítások</Link>
                                <Link onClick={() => setNavbar(false)}>Súgó és Támogatás</Link>
                                <Link onClick={handleLogout}>Kilépés</Link>
                            </div>

                        }

                        {user !== null &&
                            <div className="profile-container">

                                <img ref={imgRef} src={userImage} alt="profile" title="profile" onClick={() => setOpen(!open)} />

                                {open && <div ref={menuRef} className="profile-links" >
                                    <ul>

                                        <li onClick={() => navigate("/profile/" + user.id)}>
                                            <FaUserAlt color="black" size={20} style={{ marginRight: ".3rem" }} />Profil
                                        </li>
                                        <li>
                                            <AiFillSetting color="black" size={22} style={{ marginRight: ".3rem" }} />Beállítások
                                        </li>

                                        <li>
                                            <MdHelp color="black" size={22} style={{ marginRight: ".3rem" }} />Súgó és Támogatás
                                        </li>
                                        <li
                                            onClick={handleLogout}
                                        >
                                            <IoLogOut color="black" size={22} style={{ marginRight: ".3rem" }} />Kilépés
                                        </li>
                                    </ul>
                                </div>}

                            </div>}
                    </ul>

                    <StyleButton navbar={navbar} onClick={() => setNavbar(!navbar)} />

                </nav>
            </div>
        </div>
    )

}