import { IoMdCall } from "react-icons/io";
import { FaFax, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import logo from '../../assets/Blue Red White Square Badge Simple Medical Clinic Logo.png'

const Footer = () => {
    return (
        <div>
            <>
        <footer className="p-10 bg-red-600 text-white flex flex-col gap-10 lg:flex-row justify-between pt-16 mt-40">
        <div className="flex justify-around w-full lg:w-1/2">
            <nav>
                <div className="flex gap-3 items-center mb-4">
                    <img className="w-[50px] rounded-[100px]" src={logo} alt="" />
                    <h1 className="text-black font-bold text-2xl">Heal <span className="text-black">Hive</span></h1>
                </div>
                <h6 className="text-xl font-bold text-black mb-3">Contact Details</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover flex items-center gap-2"><IoMdCall className="text-[18px]"/>Mobile: 000044456</a>
                    <a className="link link-hover flex items-center gap-2"><FaFax className="text-[18px]"/>Fax: 00466643</a>
                    <a className="link link-hover flex items-center gap-2"><AiOutlineMail className="text-[18px]"/>Mail: heal.hive@gmail.com</a>
                </div>
            </nav> 
            <nav className=" mt-16">
                <h6 className="text-xl font-bold text-black mb-3">Useful Links</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Terms and conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
            </nav>
        </div> 
        <div className="mt-16 flex gap-10 items-center flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around w-full lg:w-1/2">
            <nav className="text-center md:text-left lg:text-left">
                <h6 className="text-xl font-bold text-black mb-3">Pages</h6> 
                <div className="flex flex-col">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Add Service</a>
                    <a className="link link-hover">Booked service</a>
                </div>
            </nav> 
            <form className="text-center">
                <h6 className="text-xl font-bold text-black mb-3">Socials!!</h6> 
                <fieldset className="form-control w-80">
                <div className="text-2xl flex gap-5 justify-center">
                <FaFacebook />
                <FaGithub />
                <FaLinkedin/>
                <FaInstagram />
                </div>
                </fieldset>
            </form>
        </div>
        </footer>
            <div className="bg-red-600 text-white font-bold text-center pt-10 pb-20">
                <p>Copyright © 2024 - All right reserved by <span className="text-black">Heal Hive</span></p>
            </div>
        </>
        </div>
    );
};

export default Footer;