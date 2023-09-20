import '../css/Footer.css'
import Instagram from "../assets/ph_instagram-logo-light.png"
import Facebook from "../assets/ph_facebook-logo-light.png"
import Twitter from "../assets/iconoir_twitter.png"
import TikTok from "../assets/iconoir_tiktok.png"

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-sub-container">
                <div className="footer-social-media">
                    {/* <p className="footer-title">Social Media</p> */}
                    <div>
                    <a href=""><img src={Instagram} alt="instagram icon" className="footer-icon"/></a>
                <a href=""><img src={Facebook} alt="facebook icon" className="footer-icon"/></a>
                <a href=""><img src={Twitter} alt="facebook icon" className="footer-icon"/></a>
                <a href=""><img src={TikTok} alt="facebook icon" className="footer-icon"/></a>
                    </div>
                
                </div>
                <div className="footer-links">
                    <h3>Made By:</h3><br />
                    <a href="https://dashonaholtsportfolio.netlify.app/" target="_blank" className="website-link">Dashona's Portfolio</a>
                    <a href="https://lucilejones-portfolio.onrender.com/" target="_blank" className="website-link">Lucile's Portfolio</a>
                    <a href="https://sisterchicago.github.io/portfolio/" target="_blank" className="website-link">Natalie's Portfolio</a>
                    <a href="https://super-stardust-4644df.netlify.app/about" target="_blank" className="website-link">Benjamin's Portfolio</a>
                </div>
            </div>
            <script>

            </script>
            <p className="copywrite">© MADSCRATCH G.O.A.T { new Date().getFullYear()}</p>
        </div>
    )
}
