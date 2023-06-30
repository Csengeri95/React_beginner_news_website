import { useNavigate } from "react-router-dom"
import { VscCalendar } from "react-icons/vsc";



export default function Card({ list }) {

    const navigate = useNavigate();


    return (
        <>
            <div className="box">
                <div className="img">
                    <img src={list.cover} alt={list.title} title={list.title} />
                </div>
                <div className="text">
                    <h1
                        className="titleFirst"
                        onClick={() => list.category === "political" ? navigate("/political/" + list.slug) : navigate("/cultural/" + list.slug)}>
                        {list.title}
                    </h1>

                    <div className="author flex">
                        <span>{list.author}</span>
                        <span><VscCalendar style={{marginRight:"0.3rem"}} />{list.time}</span>
                    </div>
                </div>
            </div>
        </>
    )
}