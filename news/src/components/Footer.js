import "../styles/Footer.css";



import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const config = require('../../package.json')



export default function Footer(props) {

    return (
        <div className='footer text-center'>
            <div className="row">
                <div className="col-12 mt-1">
                    <p>Minden jog fenntartva &copy; {config.year}</p>
                    <p>Készítő: {config.creator}</p>
                    <div className="mt-1">
                        <a>
                            <AiFillFacebook
                                size={35}
                                alt="Facebook"
                                title="Facebook"
                            />
                        </a>


                        <a>
                            <AiFillTwitterSquare
                                size={35}
                                alt="Twitter"
                                title="Twitter"
                            />
                        </a>

                        <a>
                            <AiFillInstagram
                                size={35}
                                alt="Instagram"
                                title="Instagram"
                            />
                        </a>

                        <a>
                            <AiFillYoutube
                                size={35}
                                alt="Youtube"
                                title="Youtube"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}