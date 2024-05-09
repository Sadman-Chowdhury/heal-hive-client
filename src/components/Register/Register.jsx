import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser, setUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        //password error
        if(password.length<6){
            toast.error('Password should be atleast 6 characters')
            return
        }else if(!/[A-Z]/.test(password)){
            toast.error('Password should have atleast one Uppercase')
            return
        }else if(!/[a-z]/.test(password)){
            toast.error('Password should have atleast one Lowercase')
            return
        }

        try {
            const result = await createUser(email, password);
            const user = result.user;
            console.log(user);
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
            
            setUser({
                ...user,
                displayName: name,
                photoURL: photo
            });
            
            toast.success('User created successfully');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error(error);
            toast.error('Error creating user');
        }
    }

    return (
        <div className="hero min-h-screen">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex-col md:flex-row lg:flex-row">
                <div className="w-full lg:w-1/2 mr-12">
                    <img src="https://i.ibb.co/552kDMF/Wavy-Gen-01-Single-07.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-red-500">Register <span className="text-black">Now!</span></h1>
                        <form onSubmit={handleRegister}>
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