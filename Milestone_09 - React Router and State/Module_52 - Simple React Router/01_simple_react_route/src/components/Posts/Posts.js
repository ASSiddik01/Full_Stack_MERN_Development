import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data));
    },[])
    return (
        <div>
            <h2>Post:{posts.length} </h2>
            {
                posts.map(post => <Link style={{marginRight:'10px'}}
                    key={post.id}
                    to={`/posts/${post.id}`}
                >{post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;