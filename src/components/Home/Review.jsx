import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    return (
        <div className="mt-20">
            <h2 className="text-5xl text-center font-bold mb-14 text-red-500 mt-28">User's <span className="text-black">Review</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            <div className="work-sans border border-red-400 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Abid_Hasan</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: Heal Hive was fantastic! Easy navigation, quick doctor selection, and thorough consultations. The doctors were attentive and knowledgeable. Highly recommend for convenient, quality online healthcare.</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-red-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.8</span>
                    </div>
                </div>
            </div>
            <div className="work-sans border border-red-400 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Nico_Gonzalez</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: Heal Hive surpassed expectations. Seamless booking, personalized care, and diverse specialists. Consultations were thorough, and support throughout the healthcare journey was excellent. Returning for future medical needs!</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-red-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.5</span>
                    </div>
                </div>
            </div>
            <div className="work-sans border border-red-400 shadow-2xl rounded-2xl p-10">
                <div className="space-y-3">
                    <h1 className="text-[24px] font-bold playfair">Ruben_Dias</h1>
                    <p className="text-[16px] font-medium text-[#131313B3]">Comment: Heal Hive excelled! Intuitive interface, swift doctor selection, and thorough consultations. The doctors were attentive and knowledgeable, offering confidence in online healthcare. Highly recommended for quality medical care from home.</p>
                    <hr className="border-dashed"/>
                    <div className="flex gap-6">
                        <span className="px-5 py-2 bg-red-100 rounded-[30px] text-[#FFAC33] flex items-center gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />4.9</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;