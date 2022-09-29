import {Link} from "react-router-dom";

export default function About() {
    return (
        <section className="bg-white py-14" id="about">
            <div className="w-full max-w-5xl mx-auto px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-x-[70px]">
                    <div className="flex-1 md:order-1 order-2 md:mt-0 mt-10 text-center md:text-left">
                        <h1 className="text-4xl font-bold">Hi, I’m John!</h1>
                        <h1 className="text-4xl font-bold">Creative Technologist</h1>
                        <p className="py-6 text-lg text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <Link className="bg-red-400 text-white rounded px-8 py-[10px] text-sm font-semibold inline-block" to="/works">
                            Check My Works
                        </Link>
                    </div>
                    <img className="md:order-2 order-1" width={243} height={243} src="/static/img/about_avatar.png" alt=""/>
                </div>
            </div>
        </section>
    )
}