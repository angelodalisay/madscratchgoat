import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
// import Hello from "./components/Hello";
import BookNowButton from "./components/BookNowButton"
import About from "./components/About";
import Review from './components/Review'
import SoundCloud from "./components/SoundCloud";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrottToTopButton";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <Review />
            <SocialMedia />
            <SoundCloud />
            <Contact />
            <ScrollToTopButton />
            <Footer />
        </div>


    )
}