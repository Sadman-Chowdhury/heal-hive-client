import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const BookedService = () => {

    const {user} = useContext(AuthContext)
    const bookings = useLoaderData();
    const filteredBookings = bookings.filter(booking => booking.userEmail === user.email);

    return (
        <div className="mt-20">
            <Helmet>
                <title>Booked Service | Heal Hive</title>
            </Helmet>
                    <h1 className="text-4xl font-bold text-center text-red-500 mb-10">Booked <span className="text-black">Services</span></h1>
                    {filteredBookings.length === 0 ? <h1 className="text-3xl font-bold text-center">You have no bookings!</h1> :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {filteredBookings.map((booking, idx) => (
                        <div key={idx} className="text-[18px] font-bold mb-5 flex flex-col gap-3 border border-red-300 rounded-2xl p-10 md:p-7 lg:p-10 shadow-2xl">
                            <td><span className="text-red-500 text-xl">Service Name: </span> {booking.serviceName}</td>
                            <td><span className="text-red-500 text-xl">Provider Name: </span>{booking.providerName}</td>
                            <td><span className="text-red-500 text-xl">Date: </span>{booking.serviceDate}</td>
                            <td><span className="text-red-500 text-xl">Price: </span>${booking.price}</td>
                            <td><span className={`rounded-2xl px-5 py-3 ${
                                booking.status === "Working"
                                ? "bg-blue-400"
                                : booking.status === "Completed"
                                ? "bg-green-400"
                                : "bg-orange-400"
                            }`}>
                            {booking.status}</span></td>
                            <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                            </div>
                        </div>
                        ))}
                        </div>
                    }
                </div>
    );
};

export default BookedService;