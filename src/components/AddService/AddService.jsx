
const AddService = () => {
    return (
        <div className="border border-red-300 p-20 shadow-2xl mt-14 mb-20 rounded-2xl">
        <h2 className="text-5xl text-center font-bold mb-14 text-red-500">Add <span className="text-black">Service</span></h2>
        <form className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10 form-control">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service name</span>
                    </label>
                <input type="text" placeholder="Service name" name="serviceName" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Service area</span>
                    </label>
                <input type="text" placeholder="Service area" name="serviceArea" className="input input-bordered w-full" required/>
                </div>
                <div className="form-control w-full">
                <label className="label">
                        <span className="label-text font-bold">Image URL</span>
                    </label>
                <input type="text" placeholder="Image URL" name="imgURL" className="input input-bordered w-full" required/>
                </div>
            </div>
            <div className="form-control w-full">
            <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" required/>
            </div>
            <input type="submit" value="Add Service" className="btn btn-block text-xl font-extrabold bg-red-500 border-none" required/>
        </form>
    </div>
    );
};

export default AddService;