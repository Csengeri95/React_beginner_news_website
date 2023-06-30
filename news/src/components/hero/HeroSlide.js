import { useNavigate } from "react-router-dom"
import "../../styles/HeroSlide.css"
import { slide } from "../../datasource/heroSource"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useState } from "react";
import { VscCalendar } from "react-icons/vsc";



export default function HeroSlide(props) {

    const navigate = useNavigate();

    const sortByDate = [...slide].sort(function (a, b) {
        return new Date(a.time) - new Date(b.time)
    })

    const [list] = useState(sortByDate)




    return (

        <div className="heroSlide flex ">


            <Grid
                container
                align="center"
                className="mb-1"
                spacing={1}
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center">
                {list.slice(0, 3).map((map, index) => {
                    return (

                        <Grid item xs={12} sm={4} md={4} key={index}>

                            <Card
                                className="Grid"
                                //style={{ borderRadius: ".1rem" }}
                                sx={{ maxWidth: 350 }}
                            >
                                <CardMedia
                                    component="img"
                                    alt={map.title}
                                    title={map.title}
                                    height="150"
                                    image={map.cover}
                                />

                                <CardContent>
                                    <Typography
                                        className="title"
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        onClick={() => map.category === "political" ? navigate("/political/" + map.slug) : navigate("/cultural/" + map.slug)

                                        }>
                                        {map.title}
                                    </Typography>
                                    <Typography className="author" variant="body2">
                                        {map.author}
                                    </Typography>
                                    <Typography className="date" fontSize={14} fontWeight={600}>
                                       <VscCalendar /> {map.time}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    )
                })}
            </Grid>



        </div>

    )
}