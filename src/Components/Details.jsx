import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const coffee = useLoaderData();
    const {name, chef, price, supplier, category, details, photo} = coffee;
    return (
    <div className="p-8 bg-[#F5F4F1] rounded-lg">
        <div className="grid grid-cols-2 max-w-xl gap-4 mx-auto justify-center items-center text-center">
            <div className="col-span-1">
                <img className='' src={photo} alt="" />
            </div>
            <div className="col-span-1 text-start font-semibold text-[#1B1A1A]">
                <p className='font-rancho text-5xl py-3'>Niceties</p>
                <p>Name : <span className="font-light text-[#5C5B5B]">{name}</span></p>
                <p>Chef : <span className="font-light text-[#5C5B5B]">{chef}</span></p>
                <p>Price : <span className="font-light text-[#5C5B5B]">{price} Taka</span></p>
                <p>Supplier : <span className="font-light text-[#5C5B5B]">{supplier}</span></p>
                <p>Category : <span className="font-light text-[#5C5B5B]">{category}</span></p>
                <p>Details : <span className="font-light text-[#5C5B5B]">{details}</span></p>
            </div>
        </div>
    </div>
    );
};

export default Details;