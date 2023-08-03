import { useEffect, useState } from 'react'
import '../css/ScrollToTopButton.css'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, [])

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button className="scroll-button" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>Back to Top</button>
    )
}