import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { TiEye } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const CoffeeCard = ({coffee}) => {
    const {_id, name, chef, price, photo} = coffee;

    const handleDelete = (_id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "delete",
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                })
            }
          });
    }

    return (
    <Link to={`/details/${_id}`} className="grid grid-cols-5 gap-4 justify-between items-center text-center p-8 bg-[#F5F4F1] rounded-lg">
        <div className="col-span-2">
            <img className='h-[150px]' src={photo} alt="" />
        </div>
        <div className="col-span-2 text-start text-[#1B1A1A]">
            <p>Name: <span className="text-[#5C5B5B]">{name}</span></p>
            <p>Chef: <span className="text-[#5C5B5B]">{chef}</span></p>
            <p>Price: <span className="text-[#5C5B5B]">{price} Taka</span></p>
        </div>
        <div className="">
            <div className="join join-vertical gap-2">
              <Link to={`/details/${_id}`} className="btn btn-sm rounded-md text-white bg-[#D2B48C]"><TiEye /></Link>
              <Link to={`/update/${_id}`} className="btn btn-sm rounded-md text-white bg-[#3C393B]"><FaPen /></Link>
              <Link onClick={()=>handleDelete(_id)} className="btn btn-sm rounded-md text-white bg-[#EA4744]"><MdDelete /></Link>
            </div>
        </div>
    </Link>
    );
};

export default CoffeeCard;