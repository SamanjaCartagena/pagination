import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from './components/Pagination';
import './App.css';
import Posts from './components/Posts';
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
    fetchPosts(); 
  },[])
  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);    

  console.log(posts);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Posts</h1>
      <Posts posts={currentPosts} loading={loading} currentPage={currentPage} postsPerPage={postsPerPage}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
