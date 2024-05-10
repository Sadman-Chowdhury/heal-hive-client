
const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] mt-20 mb-20 shadow-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZLfDJnF/national-cancer-institute-6jpj-F-e-Dv-ZU-unsplash.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-red-400 space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>General <span className="text-white">Health</span> Consultation</h2>
                    </div>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 pl-8 right-5 bottom-4">
                    <a href="#slide4" className="btn btn-square mr-5">❮</a>
                    <a href="#slide2" className="btn btn-square">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/84zZrKw/sam-moghadam-khamseh-l9-Vj-M-Pp7-M-unsplash.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-red-400 space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Dermatology <span className="text-white">Consultation</span></h2>
                    </div>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 pl-8 bottom-4">
                    <a href="#slide1" className="btn btn-square mr-5">❮</a>
                    <a href="#slide3" className="btn btn-square">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/6WdXR7g/nik-shuliahin-Bu-NWp1b-L0nc-unsplash.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-red-400 space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Mental <span className="text-white">Health</span> Counseling</h2>
                    </div>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 pl-8 bottom-4">
                    <a href="#slide2" className="btn btn-square mr-5">❮</a>
                    <a href="#slide4" className="btn btn-square">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/9yBYMZQ/national-cancer-institute-NNpo-li-Y5a-U-unsplash.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-red-400 space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Nutrition <span className="text-white">Consultation</span></h2>
                    </div>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 pl-8 bottom-4">
                    <a href="#slide3" className="btn btn-square mr-5">❮</a>
                    <a href="#slide1" className="btn btn-square">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;