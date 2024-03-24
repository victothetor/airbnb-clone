"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPropertyById } from "@/app/property/utils";

const PropertyPage = ({ params }) => {
    const router = useRouter();
    const [property, setProperty] = useState({});
    const [ checkInDate, setCheckInDate ] = useState('');
    const [ checkOutDate, setCheckOutDate ] = useState('');
    const [ guests, setGuests ] = useState('1');

    const searchParams = useSearchParams();

    useEffect(() => {
        async function fetchProperty() {
          const propertyData = await getPropertyById(params.id);
          setProperty(propertyData);
        }
    
        fetchProperty();

        const checkInDate = searchParams.get('checkin');
        const checkOutDate = searchParams.get('checkout');
        const guests = searchParams.get('guests');
        if(checkInDate){
            setCheckInDate(checkInDate);
        }
        if(checkOutDate){
            setCheckOutDate(checkOutDate);
        }
        if(guests){
            setGuests(guests);
        }

    }, [params.id]);

    const handleReserveClick = () => {
        const formData = new FormData();

        formData.append('checkin', checkInDate);
        formData.append('checkout', checkOutDate);
        formData.append('guests', guests);

        const queryParams = new URLSearchParams(formData).toString();
        router.push(`/payment?id=${property.id}&${queryParams}`);
    };

    const handleCheckInDateChange = (event) => {
        setCheckInDate(event.target.value);
      };
    
    const handleCheckOutDateChange = (event) => {
        setCheckOutDate(event.target.value);
    };
    
    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    return (
        <div className="container mx-auto max-w-90">
            <div className="flex justify-center m-20">
                <Image 
                    src={`/properties/${property.image}`}
                    alt="Property Image"
                    width={2000}
                    height={1498}/>
            </div>
            <div className="container mx-auto flex">
                <div className="mx-auto flex">
                    <div className="w-70 inline-block p-20 box-border">
                        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                        <p className="text-base text-gray-500 mb-1">{`${property.typeOfPlace} · ${property.guests} guests · ${property.bedrooms} bedrooms · ${property.beds} beds · ${property.baths} baths`}</p>
                        <p className="text-sm text-gray-500 mb-2">{property.amenities?.join(' · ')}</p>
                        <p className="text-base font-bold">${property.price} / night</p>
                    </div>
                    <div class="frame-container">
                        <div class="reservation-form">
                            <div class="form">
                                <label for="checkin">Check-in Date:</label>
                                <input type="date" id="checkin" name="checkin" required value={checkInDate} onChange={handleCheckInDateChange}/>
                        
                                <label for="checkout">Checkout Date:</label>
                                <input type="date" id="checkout" name="checkout" required value={checkOutDate} onChange={handleCheckOutDateChange}/>
                        
                                <label for="guests">Number of Guests:</label>
                                <select id="guests" name="guests" value={guests} onChange={handleGuestsChange} >
                                    <option value="1">1 guest</option>
                                    <option value="2">2 guests</option>
                                    <option value="3">3 guests</option>
                                </select>
                                <a onClick={handleReserveClick}><button type="submit">Reserve</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PropertyPage;