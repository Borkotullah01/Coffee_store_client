import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const CreateCoffee = () => {

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
      fetch("https://coffee-store-server-virid-nine.vercel.app/coffees",{
        method: "post",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.acknowledged == true) {
          Swal.fire({
            title: "Coffee Created successfully!",
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
            <h1 className="text-center text-3xl font-semibold font-rancho">Add New Coffee</h1>
            <p className="text-center text-sm font-light">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>  
          </div>
            <form onSubmit={hangleAddCoffee} className='mt-6 w-full space-y-2'>
                <div className="join gap-8 w-full">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                          <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="join gap-8 w-full">
                    <div className="w-full">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Supplier</span>
                      </label>
                      <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="join gap-8 w-full">
                    <div className="w-full">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                          <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />
                </div>
                <div className="form-control pt-3">
                  <button className="btn bg-[#D2B48C] font-rancho">Add Coffee</button>
                </div>
            </form> 
        </div>
    );
};

export default CreateCoffee;