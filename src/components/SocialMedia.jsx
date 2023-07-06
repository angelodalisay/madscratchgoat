// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import './SocialMedia.css'
import Instagram from "../assets/ph_instagram-logo-light.png"
import Facebook from "../assets/ph_facebook-logo-light.png"
import Twitter from "../assets/iconoir_twitter.png"
import TikTok from "../assets/iconoir_tiktok.png"


export default function SocialMedia() {

    return (
        <div className="social-media-section">
            <p className="title">Connect with us</p>
            <div className="icon-container">
                <a href=""><img src={Instagram} alt="instagram icon" className="icon"/></a>
                <a href=""><img src={Facebook} alt="facebook icon" className="icon"/></a>
                <a href=""><img src={Twitter} alt="facebook icon" className="icon"/></a>
                <a href=""><img src={TikTok} alt="facebook icon" className="icon"/></a>
            </div>
        </div>
    )
}