import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-10 md:my-14">
            <div className="text-center md:w-1/2 mx-auto space-y-3">
                <h2 className="text-orange-500 font-bold text-xl">Service</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;