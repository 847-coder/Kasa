import Banner from '../components/Banner.jsx';
import Card from '../components/Card.jsx';
import ImgKasa from '../assets/IMG_Kasa.jpg';
import logements from '../data/logements.json';
import '../styles/Home.scss';
import Footer from '../components/Footer.jsx';



function Home() {
    return (
        <div>
            <main className="home">
                <Banner
                    Title="Chez vous, partout et ailleurs"
                    Img={ImgKasa}
                />

                <div className="card-container">
                    {logements.map((logement) => (
                        <Card
                            key={logement.id}
                            id={logement.id}
                            HTitle={logement.title}
                            HImg={logement.cover}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;