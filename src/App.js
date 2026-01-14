import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
   const fetchPosts= async()=>{
    setLoading (true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
   } 
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
