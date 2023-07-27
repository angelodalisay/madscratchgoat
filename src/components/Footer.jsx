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
                    <p className="footer-title">Social Media</p>
                    <div>
                    <a href=""><img src={Instagram} alt="instagram icon" className="footer-icon"/></a>
                <a href=""><img src={Facebook} alt="facebook icon" className="footer-icon"/></a>
                <a href=""><img src={Twitter} alt="facebook icon" className="footer-icon"/></a>
                <a href=""><img src={TikTok} alt="facebook icon" className="footer-icon"/></a>
                    </div>
                
                </div>
                <div className="footer-links">
                    <p className="footer-title">Links</p>
                    <a href="" className="website-link">www.website.com</a>
                    <a href="" className="website-link">www.website.com</a>
                </div>
            </div>
            <script>

            </script>
            <p className="copywrite">Copywrite { new Date().getFullYear()} MADSCRATCH G.O.A.T</p>
        </div>
    )
}