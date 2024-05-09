import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row lg:flex-row">
                <div className="w-full lg:w-1/2 mr-12">
                    <img src="https://i.ibb.co/552kDMF/Wavy-Gen-01-Single-07.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-red-500">Register <span className="text-black">Now!</span></h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="relative form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="input input-bordered" placeholder="Password" type={showPassword ? "text" : "password"} name="password" id="" required/>
                                <span className="absolute top-12 right-3" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoEyeOff /> : <IoEye />
                                }
                                </span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-red-600 bg-red-300 font-bold" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-red-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;