import '../styles/Logo.css'
import {Link} from "react-router-dom"


export default function Logo (props) {
    return(
        
       <Link to="/"  className='logo'> <h1>News</h1> </Link>
    )
}