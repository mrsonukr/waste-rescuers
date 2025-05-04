import React from 'react';

const ServiceHero = ({ title, description }) => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <img className="w-full h-full object-cover absolute top-0 left-0" src="/assets/bg-1.avif" alt="Background" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center p-4">
                <h1 className="text-white text-3xl mb-4">{title}</h1>
                <p className="text-white text-lg text-center">{description}</p>
            </div>
        </div>
    );
}

export default ServiceHero;
