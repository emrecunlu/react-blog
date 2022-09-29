import {Link} from "react-router-dom";

export default function WorkItem({work}) {
    return (
        <article className="border-b border-gray-300 border-b-2 pb-6">
            <div className="flex flex-col sm:flex-row gap-6">
                <Link className="block" to="/">
                    <img width={275} height={197} className="w-full" src={'/static/img/' + work.image} alt=""/>
                </Link>
                <div className="flex-1">
                    <Link to="/">
                        <h1 className="text-[#0A2A42] font-semibold text-[28px]">{work.title}</h1>
                    </Link>
                    <div className="flex items-center gap-x-6 mt-2 mb-6">
                        <span className="bg-[#2A326F] text-white font-medium text-sm px-6 py-1 rounded-[8px]">
                            {work.createdAt}
                        </span>
                        <span className="font-medium text-sm text-gray-500">{work.type}</span>
                    </div>
                    <p className="text-[#21243D]">{work.desc}</p>
                </div>
            </div>
        </article>
    )
}