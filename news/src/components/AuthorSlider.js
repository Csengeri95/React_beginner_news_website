import Slider from "react-slick";
import { authors } from "../datasource/authors";
import "slick-carousel/slick/slick.css";
import "../styles/slick-theme.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import "../styles/AuthorSlider.css"
import { useNavigate, useParams } from "react-router-dom";
import SelectedAuthor from "../pages/SelectedAuthor";

export default function AuthorSlider(props) {

    const { slug } = useParams()
    const navigate = useNavigate();


    if (slug) {
        let selectedAuthor = authors.filter(x => x.slug === slug);
        let selected = selectedAuthor[0];
        return < SelectedAuthor key={selected.id} selected={selected} />
    }

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        autoplay: true,
        speed: 1000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };



    return (
        <div className="authorSlider mb-2">
            <h1 className="mb-2"> Munkatársaink </h1>
            <Slider className="slider" {...settings}>

                {authors.map((map, index) => {

                    return (
                        <Grid
                            key={index}
                            container
                            align="center"
                            className="mb-1"
                            display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <Grid item xs={7} sm={6} md={6} container align="center">
                                <Card
                                    className="card"
                                    sx={{ Width: 350 }}
                                    onClick={() => navigate("/authors/" + map.slug)}
                                >

                                    <CardMedia
                                        component="img"
                                        alt={map.author}
                                        title={map.author}
                                        height="150"
                                        width="800"
                                        image={map.authorImage}

                                    />


                                    <CardContent>
                                        <Typography
                                            className="author"
                                            gutterBottom
                                            variant="h6"
                                            component="div">
                                            {map.author}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    )
                })}


            </Slider>
        </div>
    );
}