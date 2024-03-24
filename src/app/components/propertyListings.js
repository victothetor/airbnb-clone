'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProperties } from "@/app/property/utils";


const PropertyListings = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        (async () => {
            const properties = await getProperties();
            setProperties(properties);
        })();
    }, []);

    function renderProperties(properties) {
        return properties.map(property => (
            <Link href={`/property/${property.id}`} key={property.id}>
                <div className="border border-gray-300 rounded-lg p-4 text-center transition-transform duration-300" >
                    <Image 
                        src={`/properties/${property.image}`}
                        alt={`Property ${property.id}`}
                        width={2000}
                        height={1498}
                        className="max-w-full h-200 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-base text-gray-500 mb-1">{`${property.typeOfPlace} · ${property.guests} guests · ${property.bedrooms} bedrooms · ${property.beds} beds · ${property.baths} baths`}</p>
                    <p className="text-sm text-gray-500 mb-2">{property.amenities.join(' · ')}</p>
                    <p className="text-base font-bold">${property.price} / night</p>
                </div>
            </Link>
        ));
    }
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-auto-fill sm:grid-cols-minmax-300px sm:grid-cols-1fr gap-4 p-4">
            {renderProperties(properties)}
        </div>
    );
};
export default PropertyListings;