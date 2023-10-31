import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: 'success!',
                text: 'User register successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error=>{
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'User register error!!',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shadow-xl bg-base-100 w-1/2">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register here</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <p className='text-lg text-center'>Already have an account? Please <Link className='text-amber-600 font-bold underline hover:no-underline' to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;