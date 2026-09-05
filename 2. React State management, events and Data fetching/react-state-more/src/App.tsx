
import { Suspense } from 'react';
import './App.css'
import Posts from './posts data fetch';

const postsPromise = async ()=> {
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
    </>
  )
}

export default App
