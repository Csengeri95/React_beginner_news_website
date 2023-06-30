import "../styles/SelectedPage.css"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Link } from "react-router-dom"
import { VscCalendar } from "react-icons/vsc";
import { Helmet } from 'react-helmet-async';


export default function SelectedPage({ selected }) {

    const { user } = useContext(UserContext);
    let maxLength = 150;

    return (


        <div className="selected row">

            <Helmet>
                <title>{selected.title}</title>
                <meta name="description" content={selected.title.slice(0, 160)} />

                <meta property="og:title" content={selected.title} />
                <meta property="og:description" content={selected.title.slice(0, 160)} />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content={`news.hu/${selected.category}/${selected.slug}`} />
            </Helmet>

            <div className="col-12">
                <div className="head col-12 mt-1" key={selected.id}>
                    <p>{selected.category}</p>
                    <h1>{selected.title}</h1>
                    <div className="col-12">
                        <img
                            src={selected.authorImage}
                            alt={selected.author}
                            title={selected.author}
                        />
                    </div>
                    <h4 className="author">{selected.author}</h4>
                    <h5 className="time"><VscCalendar style={{ marginRight: "0.2rem" }} />{selected.time}</h5>


                    <button className="loginBtn loginBtn--facebook mt-1 mb-1">
                        Megosztom
                    </button>

                    <button className="loginBtn loginBtn--google mt-1 mb-1">
                        Elküldés
                    </button>
                </div>


                <div className="main col-12 mb-2">
                    <hr className="w-50" />


                    <section>

                        <h2 className="mb-1">{selected.articleTitle}</h2>

                        <p>{selected.articleText}</p>

                        {user !== null && <p>{selected.articleSecondText}</p>}
                        {user == null && <p>{selected.articleSecondText > maxLength ? selected.articleSecondText.slice(0, maxLength) + "..." : selected.articleSecondText}</p>}


                    </section>



                    {user == null && selected.login === true && <p>Kérem a teljes cikk elolvasásához <Link to="/login"> jelentkezzen be </Link>!</p>}
                </div>
            </div>
        </div>
    )
}