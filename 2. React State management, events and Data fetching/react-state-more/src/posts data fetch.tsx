import { use } from "react";
import PostsCard from "./posts card";


export default function Posts({props}){
    const posts = use(props);
    console.log(posts);
    return (
        <div>
            <h3>Posts data length = {posts.length}</h3>
            {
                posts.map(elem => <PostsCard post = {elem}>Hello</PostsCard>)
            }
        </div>
    )
}