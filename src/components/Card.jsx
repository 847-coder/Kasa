import { Link } from 'react-router-dom';
import '../styles/Card.scss';

function Card({ HTitle, HImg, id }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <h2>{HTitle}</h2>
            <img src={HImg} alt={HTitle} />
        </Link>
    );
}

export default Card;