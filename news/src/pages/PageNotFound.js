import "../styles/PageNotFound.css"
import { Helmet } from 'react-helmet-async'

export default function PageNotFound(props) {
    return (
        <div className="pageNotFound col-12 row text-center mt-1">

            <Helmet>
                <meta name="description" content='A keresett oldal nem található, kérem ellenőrizze, hogy megfelelő címet írt-e be!' />
                <title>News.hu -  A keresett oldal nem található! - 404 </title>
                <meta property="og:title" content='News.hu -  A keresett oldal nem található! - 404' />
                <meta property="og:description" content='A keresett oldal nem található, kérem ellenőrizze, hogy megfelelő címet írt-e be!' />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content={window.location.href} />

            </Helmet>

            <h1>A keresett oldal nem elérhető !</h1>
            <h2>Ellenőrizze, hogy megfelelő címet írt-e be!</h2>
        </div>
    )
}