import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import Review from "./Review";
import Support from "./Support";
import { useEffect, useState } from "react";


const Home = () => {

    const services = useLoaderData();

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const uniqueProviders = [...new Set(services.map(service => service.providerName))];
        setProviders(uniqueProviders);
    }, []);


    return (
        <div className="mt-20">
            <Helmet>
                <title>Home | Heal Hive</title>
            </Helmet>
            <h1 className="text-6xl font-bold text-center mb-5"><span className="text-red-500">Heal</span> Hive</h1>
            <p className="text-3xl font-bold text-center">"Your journey to wellness starts here"</p>
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
            <div className="mt-20">
                <h1 className="text-5xl font-bold text-center mb-10">Our <span className="text-red-500">Top</span> Consultants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {providers.slice(0,6).map(provider =>
                    <div key={provider._id} className="card shadow-2xl border border-red-400 w-full glass">
                        <figure className="p-5 rounded-2xl">
                            <img className="rounded-2xl" src={services.find(service => service.providerName === provider)?.providerImage} alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="-mt-5 text-center text-2xl font-bold text-red-500">{provider}</h2>
                            <p className="text-xl text-center font-medium"><span className="font-bold text-black">Services Offered:</span> <br />{" "}
                                {services
                                    .filter(service => service.providerName === provider)
                                    .map(service => service.serviceName)
                                    .join(", ")}</p>
                        </div>
                    </div>
                )}
            </div>
            </div>
            <Review></Review>
            <Support></Support>
        </div>
    );
};

export default Home;