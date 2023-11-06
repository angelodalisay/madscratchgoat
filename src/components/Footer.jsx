import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-icon-container">
                <h1>Stay Connected</h1>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faFacebook} size="2x" />
                    </a>
                    <a href="https://www.youtube.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faYoutube} size="2x" />
                    </a>
                    <a href="https://www.tiktok.com/@madscratchgoat" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faTiktok} size="2x" />
                    </a>
                    <a href="https://soundcloud.com/mad-scratch-goat/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faSoundcloud} size="2x" />
                    </a>
                    <a href="https://www.mixcloud.com/madscratchgoat/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={fab.faMixcloud} size="2x" />
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                <h3>Website made by:</h3>
                    <a href="https://dashonaholtsportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="website-link">Dashona</a>
                    <a href="https://lucilejones-portfolio.onrender.com/" target="_blank" rel="noopener noreferrer" className="website-link">Lucile</a>
                    <a href="https://sisterchicago.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="website-link">Natalie</a>
                    <a href="https://matthew-robinson-web-dev.netlify.app/" target="_blank" rel="noopener noreferrer" className="website-link">Matthew</a>
                    <a href="https://benvredevelt.com" target="_blank" className="website-link">Benjamin's Portfolio</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="copywrite">© MADSCRATCH G.O.A.T {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}
