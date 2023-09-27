import ReactPlayer from "react-player/soundcloud";
import '../css/SoundCloud.css'
import './soundcloud';


export default function SoundCloud() {
    Soundcloud();
    return (
        <div className="sound-cloud-section" id="music">
            <p className="title">Music</p>
            <div className="music-player-container">
                <div id="player1" className="player">
                    <ReactPlayer url="https://soundcloud.com/mad-scratch-goat/high-house-live-mix&amp;color=01A0EB&show_user=false" width="100%" height="100%"/>
                </div>
                <div id="player2" className="player">
                    <ReactPlayer url="https://soundcloud.com/mad-scratch-goat/house-mix-2020&amp;color=01A0EB&show_user=false" width="100%" height="100%"/>
                </div>
                <div id="player3" className="player">
                    <ReactPlayer url="https://soundcloud.com/mad-scratch-goat/house-to-edm&amp;color=01A0EB&show_user=false" width="100%" height="100%"/>
                </div>
                <div id="player4" className="player">
                    <ReactPlayer url="https://soundcloud.com/mad-scratch-goat/chill-house-1&amp;color=01A0EB&show_user=false" width="100%" height="100%"/>
                </div>
                
            </div>
        </div>

    )
}