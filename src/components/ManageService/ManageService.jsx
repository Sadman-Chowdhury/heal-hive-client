import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ManageService = () => {
    const {user} = useContext(AuthContext)
    const services = useLoaderData()
    const {providerEmail, providerName, providerImage, serviceName, price, serviceArea, description, imgURL} = services
    const filteredServices = services.filter(service=>service.providerEmail === user.email)

    return (
        <div className="mt-20 mb-20">
            <h1 className="text-5xl font-bold text-center mb-12">Manage <span className="text-red-500">Your</span> Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                filteredServices.map(service=><div key={service._id}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="h-[250px]"><img src={service.imgURL} alt="Shoes" /></figure>
                        <div className="px-7 py-6 space-y-5">
                            <h2 className="card-title font-bold text-2xl">{service.serviceName}</h2>
                            <div className="flex justify-between">
                                <p className=" text-lg font-medium">Price: <span className="text-green-500">${service.price}</span></p>
                                <p className="text-lg font-medium">Area: <span className="text-green-500">{service.serviceArea}</span></p>
                            </div>
                            <div className="card-actions justify-around">
                                <button className="btn bg-green-400 text-black">Update</button>
                                <button className="btn bg-red-500 text-white">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default ManageService;