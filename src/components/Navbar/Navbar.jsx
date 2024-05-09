import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Blue Red White Square Badge Simple Medical Clinic Logo.png'

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allTouristSpot">Services</NavLink></li>
        <li className="dropdown">
                <label tabIndex={0} className="btn btn-ghost font-normal">Dashboard</label>
                <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/addService">Add Service</NavLink></li>
                    <li><NavLink to="/manageService">Manage Service</NavLink></li>
                    <li><NavLink to="/bookedServices">Booked-Services</NavLink></li>
                    <li><NavLink to="/serviceToDo">Service-To-Do</NavLink></li>
                </ul>
            </li>
    </>

    return (
        <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <img className="w-[50px] rounded-[100px]" src={logo} alt="" />
                                <h2 className="text-3xl font-bold text-red-500">Heal <span className="text-black">Hive</span></h2>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="my-img" src="" alt="" />
                            </div>
                        </label>
                        <Link to="/login">
                            <button className="btn bg-red-500 ml-2">Login</button>
                        </Link>
                    </div>
                </div>
    );
};

export default Navbar;