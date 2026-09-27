import '../styles/Banner.scss';

function Banner({ Title, Img }) {
    return (
        <div className="banner">
            <img src={Img} alt="Banner" />
            {Title && <h1>{Title}</h1>}
        </div>
    );
}

export default Banner;