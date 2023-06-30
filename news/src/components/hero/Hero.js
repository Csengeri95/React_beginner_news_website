import { useState } from "react"
import { hero } from "../../datasource/heroSource"
import "../../styles/Hero.css"
import Card from "./Card"



export default function Hero(props) {

    const dateAsc = [...hero].sort(function (a, b) {
        return new Date(a.time) - new Date(b.time)
    })

    const [list] = useState(dateAsc)


    return (
        <div className="hero">
            <div className="container">
                {list.slice(0, 4).map((list) => {
                    return (

                        <Card key={list.id} list={list} />


                    )

                })}

            </div>
        </div>
    )
}