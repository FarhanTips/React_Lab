
import "./posts card css.css"

export default function PostsCard({post}){
    return (
        <div className="postsCard">
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
        </div>
    )
}