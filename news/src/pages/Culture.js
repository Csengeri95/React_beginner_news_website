import { useNavigate } from "react-router-dom";
import "../styles/Culture.css";
import { newsAll } from "../datasource/newsAll";
import { VscCalendar } from "react-icons/vsc";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { GrFormPrevious, GrFormNextLink } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

export default function Culture(props) {

    const navigate = useNavigate();
    let maxLength = 100;

    const sortByDate = [...newsAll].sort(function (a, b) {
        return new Date(a.time) - new Date(b.time)
    })

    const [list] = useState(sortByDate)

    const [pageNumber, setPageNumber] = useState(0);
    const articlesPerPage = 4;
    const pagesVisited = pageNumber * articlesPerPage;
    const pageCount = Math.ceil(list.filter(a => a.category === "cultural").length / articlesPerPage);

    function changePage({ selected }) {
        setPageNumber(selected)
    }

    const displayArtciles = list
        .filter(a => a.category === "cultural")
        .slice(pagesVisited, pagesVisited + articlesPerPage)
        .map(map => {
            return (
                <div
                    key={map.id}
                    className="articles flex mb-2"
                    onClick={() => navigate('/cultural/' + map.slug)}
                >

                    <img
                        src={map.cover}
                        alt={map.title}
                        title={map.title}
                    />

                    <div className="articles-body">
                        <h2>{map.title}</h2>

                        <h3>{map.articleText.length > maxLength ? map.articleText.slice(0, maxLength) + "..." : map.articleText}</h3>

                        <h3>{map.author}</h3>
                        <h5><VscCalendar style={{ marginRight: "0.3rem" }} />{map.time}</h5>

                    </div>

                </div>

            )
        })

    return (
        <div className="culture">

            <Helmet>
                <meta name="description" content="A legfontosabb külföldi és hazai kultúrális hírek - Szellemi értékeinkről, szokásainkról, életmódunkról mindent egy helyen" />
                <title>News.hu - Kultúrális rovat </title>
                <meta property="og:title" content="News.hu - Kultúrális rovat " />
                <meta property="og:description" content="A legfontosabb külföldi és hazai kultúrális hírek - Szellemi értékeinkről, szokásainkról, életmódunkról mindent egy helyen" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content="https://news.hu/cultural" />

            </Helmet>
            <div className="row">

                <div className="main col-12 mt-1 mb-1 flex">
                    {displayArtciles}

                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={pageNumber === 0 ? null : <GrFormPrevious />}
                        nextLabel={pageNumber === pageCount - 1 ? null : <GrFormNextLink />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination mt-1"}
                        previousLinkClassName={"previous"}
                        nextLinkClassName={"next"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}


                    />
                </div>
            </div>
        </div>
    )
}