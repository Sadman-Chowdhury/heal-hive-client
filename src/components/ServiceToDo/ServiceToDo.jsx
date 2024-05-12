import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";


const ServiceToDo = () => {

    const {user} = useContext(AuthContext)
    const bookings = useLoaderData();
    const [filteredBookings, setFilteredBookings] = useState(bookings.filter(booking => booking.providerEmail === user.email));

    const handleStatusChange = async (event, bookingId) => {
        const newStatus = event.target.value;

        try {
            await axios.put(`http://localhost:3000/bookings/${bookingId}`, { status: newStatus });

            const updatedBookings = filteredBookings.map(booking => {
                if (booking._id === bookingId) {
                    return { ...booking, status: newStatus };
                }
                return booking;
            });
            
            setFilteredBookings(updatedBookings);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-20">
        <h1 className="text-5xl text-center font-bold mb-10"><span className="text-red-500">Service</span> To Do</h1>
        {filteredBookings.length === 0 ? <h1 className="text-4xl font-bold text-center">You no services to do!</h1> : 
        <div className="grid grid-cols-1 gap-10">
            {filteredBookings.map(booking=><div key={booking._id}>
                <div className="card w-3/4 mx-auto md:card-side lg:card-side shadow-2xl bg-base-200">
                <figure className="w-full lg:w-1/2"><img src={booking.serviceImage} alt="Album"/></figure>
                <div className=" p-7 space-y-3 w-full lg:w-1/2">
                    <h2 className="card-title text-2xl">{booking.serviceName}</h2>
                    <hr className="border-gray-300"/>
                    <p className="text-gray-500"><span className="text-black font-bold">Id:</span> {booking._id}</p>
                    <p className="text-gray-500"><span className="text-black font-bold">Patient name:</span>  {booking.userName}</p>
                    <p className="text-gray-500"><span className="text-black font-bold">Patient email: </span>{booking.userEmail}</p>
                    <hr className="border-gray-300"/>
                    <div className="flex justify-between">
                    <p className="text-lg font-medium">Date: <span className="text-green-500">{booking.serviceDate}</span></p>
                    </div>
                    <hr className="border-gray-300"/>
                    <div className="card-actions justify-center">
                    <div className="dropdown">
                        <select onChange={(event) => handleStatusChange(event, booking._id)} className={
                            `btn text-white m-1 ${
                            booking.status === "Working"
                            ? "bg-blue-400"
                            : booking.status === "Completed"
                            ? "bg-green-400"
                            : "bg-orange-400"
                        }`} value={booking.status}>
                            <option value="Pending">Pending</option>
                            <option value="Working">Working</option>
                            <option value="Completed">Completed</option>
                        </select>
                        </div>
                    </div>
                </div>
                </div>
            </div>)}
        </div>
        }
    </div>
    );
};

export default ServiceToDo;