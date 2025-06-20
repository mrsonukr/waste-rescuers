import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div>
            <SEO 
                title="Page Not Found - Waste Rescuers"
                description="The page you're looking for doesn't exist. Return to Waste Rescuers homepage for professional waste removal services in London."
                keywords="404, page not found, waste rescuers"
            />
            
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                    <Link 
                        to="/" 
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition duration-200"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;