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
                    {/* <p className="footer-title">Links</p>
                    <a href="" className="website-link">www.website.com</a>
                    <a href="" className="website-link">www.website.com</a> */}
                </div>
            <p className="copywrite">Copywrite { new Date().getFullYear()} MADSCRATCH G.O.A.T</p>
            </div>
        </div>
    )
}