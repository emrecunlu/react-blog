import {AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-20">
            <div className="w-full max-w-5xl mx-auto text-center px-10">
                <ul className="flex items-center justify-center mb-10 gap-x-6">
                    <li>
                        <Link to="/">
                            <AiFillLinkedin className="text-gray-400" size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <AiFillTwitterSquare className="text-gray-400" size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <AiFillInstagram className="text-gray-400" size={24} />
                        </Link>
                    </li>
                </ul>
                <span className="text-sm text-gray-500">© 2022 Your Name. All rights reserved.</span>
            </div>
        </footer>
    )
}