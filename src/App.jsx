import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
// import Hello from "./components/Hello";
import About from "./components/About";
import SoundCloud from "./components/SoundCloud";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <SocialMedia />
            <SoundCloud />
            {/* <Hello /> */}
            <Footer />
        </div>


    )
}