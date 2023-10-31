import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`
    // const url = `http://localhost:5000/bookings?email=tareqofficial01@gmail.com`

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [url])
    return (
        <div className="min-h-[100vh]">
            {
                bookings &&
                <h2 className="text-3xl font-medium text-center my-5">Total Bookings: {bookings.length}</h2>
            }

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h2>Action</h2>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}>
                            </BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;