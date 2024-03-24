'use client'
 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

const PaymentPage = () => {
    const router = useRouter();
    const [propertyData, setPropertyData] = useState(null);
    const searchParams = useSearchParams();
    const propertyId = searchParams.get('id');
    const checkInDate = searchParams.get('checkin');
    const checkOutDate = searchParams.get('checkout');
    const guests = searchParams.get('guests');

    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [message, setMessage] = useState('');

    console.log("propertyId: " + propertyId);

    const handleEditDates = () => {
        const queryParams = new URLSearchParams({
            checkin: checkInDate,
            checkout: checkOutDate,
            guests: guests
        }).toString();
        router.push(`/property/${propertyId}?${queryParams}`);
    };
    
    const handleEditGuests = () => {
        const queryParams = new URLSearchParams({
            checkin: checkInDate,
            checkout: checkOutDate,
            guests: guests
        }).toString();
        router.push(`/property/${propertyId}?${queryParams}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/property/id/${propertyId}`);
                if (response.ok) {
                    const data = await response.json();
                    setPropertyData(data.property);
                    console.log(data.property);
                } else {
                    throw new Error('Failed to fetch property data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (propertyId) {
            fetchData();
        }
    }, [propertyId]);

    if (!propertyData) {
        return <div>Loading...</div>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Booked successfully")
        router.push('/confirm');
    };
    
    return (
        <div className="container mx-auto">
            <div className="property-image">
                <Image src={'/properties/' + propertyData.image} alt="Property Image" width={1500} height={800}></Image>
            </div>
            <div className="container mx-auto flex justify-center">
                <div>
                    <div className="request-to-book">
                        <h1>Request to book:</h1>
                        <div className="row">
                            <h2 className="text-xl font-bold mb-2">{propertyData.title}</h2>
                        </div>
                        <div className="row">
                            <div className="left">
                                Dates: <span id="booking-dates">{checkInDate} to {checkOutDate}</span>
                            </div>
                            <div className="right">
                                <a href="#" id="edit-dates" onClick={handleEditDates}>Edit</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                Guests: <span id="booking-guests">{guests}</span>
                            </div>
                            <div className="right">
                                <a href="#" id="edit-guests" onClick={handleEditGuests}>Edit</a>
                            </div>
                        </div>
                        <hr/>
                        <h2 className="text-xl font-bold mb-2">Travel insurance</h2>
                        <div className="row">
                            <div className="left">
                                <p>Add travel insurance for $20!<br/>Get reimbursed if you need to cancel due to illness, flight delays and more.<br/><a href="#">What&#39;s covered</a></p>
                            </div>
                        </div>
                        <div className="right">
                            <button>Add</button>
                        </div>
                    </div>
                    <hr/>
                    <form className="payment-form" onSubmit={handleFormSubmit}>
                        <div className="row">
                            <h2 className="text-xl font-bold mb-2">Credit card payment</h2>
                        </div>
                        <div className="row">
                            <label for="card-holder">Name on card:</label>
                            <input type="text" id="card-holder" name="card-holder" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} required/>
                        </div>
                        <div className="row">
                            <label for="card-number">Card number:</label>
                            <input type="text" id="card-number" name="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required/>
                        </div>
                        <div className="row">
                            <label for="expiry-date">Expiry date:</label>
                            <input type="text" id="expiry-date" name="expiry-date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required/>
                        </div>
                        <div className="row">
                            <label for="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} required/>
                        </div>
                        <div className="row">
                            <h2>Message the host</h2>
                        </div>
                        <div className="row">
                            <p>Let the host know why you&#39;re travelling and when you&#39;ll check in.</p>
                        </div>
                        <div className="row">
                            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <hr/>
                        <div className="row">
                            <h2>Cancellation policy</h2>
                        </div>
                        <div className="row">
                            <p>Free cancellation for 48 hours. Cancel before 29 May for a partial refund. <a href="#">Learn more</a></p>
                        </div>
                        <hr/>
                        <div className="row">
                            <button id="request-to-book" type="submit" className="bg-[#ff5a5f] text-white border-0 rounded p-[10px_20px] text-base cursor-pointer hover:bg-[#e6555a]">Request to book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PaymentPage;