import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleBookService = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const date = form.get('date');

        const orderedData = {
            name,
            email,
            service: title,
            img,
            service_id: _id,
            date,
            servicePrice: price
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Order booked successfully!!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate(location.state? location.state: -1)
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-3">Services: {title}</h2>
            <div className="max-w-screen-xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <form onSubmit={handleBookService} className="mb-10 md:mb-16 lg:mb-20 px-2 md:px-10 lg:px-20 py-2 md:py-10 lg:py-14 bg-[#F4F3F0] rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-medium text-center">Book a service</h2>
                    <div>
                        <div className="md:flex gap-5 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <label className="">
                                    <input type="date" name="date" className="input input-bordered w-full" required />
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Service Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="">
                                <input type="text" defaultValue={'$' + price} name="price" placeholder="Price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Confirm Book" className="btn btn-block bg-red-600 text-xl text-white hover:text-black" required />
                </form>

            </div>
        </div>
    );
};

export default BookService;