    import { useState } from 'react';
    import '../styles/Slideshow.scss';

    function Slideshow({ pictures }) {
        const [currentIndex, setCurrentIndex] = useState(0);

        const previousSlide = () => {
            setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
        };

        const nextSlide = () => {
            setCurrentIndex((currentIndex + 1) % pictures.length);
        };

        const hasMultiplePictures = pictures.length > 1;

        return (
            <div className="slideshow">
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />

    {hasMultiplePictures && (
        <>
            <button className="arrow left" onClick={previousSlide}>
                ❮
            </button>

            <button className="arrow right" onClick={nextSlide}>
                ❯
            </button>

            <p className="counter">
                {currentIndex + 1}/{pictures.length}
            </p>
        </>
    )}
            </div>
        );
    }

    export default Slideshow;