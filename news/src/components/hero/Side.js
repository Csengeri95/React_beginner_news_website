import { useState } from "react";
import { sideArticles } from "../../datasource/heroSource";
import { useNavigate } from "react-router-dom";
import "../../styles/Side.css";
import { VscCalendar } from "react-icons/vsc";


export default function Side(props) {

    const navigate = useNavigate();
    const sortByDate = [...sideArticles].sort(function (a, b) {
        return new Date(a.time) - new Date(b.time)
    })

    const [list] = useState(sortByDate)

    return (

        <div className="side row">

            <div className="card-holder col-12 flex p-1">

                {list.map((map, index) => {
                    return (
                        <div key={index} className="side-card mb-1">
                            <h1 onClick={() => map.category === "political" ? navigate("/political/" + map.slug) : navigate("/cultural/" + map.slug)} >{map.title}</h1>
                            <p>{map.author}</p>
                            <p><VscCalendar style={{ marginRight: '0.3rem' }} />{map.time}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}