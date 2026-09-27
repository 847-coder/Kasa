import Collapse from '../components/Collapse.jsx';
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow.jsx';
import '../styles/Housing.scss';
import Error404 from './Error404.jsx';

function Housing() {
    const { id } = useParams();

    const logement = logements.find(
        (logement) => logement.id === id
    );

if (!logement) {
    return <Error404 />;
}

    return (
        <>
            <main className="housing">

                <Slideshow pictures={logement.pictures} />

                <h1>{logement.title}</h1>

                <p>{logement.location}</p>

                <div className="tags">
                    {logement.tags.map((tag) => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="host">
                    <p>{logement.host.name}</p>

                    <img
                        src={logement.host.picture}
                        alt={logement.host.name}
                    />
                </div>

                <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={
                                star <= Number(logement.rating)
                                    ? "star active"
                                    : "star"
                            }
                        >
                            ★
                        </span>
                    ))}
                </div>

                <div className="housing-collapses">

                    <Collapse title="Description">
                        {logement.description}
                    </Collapse>

                    <Collapse title="Équipements">
                        {logement.equipments.map((equipment) => (
                            <p key={equipment}>
                                {equipment}
                            </p>
                        ))}
                    </Collapse>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Housing;