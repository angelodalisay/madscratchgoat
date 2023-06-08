import Navbar from "./components/Navbar"
// import Hello from "./components/Hello";
import About from "./components/About";
import SoundCloud from "./components/SoundCloud";

export default function App() {
    return (
        <div id='app'>
            <Navbar />
            <About />
            <SoundCloud />
            {/* <Hello /> */}
        </div>


    )
}