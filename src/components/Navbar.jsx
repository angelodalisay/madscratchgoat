import '../css/Navbar.css'
import Logo from "../assets/MadScratchGoatLogo.png"

export default function Navbar() {
    return (
        <div className="nav">
            <a href="#music" className="nav-item">MUSIC</a>
            <a href="#" className="nav-item">EVENTS</a>
            <img src={Logo} alt="madscratchgoat logo" className="logo"/>
            <a href="#header-2" className="nav-item">ABOUT</a>
            <a href="#" className="nav-item">CONTACT</a>
        </div>
    )
}