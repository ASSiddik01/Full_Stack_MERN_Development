import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id])
    return (
        <div>
            <h1>This is post details: {id} </h1>
            <h5> {post?.title} </h5>
            <p> {post?.body} </p>
        </div>
    );
};

export default PostDetails;