import {Link} from "react-router-dom";

export default function PostItem({post}) {
    return (
        <article className="bg-white rounded">
            <Link className="p-4 block" to={post.slug}>
                <h1 className="text-[#0A2A42] font-semibold text-2xl">{post.title}</h1>
                <div className="flex items-center gap-x-3 mt-2 text-sm">
                    <span className="font-medium">{post.createdAt}</span>
                    <span className="font-medium">|</span>
                    <span className="font-medium">{post.category}</span>
                </div>
                <p className="mt-6 text-lg text-gray-500">{post.desc}</p>
            </Link>
        </article>
    )
}