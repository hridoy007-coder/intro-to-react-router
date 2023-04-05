import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDeails = () => {
    const post = useLoaderData();
    const { body, title } = post;
    const navigate = useNavigate();

    const handlerGoBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h5>Title:{title}</h5>
            <h3>{body}</h3>
            <button onClick={handlerGoBack}>Go Back</button>
        </div>
    );
};

export default PostDeails;