import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';
import Footer from '../components/Footer.jsx';

import AboutBanner from '../assets/about-banner1.png';

import '../styles/About.scss';

function About() {
    return (
        <div className="about-page">

            <Banner Img={AboutBanner} />

            <div className="about-collapses">

                <Collapse title="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes.
                    </p>
                </Collapse>

                <Collapse title="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>

                <Collapse title="Service">
                    <p>
                        La qualité du service est au cœur de notre engagement chez Kasa.
                        Nous veillons à ce que chaque interaction, que ce soit avec nos
                        hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                    </p>
                </Collapse>

                <Collapse title="Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                        pour les voyageurs, chaque logement correspond aux critères de
                        sécurité établis par nos services.
                    </p>
                </Collapse>

            </div>

            <Footer />

        </div>
    );
}

export default About;