import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {

    const {user} = useContext(AuthContext)

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target
        const providerEmail = user.email;
        const providerName = user.displayName;
        const providerImage = user.photoURL;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const imgURL = form.imgURL.value;
        const newService = {providerEmail, providerName, providerImage, serviceName, price, serviceArea, description, imgURL}
        console.log(newService)

        axios.post('http://localhost:3000/services', newService, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
            Swal.fire({
                title: 'Success!',
                text: 'New service added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="border border-red-300 p-20 shadow-2xl mt-14 mb-20 rounded-2xl">
        <h2 className="text-5xl text-center font-bold mb-14 text-red-500">Add <span className="text-black">Service</span></h2>
        <form onSubmit={handleAddService} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10 form-control">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service name</span>
                    </label>
                <input type="text" placeholder="Service name" name="serviceName" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                <input type="number" placeholder="Price" name="price" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service area</span>
                    </label>
                <input type="text" placeholder="Service area" name="serviceArea" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Image URL</span>
                    </label>
                <input type="text" placeholder="Image URL" name="imgURL" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="form-control w-full">
            <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Add Service" className="btn btn-block text-xl font-extrabold bg-red-500 border-none" required/>
        </form>
    </div>
    );
};

export default AddService;