import "../styles/SelectedAuthor.css"
import { newsAll } from "../datasource/newsAll"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function SelectedAuthor({ selected }) {

    const navigate = useNavigate()

    let maxLength = 100;

    return (
        <div className="selectedAuthor text-center">

            <Helmet>
                <title>{selected.author} - News.hu</title>
                <meta name="description" content="" />

                <meta property="og:title" content={`${selected.author} - News.hu`} />
                <meta property="og:description" content={`${selected.author} - News.hu`} />
                <meta property="og:image" content={selected.authorImage} />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content={`news.hu/authors/${selected.slug}`} />
            </Helmet>
            <div className="row">
                <div className="head col-12">
                    <h1 className="mt-1">{selected.author}</h1>
                    <div className="col-12">
                        <img
                            src={selected.authorImage}
                            alt={selected.author}
                            title={selected.author}
                        />
                    </div>
                </div>

                <hr />

                <div className="main col-12 mt-2 mb-1 flex ">

                    {newsAll.filter(e => e.author === selected.author).map((map, index) => {
                        return (
                            <div
                                key={index}
                                className="articles mb-2 flex">

                                <img
                                    src={map.cover}
                                    alt={map.title}
                                    title={map.title}
                                />


                                <div className="articles-body ">
                                    <h2 onClick={() => map.category === "political" ? navigate("/political/" + map.slug) : navigate("/cultural/" + map.slug)


                                    } >{map.title}</h2>
                                    <h3>{map.articleText.length > maxLength ? map.articleText.slice(0, maxLength) + "..." : map.articleText}</h3>

                                    <h3>{map.time}</h3>
                                    <p>{map.category}</p>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}