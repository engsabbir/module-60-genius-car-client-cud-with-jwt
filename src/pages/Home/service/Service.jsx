/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="h-64 w-full rounded-lg" alt="service_img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-medium">{title}</h2>
                <div className="flex justify-between items-center text-amber-500 font-bold">
                    <p className="text-xl font-">Price: ${price}</p>
                    <Link to={`/book/${_id}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;