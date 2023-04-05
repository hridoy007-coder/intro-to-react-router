import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h4>name:{friend.name}</h4>
            <h4>Phone:{friend.phone}</h4>
        </div>
    );
};

export default FriendDetail;