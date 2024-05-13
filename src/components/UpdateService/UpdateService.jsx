import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {

    const serviceDetail = useLoaderData()
    const {_id, serviceName, price, serviceArea, description, imgURL} = serviceDetail

    const handleUpdateService = event => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const imgURL = form.imgURL.value;
        const updatedService = {serviceName, price, location, serviceArea, description, imgURL}
        console.log(updatedService)

        axios.put(`https://heal-hive-server.vercel.app/services/${_id}`, updatedService, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
            Swal.fire({
                title: 'Success!',
                text: 'Service updated successfully',
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
            <Helmet>
                <title>Update Service | Heal Hive</title>
            </Helmet>
        <h2 className="text-5xl text-center font-bold mb-14 text-red-500">Add <span className="text-black">Service</span></h2>
        <form onSubmit={handleUpdateService} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10 form-control">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service name</span>
                    </label>
                <input type="text" defaultValue={serviceName} placeholder="Service name" name="serviceName" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                <input type="number" defaultValue={price} placeholder="Price" name="price" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service area</span>
                    </label>
                <input type="text" defaultValue={serviceArea} placeholder="Service area" name="serviceArea" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Image URL</span>
                    </label>
                <input type="text" defaultValue={imgURL} placeholder="Image URL" name="imgURL" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="form-control w-full">
            <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                <input type="text" defaultValue={description} placeholder="Description" name="description" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Update Service" className="btn btn-block text-xl font-extrabold bg-green-500 border-none" required/>
        </form>
    </div>
    );
};

export default UpdateService;