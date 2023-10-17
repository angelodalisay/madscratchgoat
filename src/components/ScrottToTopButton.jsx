import { useEffect, useState } from 'react';
import '../css/ScrollToTopButton.css';

export default function ScrollToTopButton() {
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;

            if (window.scrollY > 500 && !isScrolledToBottom) {
                setIsRotated(true);
            } else {
                setIsRotated(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`scroll-button ${isRotated ? 'rotated' : ''} ${
                isRotated ? '' : 'horizontal' // Add the horizontal class when not rotated
            }`}
            onClick={goTop}
        >
            Back to Top
        </button>
    );
}
