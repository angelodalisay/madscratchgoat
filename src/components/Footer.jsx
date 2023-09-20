import '../css/Footer.css'
import SocialMedia from "./SocialMedia";
import Instagram from "../assets/ph_instagram-logo-light.png"
import Facebook from "../assets/ph_facebook-logo-light.png"
import Twitter from "../assets/iconoir_twitter.png"
import TikTok from "../assets/iconoir_tiktok.png"


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sub-container">
                <div className="footer-social-media">
                <SocialMedia/>                
                </div>
                <div className="footer-links">
                    {/* <p className="footer-title">Links</p>
                    <a href="" className="website-link">www.website.com</a>
                    <a href="" className="website-link">www.website.com</a> */}
                </div>
            <p className="copywrite">Copywrite { new Date().getFullYear()} MADSCRATCH G.O.A.T</p>
            </div>
        </div>
    )
}