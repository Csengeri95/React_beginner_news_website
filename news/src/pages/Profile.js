import axios from "axios";
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext";
import "../styles/Profile.css"
import { Helmet } from "react-helmet-async";
import { useParams, Navigate } from "react-router-dom";


export default function Profile() {

    const [uploadImage, setUploadImage] = useState()
    const { user } = useContext(UserContext)
    const { id } = useParams();

    function convert(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }

        })
    }

    async function handleUpload(e) {
        const file = e.target.files[0];
        const base64 = await convert(file);
        setUploadImage(base64)
    }

    async function createPost(userId, profilePicture) {

        try {
            await axios.post(`http://127.0.0.1:8000/upload-image/${userId}`, { profilePicture })

        } catch (error) {

            console.log(error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        createPost(user.id, uploadImage)
        window.location.href = '/';
    }

    if (user === null) {
        return <Navigate replace to="/login" />;
    }

    if (user.id !== id) {
        return <Navigate to="/" />;
    }

    return (
        <div className="profile row">

            <Helmet>
                <meta name="description" content={`News.hu - ${user.email} E-mail című profil adatlapja`} />
                <title>News.hu - {user.email} felhasználó profiloldala </title>
                <meta property="og:title" content={`News.hu - ${user.email} felhasználó profiloldala`} />
                <meta property="og:description" content={`News.hu - ${user.email} E-mail című profil adatlapja`} />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content={`news.hu/profile/${id}`} />

            </Helmet>

            <div className="container col-12 mt-1 ml-1 flex">

                <h3>E-mail-cím: {user != null && user.email} </h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        accept=".jpeg,.jpg,.png"
                        label="image"
                        name="profilePicture"
                        id="upload"
                        onChange={(e) => handleUpload(e)}
                    />

                    <button>Küldés</button>

                </form>

            </div>

        </div>
    )
}