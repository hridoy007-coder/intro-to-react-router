import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate();

    const handelNavigation =()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>Id:{id}</h5>
            <h5>Title:{title}</h5>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show me</button></Link>
            <button onClick={handelNavigation}>With button handler</button>
        </div>
    );
};

export default Post;