import axios from 'axios';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Booking = () => {

    const serviceDetail = useLoaderData()
    const {_id, providerEmail, providerName, serviceName, price, imgURL} = serviceDetail
    const {user} = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target
        const userEmail = user.email;
        const userName = user.displayName;
        const serviceId = _id;
        const serviceDate = form.serviceDate.value;
        const instruction = form.instruction.value;
        const serviceImage = imgURL;
        const status = 'pending';
        const newBook = {providerEmail, providerName, serviceName, price, userEmail, userName, serviceId, serviceDate, instruction, serviceImage, status}
        console.log(newBook)

        axios.post('https://heal-hive-server.vercel.app/bookings', newBook, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
            Swal.fire({
                title: 'Success!',
                text: 'Booked successfully',
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
                <title>Book a Service | Heal Hive</title>
            </Helmet>
        <h2 className="text-5xl text-center font-bold mb-14 text-red-500">Book <span className="text-black">Service</span></h2>
        <form onSubmit={handleBookService} className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10 form-control">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service id</span>
                    </label>
                <input type="text" readOnly placeholder="Service id" defaultValue={_id} name="serviceId" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service name</span>
                    </label>
                <input type="text" readOnly defaultValue={serviceName} placeholder="Service name" name="price" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service Image</span>
                    </label>
                <input type="text" defaultValue={imgURL} readOnly placeholder="Service Image" name="serviceImage" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Provider email</span>
                    </label>
                <input type="text" defaultValue={providerEmail} readOnly placeholder="" name="providerEmail" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Provider name</span>
                    </label>
                <input type="text" defaultValue={providerName} readOnly placeholder="Provider name" name="providerName" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">User email</span>
                    </label>
                <input type="text" defaultValue={user.email} readOnly placeholder="" name="userEmail" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">User name</span>
                    </label>
                <input type="text" defaultValue={user.displayName} readOnly placeholder="Username" name="userName" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service date</span>
                    </label>
                <input type="date" placeholder="" name="serviceDate" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Need wheelchair? (yes/no)</span>
                    </label>
                <input type="text" placeholder="yes/no" name="instruction" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                <input type="text" placeholder="" defaultValue={`$ ${price}`} readOnly name="price" className="input input-bordered w-full" required/>
                </div>
            </div>
            <input type="submit" value="Purchase" className="btn btn-block text-xl font-extrabold bg-red-500 border-none" required/>
        </form>
    </div>
    );
};

export default Booking;