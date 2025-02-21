import React, { useState } from 'react';

const User = ({LoadUsers}) => {
    const [users, setUsers] = useState(LoadUsers);

    const handleDelete = (_id) => {
        console.log("Delete",_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = users.filter(user=>user._id != _id);
            setUsers(remaining);
        })
    }
    return (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Creation Time</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index)=>(
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.creationTime}</td>
                    <td>{user?.lastSignInTime}</td>
                    <td><button onClick={()=>handleDelete(user._id)} className='btn btn-sm btn-error text-white'>Delete</button></td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    );
};

export default User;