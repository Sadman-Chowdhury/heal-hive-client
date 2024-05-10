import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl text-center font-bold mb-10"><span className="text-red-500">Popular</span> Consultations</h1>
            <div className="grid grid-cols-1 gap-10">
                {services.slice(0,6).map(service=><div key={service._id}>
                    <div className="card md:card-side lg:card-side shadow-2xl bg-base-200">
                    <figure className="w-full lg:w-1/2"><img src={service.imgURL} alt="Album"/></figure>
                    <div className="card-body w-full lg:w-1/2">
                        <h2 className="card-title text-2xl">{service.serviceName}</h2>
                        <p className="text-gray-500">{service.description}</p>
                        <p className="text-xl font-medium">Price: <span className="text-green-500">${service.price}</span></p>
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
                        <Link to={`singleService/${service._id}`}><button className="btn bg-red-400 text-white">View Details</button></Link>
                        </div>
                    </div>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-center mt-8">
            <Link to="/allServices"><button className=" bg-red-500 font-semibold text-xl text-white px-8 py-4 rounded-xl">Show All</button></Link>
            </div>
        </div>
    );
};

export default Home;