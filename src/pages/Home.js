import About from "../components/About";
import Posts from "../components/Posts";
import Works from "../components/Works";

export default function Home() {
    return (
        <div className="page-wrapper">
            <About />
            <Posts />
            <Works />
        </div>
    )
}