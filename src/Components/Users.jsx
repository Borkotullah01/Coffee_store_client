import React, { useState } from 'react';
import User from './User';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const LoadUsers = useLoaderData();
    return (
        <div>
            <User LoadUsers={LoadUsers}/>
        </div>
    );
};

export default Users;