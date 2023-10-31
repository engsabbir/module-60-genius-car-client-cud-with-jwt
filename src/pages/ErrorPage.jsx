import { Link } from 'react-router-dom';
import carDoctorErrorImg from '../assets/car_doctor_error_page.png'
import Navbar from './shared/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center'>
                <div>
                    <img className='md:h-96' src={carDoctorErrorImg} alt="error_page" />
                    <h2 className="text-2xl text-center">Oops! This Page Could Not Be Found!!</h2>
                    <div className='text-center mt-5'>
                        <Link className='mx-auto btn bg-amber-500 text-white hover:text-black' to="/">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;