import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {

    const text = <>
        <div className="absolute rounded-xl flex items-center top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='space-y-3 md:space-y-5 text-white md:w-1/2 p-3 md:p-5'>
                <h2 className="text-4xl md:text-5xl">Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex flex-col md:flex-row gap-2'>
                    <button className="btn bg-amber-500 text-white outline-none border-none hover:text-black w-max">Discover More</button>
                    <button className="btn btn-outline btn-warning text-amber-500 w-max">Latest Project</button>
                </div>
            </div>
        </div>
    </>

    return (
        <div>
            <div className="carousel w-full h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-3 md:space-y-5 text-white md:w-1/2 p-3 md:p-5'>
                            <h2 className="text-2xl md:text-5xl">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <button className="btn bg-amber-500 text-white outline-none border-none hover:text-black w-max">Discover More</button>
                                <button className="btn btn-outline btn-warning text-amber-500 w-max">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 text-black">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-amber-500 border-none text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 to-black">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-amber-500 border-none text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 to-black">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-amber-500 border-none text-white hover:text-black">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    {text}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 to-black">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-amber-500 border-none text-white hover:text-black">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;