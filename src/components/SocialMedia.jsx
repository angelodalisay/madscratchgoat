import '../css/SocialMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default function SocialMedia() {
    library.add(fab, fas, far);
    return (
        <div className="social-media-section">
            <p className="title">Connect with us</p>
            <div className="icon-container">
                <a href="https://www.instagram.com/madscratchgoat/ "target="_blank"><FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl"/></a>
                <a href="https://www.facebook.com/madscratchgoat/ "target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl"/></a>
                <a href="https://www.youtube.com/madscratchgoat/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-youtube" size="2xl"/></a>
                <a href="https://www.tiktok.com/@madscratchgoat" target="_blank"><FontAwesomeIcon icon="fa-brands fa-tiktok" size="2xl"/></a>
                <a href="https://soundcloud.com/mad-scratch-goat/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-soundcloud" size="2xl"/></a>
                <a href="https://www.mixcloud.com/madscratchgoat/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-mixcloud" size="2xl"/></a>
            </div>
        </div>
    )
}