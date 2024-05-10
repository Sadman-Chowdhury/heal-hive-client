import { Link, useLoaderData } from "react-router-dom";

const SingleService = () => {

    const serviceDetail = useLoaderData()
    const {_id, providerEmail, providerName, providerImage, serviceName, price, serviceArea, description, imgURL} = serviceDetail

    return (
        <div className="bg-base-300 p-5 rounded-2xl shadow-2xl mb-20 mt-20">
            <div className="flex gap-3 items-center">
                <div className="flex justify-center w-1/2">
                    <div className="card w-full md:w-3/4 lg:w-3/5 bg-base-100 shadow-xl border-2 border-red-300">
                        <figure className="px-10 pt-10">
                            <img src={providerImage} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">Consultant: <span className="text-red-500">{providerName}</span></h2>
                            <div className="space-y-3">
                            <p className="text-xl font-medium">Price: <span className="text-green-500">${price}</span></p>
                            <p className="text-xl font-medium">Consultation area: <span className="text-red-500">{serviceArea}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold">Details of -  <br /><span className="text-red-400">{serviceName}</span> </h1>
                </div>
            </div>
            <div>
            <div className="card md:card-side lg:card-side shadow-2xl bg-base-100 mt-10">
                    <figure className="w-full lg:w-1/2"><img src={imgURL} alt="Album"/></figure>
                    <div className=" p-7 space-y-3 w-full lg:w-1/2">
                        <h2 className="card-title text-2xl">{serviceName}</h2>
                        <p className="text-gray-500">{description}</p>
                        <hr className="border-gray-300"/>
                        <div className="flex justify-between">
                        <p className="text-xl font-medium">Price: <span className="text-green-500">${price}</span></p>
                        <p className="text-xl font-medium">Consultation area: <span className="text-green-500">{serviceArea}</span></p>
                        </div>
                        <hr className="border-gray-300"/>
                        <div className="flex justify-center items-center gap-5">
                            <div className="avatar">
                                <div className="w-20 rounded">
                                    <img src={providerImage} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Consultant: <span className="text-red-500">{providerName}</span></h2>
                        </div>
                        <hr className="border-gray-300"/>
                        <div className="card-actions justify-center">
                        <Link to={`../singleService/${_id}`}><button className="btn bg-red-400 text-white">Book Now!</button></Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default SingleService;