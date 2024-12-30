import React, { useEffect, useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router-dom';

const Home = () => {

    const [coffees, setCoffees] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/coffees")
        .then(res=>res.json())
        .then(data=>{
            setCoffees(data)
        })
    },[coffees])

    return (
        <div>
            <div className="text-center mt-5 space-y-3">
                <h1 className='text-3xl font-semibold font-rancho text-center'>Our Popular Products</h1>
                <Link to={"/addCoffee"} className='btn btn-sm bg-[#E3B577] font-rancho'>Add coffee <GiCoffeeCup /></Link>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)}
            </div>
        </div>
    );
};

export default Home;