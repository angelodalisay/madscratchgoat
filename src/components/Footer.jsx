import '../css/Footer.css'
import SocialMedia from "./SocialMedia";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sub-container">
                <div className="footer-social-media">
                <SocialMedia/>                
                </div>
                <div className="footer-links">
                    <h3>Made By:</h3><br />
                    <a href="https://dashonaholtsportfolio.netlify.app/" target="_blank" className="website-link">Dashona's Portfolio</a>
                    <a href="https://lucilejones-portfolio.onrender.com/" target="_blank" className="website-link">Lucile's Portfolio</a>
                    <a href="https://sisterchicago.github.io/portfolio/" target="_blank" className="website-link">Natalie's Portfolio</a>
                    <a href="https://super-stardust-4644df.netlify.app/about" target="_blank" className="website-link">Benjamin's Portfolio</a>
                </div>
            <p className="copywrite">© MADSCRATCH G.O.A.T { new Date().getFullYear()}</p>
        </div>
    )
}
