import {Link} from "react-router-dom";
import PostItem from "./PostItem";

export default function Posts() {

    const post = [
        {
            id: 1,
            title: 'Post Title',
            createdAt: '12 Feb 21',
            category: 'Design System',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            slug: 'deneme'
        },
        {
            id: 2 ,
            title: 'Post Title',
            createdAt: '12 Feb 21',
            category: 'Design System',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            slug: 'deneme'
        }
    ]

    return (
        <section className="bg-[#EDF7FA]" id="recent-posts">
            <div className="w-full max-w-5xl mx-auto py-14 px-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Recent Post</h1>
                    <Link className="text-gray-500 text-lg font-semibold" to="/blogs">View All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
                    {post.map(post => <PostItem key={post.id} post={post} />)}
                </div>
            </div>
        </section>
    )
}