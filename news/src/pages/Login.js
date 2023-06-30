import "../styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { Helmet } from "react-helmet-async";




export default function Login(props) {

    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const { setLogin } = useContext(SnackbarContext)


    function handleSubmit(event) {
        event.preventDefault();
        let formData = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post("http://127.0.0.1:8000/login", formData)
            .then(response => {
                const result = response.data;
                setError(result.error)
                if (result.message !== undefined) {
                    setUser(result.data);

                    navigate("/")
                    setLogin(true)
                }

            })
            .catch(error => {
                alert("Hiba, a szerver nem érhető el!");
            });
    }



    return (
        <div className="login text-center">

            <Helmet>
                <meta name="description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <title>News.hu - a független, naprakész média - hiteles, friss hírek - bejelentkezés </title>
                <meta property="og:title" content="News.hu - a független, naprakész média - hiteles, friss hírek - bejelentkezés" />
                <meta property="og:description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content="https://news.hu/login" />

            </Helmet>

            <div className="row">
                <div className="col-12">
                    <h1 className="mt-1">Belépés</h1>

                    <div className="form-container ">


                        <form onSubmit={handleSubmit} className="flex " method="post">

                            <p className='error mb-1'>{error}</p>
                            <label> <HiMail className="mr-1" />E-mail</label>
                            <input
                                className="mb-1"
                                type="email"
                                name="email"
                                placeholder="E-mail-cím"
                                autoComplete="off"
                            />

                            <label><HiLockClosed className="mr-1" />Jelszó</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Jelszó"
                                autoComplete="off"
                            />
                            <button className="mt-1">Belépés</button>


                        </form>

                        <Link to="/register"><p className="mt-1">Amennyiben még nem regisztrált kérem kattintson erre a linkre!</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}