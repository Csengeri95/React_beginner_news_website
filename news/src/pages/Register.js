import '../styles/Register.css';
import axios from "axios"
import { useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Helmet } from 'react-helmet-async'

export default function Register(props) {

    const [error, setError] = useState("")

    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState("")

    function handleSubmit(event) {
        event.preventDefault();

        let formData = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }



        axios.post("http://127.0.0.1:8000/register", formData)
            .then(response => {

                const result = response.data;
                setError(result.error)
                setMessage(result.message)
                if (result.message !== undefined) {
                    event.target.reset();
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 8000);



                }
            })
            .catch(error => {
                alert("Hiba, a szerver nem érhető el!");
            });
    }



    return (
        <div className="register text-center">

            <Helmet>
                <meta name="description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <title>News.hu - a független, naprakész média - hiteles, friss hírek - regisztráció </title>
                <meta property="og:title" content="News.hu - a független, naprakész média - hiteles, friss hírek - regisztráció" />
                <meta property="og:description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content="https://news.hu/register" />

            </Helmet>

            <div className="row">
                <div className="col-12">
                    <h1 className='mt-1'>Regisztráció</h1>

                    <div className="form-container">

                        <form onSubmit={handleSubmit} className="flex " method="post">

                            <p className='error mb-1'>{error}</p>

                            {success && message !== "" ? <div className="success mb-1"> <span><AiOutlineCheckCircle className="mr-1" /></span>{message}<BsEmojiSmile className='ml-1' /></div> : ""}

                            <label> <HiUser className='mr-1' />Felhasználónév</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Felhasználónév"
                                autoComplete="off"
                            />

                            <label> <HiMail className='mr-1' />E-mail</label>
                            <input
                                className="mb-1"
                                type="email"
                                name="email"
                                placeholder="E-mail-cím"
                                autoComplete="off"
                            />

                            <label><HiLockClosed className='mr-1' /> Jelszó</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Jelszó"
                                autoComplete="off"
                            />
                            <button className="mt-1">Regisztráció</button>


                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}