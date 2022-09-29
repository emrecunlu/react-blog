import Navbar from "../components/Navbar";
import {Outlet, useLocation} from 'react-router-dom'
import Footer from "../components/Footer";
import {useEffect} from "react";

export default function MainLayout() {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [location.pathname])

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}