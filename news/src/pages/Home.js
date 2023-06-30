import Hero from "../components/hero/Hero";
import "../styles/Home.css";
import HeroSlide from "../components/hero/HeroSlide";
import AuthorSlider from "../components/AuthorSlider";
import { newsAll } from "../datasource/newsAll";
import { useParams } from "react-router-dom";
import SelectedPage from "../pages/SelectedPage";
import Side from "../components/hero/Side";
import { Helmet } from "react-helmet-async";




export default function Home(props) {


    const { slug } = useParams()

    if (slug) {
        let selectedSlide = newsAll.filter(e => e.slug === slug);


        let selected = selectedSlide[0]


        return <SelectedPage key={selected.id} selected={selected} />
    }



    return (
        <div className="home row">
            <Helmet>
                <meta name="description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <title>News.hu - a független, naprakész média - hiteles, friss hírek </title>
                <meta property="og:title" content="News.hu - a független, naprakész média - hiteles, friss hírek" />
                <meta property="og:description" content="Friss belföldi és külföldi hírek, képek – naprakész, friss, gyors – társadalom, politika és kultúra" />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="news.hu" />
                <meta property="og:url" content="https://news.hu/" />

            </Helmet>


            <div className="col-12">

                <div className="col-12 col-xl-9">
                    <Hero />
                </div>

                <div className="col-12 col-xl-3">
                    <Side />
                </div>

                <div className="col-12 col-xl-12 mt-1 mb-2">

                    <HeroSlide />
                </div>


                <hr className="w-50" />

                <div className="col-12">
                    <AuthorSlider />
                </div>

            </div>
        </div>
    )
}