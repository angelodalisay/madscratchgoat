import ReactPlayer from "react-player/soundcloud";
import '../css/SoundCloud.css'



export default function SoundCloud() {


    return (
        <div className="sound-cloud-section" id="music">
            <p className="title">Music</p>
            <div className="music-player-container">
                {/* <div id="player1" className="player">
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
                </div> */}
                <div className="soundcloud-widget">
                    <iframe width="70%" height="444" scrolling="no" frameborder="no" allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mad-scratch-goat&amp`}>
                    </iframe>
                </div>
            </div>
        </div>

    )
}