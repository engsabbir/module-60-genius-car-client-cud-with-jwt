import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        Swal.fire({
            title: 'Are you sure you want to logout?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => { })
                    .catch(error => {
                        console.log(error)
                    })
                Swal.fire(
                    'success!',
                    'Log out successfully.',
                    'success'
                )
            }
            if (!result.isConfirmed) {
                Swal.fire(
                    'success!',
                    'Log out canceled.',
                    'success'
                )
            }
        })


    }
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        {
            user ?
                <>
                    <li><Link to="/bookings">My Bookings</Link></li>
                    <li><button onClick={handleLogOut}>Log out</button></li>
                </> :
                <li><Link to="/login">Login</Link></li>
        }

        <li><Link to="/register">Register</Link></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl">
                    <img src={logo} className='h-14 w-24' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link className="btn btn-outline btn-warning">Appointment</Link> */}
                <Link className="px-2 py-2 rounded-lg border border-amber-500 text-amber-500">Appointment</Link>
            </div>
        </div>
    );
};

export default Navbar;