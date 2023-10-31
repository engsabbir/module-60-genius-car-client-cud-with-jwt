import Swal from "sweetalert2";


const BookingRow = ({ booking, bookings, setBookings }) => {
    const { _id, img, service, servicePrice, date, status } = booking;

    const handleDeleteFormBookedData = _id => {
        Swal.fire({
            title: 'Are you sure you want to delete it?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'success!',
                                'Deleted from booked list successfully.',
                                'success'
                            )
                            const remainingBookedData = bookings.filter(item => item._id !== _id);
                            setBookings(remainingBookedData);
                        }
                    })
            }
            if (!result.isConfirmed) {
                Swal.fire(
                    'success!',
                    'Deleted canceled.',
                    'success'
                )
            }
        })
    }

    const handleBookingConfirm = id => {
        Swal.fire({
            title: 'Are you sure you want to Update this data?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: "confirm" })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Updated successfully!!',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                            const updatePending = bookings.filter(booking => booking._id !== id);
                            const updatedService = bookings.find(booking => booking._id === id);
                            // console.log(updatedService)
                            updatedService.status = "confirm"
                            const finalBookingData = [updatedService, ...updatePending];
                            setBookings(finalBookingData);
                        }
                    })
            }
            if (!result.isConfirmed) {
                Swal.fire(
                    'success!',
                    'Update request canceled.',
                    'success'
                )
            }
        })
    }
    // console.log(booking)

    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteFormBookedData(_id)} className="btn btn-sm bg-gray-700 text-white hover:text-black btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={img} alt="service_img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td className="font-semibold">${servicePrice}</td>
            <td>{date}</td>
            <th>
                {
                    status === "confirm" ?
                        <button className="btn text-primary hover:text-primary">Confirmed</button> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost bg-gray-700 text-white hover:text-black">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;