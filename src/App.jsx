import Navbar from "./components/Navbar"
// import Hello from "./components/Hello";
import About from "./components/About";
import SoundCloud from "./components/SoundCloud";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <About />
            <SocialMedia />
            <SoundCloud />
            {/* <Hello /> */}
            <Footer />
        </div>


    )
}