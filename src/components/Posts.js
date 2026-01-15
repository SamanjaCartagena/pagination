import React from 'react';

const Posts = ({ posts, loading, currentPage, postsPerPage }) => { {
  if (loading) {
    return <h2>Loading...</h2>;
  } 
   return (
    <ul className='list-group mb-4'>
        {posts.map(post =>(
            <li key={post.id} className='list-group-item'>
                <h4 >{post.title}</h4>
                <p>{post.body}</p>
            </li>
        ))}

    </ul>
   )
}
};
export default Posts;