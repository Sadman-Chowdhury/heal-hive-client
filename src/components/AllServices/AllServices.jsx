import { Link, useLoaderData } from "react-router-dom";

const AllServices = () => {
    const services = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mb-10"><span className="text-red-500">All</span> Consultations</h1>
            <div className="grid grid-cols-1 gap-10">
                {services.map(service=><div key={service._id}>
                    <div className="card md:card-side lg:card-side shadow-2xl bg-base-200">
                    <figure className="w-full lg:w-1/2"><img src={service.imgURL} alt="Album"/></figure>
                    <div className=" p-7 space-y-3 w-full lg:w-1/2">
                        <h2 className="card-title text-2xl">{service.serviceName}</h2>
                        <p className="text-gray-500">{service.description}</p>
                        <hr className="border-gray-300"/>
                        <div className="flex justify-between">
                        <p className="text-xl font-medium">Price: <span className="text-green-500">${service.price}</span></p>
                        <p className="text-xl font-medium">Consultation area: <span className="text-green-500">{service.serviceArea}</span></p>
                        </div>
                        <hr className="border-gray-300"/>
                        <div className="flex justify-center items-center gap-5">
                            <div className="avatar">
                                <div className="w-20 rounded">
                                    <img src={service.providerImage} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Consultant: <span className="text-red-500">{service.providerName}</span></h2>
                        </div>
                        <hr className="border-gray-300"/>
                        <div className="card-actions justify-center">
                        <Link to={`../singleService/${service._id}`}><button className="btn bg-red-400 text-white">View Details</button></Link>
                        </div>
                    </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllServices;