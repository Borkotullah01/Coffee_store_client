import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const UpdateCoffee = () => {

    const LoadedCofffee = useLoaderData();
    const navigate = useNavigate();
    
    const hangleAddCoffee = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const price = form.price.value;
      const supplier = form.supplier.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const newCoffee = {name, chef, price, supplier, category, details, photo};
      fetch(`http://localhost:5000/coffees/${LoadedCofffee._id}`,{
        method: "put",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update successfully",
            icon: "success",
            draggable: true
          });
          navigate("/");
        }
      })
    }

return (
    <div className='flex flex-col py-10 px-14 justify-center items-center bg-[#F4F3F0] rounded-md mb-8'>
      <div className="text-justify space-y-3 w-full md:max-w-xl">
        <h1 className="text-center text-3xl font-semibold font-rancho">Update Existing Coffee Details</h1>
        <p className="text-center text-sm font-light">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>  
      </div>
        <form onSubmit={hangleAddCoffee} className='mt-6 w-full space-y-2'>
            <div className="join gap-8 w-full">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" defaultValue={LoadedCofffee.name} className="input input-bordered w-full" required />
                </div>
                <div className="w-full">
                    <label className="label">
                      <span className="label-text">Chef</span>
                    </label>
                    <input type="text" name="chef" defaultValue={LoadedCofffee.chef} className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="join gap-8 w-full">
                <div className="w-full">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={LoadedCofffee.price} className="input input-bordered w-full" required />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input type="text" name="supplier" defaultValue={LoadedCofffee.supplier} className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="join gap-8 w-full">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input type="text" name="category" defaultValue={LoadedCofffee.category} className="input input-bordered w-full" required />
                </div>
                <div className="w-full">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <input type="text" name="details" defaultValue={LoadedCofffee.details} className="input input-bordered w-full" required />
                </div>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name="photo" defaultValue={LoadedCofffee.photo} className="input input-bordered w-full" required />
            </div>
            <div className="form-control pt-3">
              <button className="btn bg-[#D2B48C] font-rancho">Add Coffee</button>
            </div>
        </form> 
    </div>
    );
};

export default UpdateCoffee;