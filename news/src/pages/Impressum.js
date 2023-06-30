import '../styles/Impressum.css'
import { authors } from '../datasource/authors'
import { useNavigate } from 'react-router-dom'
export default function Impressum(props) {

    const navigate = useNavigate();
    return (
        <div className='impressum row'>
            <div className='col-12 p-2 text-center'>
                <h1>Impresszum</h1>

                <h2 className='mt-2'>Médium neve: News.hu</h2>
                <h3>Munkatársak:</h3>
                {authors.map((map, index) => {
                    return (
                        
                        <p className='mt-1' onClick={() => navigate(`/authors/${map.slug}`)} key={index}>{map.author}</p>
                        
                    )
                })}
            </div>
        </div>
    )
}