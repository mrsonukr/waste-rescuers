import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookAppointment from '../components/ui/BookAppointment';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import SEO from '../components/SEO';

const Booking = () => {
    return (
        <div>
            <SEO 
                title="Book Waste Removal Appointment - Waste Rescuers London"
                description="Book your waste removal appointment online. Fast, professional service in London. Same-day collection available. Licensed waste carriers with transparent pricing."
                keywords="book waste removal, appointment booking, waste collection London, online booking, same day waste removal"
                canonical="https://wasterescuers.uk/book"
            />
            
            <Header />
            <BookAppointment />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Booking;