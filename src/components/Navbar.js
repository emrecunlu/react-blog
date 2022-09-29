import classNames from "classnames";
import {Link, NavLink} from "react-router-dom";
import HugIcon from "./icons/HugIcon";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <nav className="py-5 md:py-0">
                <div className="w-full max-w-6xl mx-auto flex items-center justify-between bg-white px-10">
                    <NavLink to="/">
                        <HugIcon size={34}/>
                    </NavLink>
                    <ul className="md:flex hidden items-center">
                        <li>
                            <NavLink className={({isActive}) => classNames({
                                'font-medium block py-[30px] px-4': true,
                                'text-red-600': isActive
                            })} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => classNames({
                                'font-medium py-[30px] px-4': true,
                                'text-red-600': isActive
                            })} to="/blogs">
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => classNames({
                                'font-medium py-[30px] px-4': true,
                                'text-red-600': isActive
                            })} to="/works">
                                Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => classNames({
                                'font-medium py-[30px] px-4': true,
                                'text-red-600': isActive
                            })} to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div onClick={() => setMenu(menu => !menu)}
                         className="flex flex-col gap-y-[5px] cursor-pointer block md:hidden">
                        <span className="w-8 h-[2px] bg-[#0A2A42] rounded-md"></span>
                        <span className="w-8 h-[2px] bg-[#0A2A42] rounded-md"></span>
                        <span className="w-8 h-[2px] bg-[#0A2A42] rounded-md"></span>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {menu && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border bg-white border-gray-100 mx-10">
                        <ul className="flex items-center flex-col">
                            <li>
                                <NavLink className={({isActive}) => classNames({
                                    'font-medium block py-[15px] px-4': true,
                                    'text-red-600': isActive
                                })} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => classNames({
                                    'font-medium block py-[15px] px-4': true,
                                    'text-red-600': isActive
                                })} to="/blogs">
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => classNames({
                                    'font-medium block py-[15px] px-4': true,
                                    'text-red-600': isActive
                                })} to="/works">
                                    Works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => classNames({
                                    'font-medium block py-[15px] px-4': true,
                                    'text-red-600': isActive
                                })} to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="flex items-center justify-center my-5 gap-x-6">
                            <li>
                                <NavLink to="/">
                                    <AiFillLinkedin className="text-gray-400" size={24} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <AiFillTwitterSquare className="text-gray-400" size={24} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <AiFillInstagram className="text-gray-400" size={24} />
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}