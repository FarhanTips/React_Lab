
import "./posts card css.css"

export default function PostsCard({post, children}){
    return (
        <div className="postsCard">
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <p>children: {children}</p>
        </div>
    )
}


/***
 * 
 * 
 * তুমি আলাদাভাবে children নামে কিছু পাঠাওনি, কিন্তু যখন তুমি লেখো:

<PostsCard post={elem}>
    Hello
</PostsCard>

তখন React automatically Hello-কে children prop হিসেবে পাঠিয়ে দেয়।

মানে React এটাকে conceptually এমনভাবে দেখে:

<PostsCard
    post={elem}
    children="Hello"
/>

তাই component-এ:

export default function PostsCard({ post, children }) {

এখানে children পাওয়া যায়।

Compare করো

তুমি লিখলে:

<PostsCard post={elem} />

তখন:

post = elem
children = undefined

আর লিখলে:

<PostsCard post={elem}>
    Hello
</PostsCard>

তখন:

post = elem
children = "Hello"

আর যদি:

<PostsCard post={elem}>
    <h2>Hello</h2>
</PostsCard>

তাহলে:

post = elem
children = <h2>Hello</h2>

অর্থাৎ opening tag আর closing tag-এর মাঝখানে যা রাখো, React সেটাকে automatically children prop বানিয়ে দেয়।

এই জন্যই:

function PostsCard({ post, children }) {

লিখলে children পাওয়া যাচ্ছে।
 */

