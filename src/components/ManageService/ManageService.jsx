import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ManageService = () => {
    const {user} = useContext(AuthContext)
    const services = useLoaderData()
    const {providerEmail, providerName, providerImage, serviceName, price, serviceArea, description, imgURL} = services
    const [addedService, setAddedService] = useState([])

    useEffect(() => {
        const filteredServices = services.filter(service => service.providerEmail === user.email);
        setAddedService(filteredServices);
    }, [services, user.email]);

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Do you want to delete this?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
              denyButton: 'order-3',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:3000/services/${_id}`, {
                    method: 'DELETE'
                    })
                    .then(res=>res.json)
                    .then(data=>{
                    console.log(data)
                    Swal.fire('Deleted', '', 'success')
                })
                const remaining = addedService.filter(service => service._id !== _id)
                setAddedService(remaining)
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <div className="mt-20 mb-20">
            <h1 className="text-5xl font-bold text-center mb-12">Manage <span className="text-red-500">Your</span> Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                addedService.map(service=><div key={service._id}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="h-[250px]"><img src={service.imgURL} alt="Shoes" /></figure>
                        <div className="px-7 py-6 space-y-5">
                            <h2 className="card-title font-bold text-2xl">{service.serviceName}</h2>
                            <div className="flex justify-between">
                                <p className=" text-lg font-medium">Price: <span className="text-green-500">${service.price}</span></p>
                                <p className="text-lg font-medium">Area: <span className="text-green-500">{service.serviceArea}</span></p>
                            </div>
                            <div className="card-actions justify-around">
                                <Link to={`../updateService/${service._id}`}><button className="btn bg-green-400 text-black">Edit</button></Link>
                                <button onClick={()=>handleDelete(service._id)} className="btn bg-red-500 text-white">Delete</button>
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