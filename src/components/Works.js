import {Link} from "react-router-dom";
import WorkItem from "./WorkItem";

export default function Works() {

    const works = [
        {
            id: 1,
            title: 'Designing Dashboards',
            createdAt: '2020',
            type: 'Dashboard',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: 'work1.png',
        },
        {
            id: 2,
            title: 'Vibrant Portraits',
            createdAt: '2018',
            type: 'Illustration',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: 'work2.png'
        }
    ]

    return (
        <section className="bg-white py-14" id="featured-works">
            <div className="w-full max-w-5xl mx-auto px-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Featured Work</h1>
                    <Link className="text-gray-500 text-lg font-semibold" to="/works">View All</Link>
                </div>
                <div className="grid grid-cols-1 mt-8 gap-y-4">
                    {works.map(work => <WorkItem key={work.id} work={work} />)}
                </div>
            </div>
        </section>
    )
}