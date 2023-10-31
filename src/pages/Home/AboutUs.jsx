import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row gap-10">
                <div className='md:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-0 top-1/2 border-4 md:border-6 border-white" />
                </div>
                <div className='md:w-1/2 space-y-4'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">About Us</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn bg-orange-500 text-white hover:text-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;