import { use } from "react";
import { Suspense } from 'react';
import './App.css'
import Posts from './posts data fetch';

const postsPromise = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

const helloPromise = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}


function App() {

  return (
    <>
    <Suspense fallback={<p>Please wait...</p>}>
    <Posts props = {postsPromise()}></Posts>
    </Suspense>

    <Suspense fallback={<p>Please wait...</p>}>
    <Hello props = {helloPromise()}></Hello>
    </Suspense>
    </>
  )
}
function Hello({props}){
  // যে function-টাকে JSX-এ React component হিসেবে ব্যবহার করবে, JSX-এ তার নাম Capital letter দিয়ে লিখতে হবে।
    const posts = use(props);
    return (
      <div>

        {
          posts.map(elem=> <p>title: {elem.title}</p>)
        }
      </div>
    )
}
export default App
