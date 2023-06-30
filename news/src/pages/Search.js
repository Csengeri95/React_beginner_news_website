import '../styles/Search.css';
import { useState } from 'react';
import { newsAll } from '../datasource/newsAll';
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet-async'


export default function Search(props) {

    const [filtered, setFiltered] = useState([])
    const navigate = useNavigate();

    function handleChange(e) {
        const search = newsAll.filter(value =>
            value.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.articleTitle.toLowerCase().includes(e.target.value) ||
            value.articleText.toLowerCase().includes(e.target.value) ||
            value.articleSecondText.toLowerCase().includes(e.target.value));


        if (e.target.value === '') {
            setFiltered([])
        }
        else {
            setFiltered(search);
        }


    }

    return (
        <div className="search row">

            <Helmet>
                <meta name="description" content="Keresés a News.hu oldalán megtalálható hírek között" />
                <title>News.hu - Keresés </title>
                <meta property="og:title" content="News.hu - Keresés " />
                <meta property="og:description" content="Keresés a News.hu oldalán megtalálható hírek között" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content="https://news.hu/search" />

            </Helmet>
            <div className='container col-12 flex mt-2'>

                <div className='input'>
                    <input
                        type="search"
                        placeholder='Keresés...'
                        onChange={handleChange}
                    />

                    <button>Keresés</button>

                </div>

                {filtered.length !== 0 ?
                    <div className='result-container mt-1'>
                        {filtered.map((map, index) => {
                            return (
                                <div
                                    key={index}
                                    className="results"
                                    onClick={() => map.category === "political" ? navigate('/political/' + map.slug) : navigate('/cultural/' + map.slug)}
                                >
                                    <p>{map.title}</p><span>{map.author}</span>

                                </div>
                            )
                        })}
                    </div >
                    :
                    <div className='mt-1 text-center'>
                        <h3>Nincs találat</h3>
                    </div>
                }

            </div>

        </div>
    )
}