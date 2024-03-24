class PropertyService {
    properties = [
        {
            "id": "1",
            "image": "1.jpeg",
            "title": "Lime Tree Cottage",
            "typeOfPlace": "Entire cottage",
            "guests": 4,
            "bedrooms": 2,
            "beds": 2,
            "baths": 1.5,
            "amenities": [
              "Wifi",
              "Garden",
              "Free parking"
            ],
            "price": 150
        },
        {
            "id": "2",
            "image": "2.jpeg",
            "title": "Seaside House",
            "typeOfPlace": "Entire house",
            "guests": 6,
            "bedrooms":  3,
            "beds": 3,
            "baths": 2,
            "amenities": [
                "Ocean view",
                "Terrace",
                "BBQ"
            ],
            "price": 220,
        },
        {
            "id": "3",
            "image": "3.jpeg",
            "title": "Mountain Retreat",
            "typeOfPlace": "Entire cabin",
            "guests": 2,
            "bedrooms":  1,
            "beds": 1,
            "baths": 1,
            "amenities": [
                "Hiking trails",
                "Fireplace",
                "Pet-friendly"
            ],
            "price": 100,
        },
        {
            "id": "4",
            "image": "4.jpeg",
            "title": "Urban Loft",
            "typeOfPlace": "Entire loft",
            "guests": 3,
            "bedrooms":  1,
            "beds": 2,
            "baths": 1,
            "amenities": [
                "City view",
                "Modern design",
                "Gym access"
            ],
            "price": 180,
        },
        {
            "id": "5",
            "image": "5.jpeg",
            "title": "Rustic Farmhouse",
            "typeOfPlace": "Entire farmhouse",
            "guests": 8,
            "bedrooms":  4,
            "beds": 4,
            "baths": "2.5 baths",
            "amenities": [
                "Fire pit",
                "Animal feeding",
                "Scenic views"
            ],
            "price": 250,
        },
        {
            "id": "6",
            "image": "6.jpeg",
            "title": "City Studio",
            "typeOfPlace": "Entire studio",
            "guests": 2,
            "bedrooms":  1,
            "beds": 1,
            "baths": 1,
            "amenities": [
                "Near downtown",
                "Public transport",
                "Cafes"
            ],
            "price": 90,
        },
        {
            "id": "7",
            "image": "7.jpeg",
            "title": "Luxury Villa",
            "typeOfPlace": "Entire villa",
            "guests": "10 guests",
            "bedrooms":  5,
            "beds": 5,
            "baths": 4,
            "amenities": [
                "Private pool",
                "Spa",
                "Oceanfront"
            ],
            "price": 550,
        },
        {
            "id": "8",
            "image": "8.jpeg",
            "title": "Treehouse Retreat",
            "typeOfPlace": "Entire treehouse",
            "guests": 2,
            "bedrooms":  1,
            "beds": 1,
            "baths": 1,
            "amenities": [
                "Forest surroundings",
                "Suspension bridge",
                "Yoga deck"
            ],
            "price": 180,
        },
        {
            "id": "9",
            "image": "9.jpeg",
            "title": "Cozy Cabin",
            "typeOfPlace": "Entire cabin",
            "guests": 4,
            "bedrooms":  2,
            "beds": 2,
            "baths": 1,
            "amenities": [
                "Hot tub",
                "Fireplace",
                "Mountain views"
            ],
            "price": 130,
        },
        {
            "id": "10",
            "image": "10.jpeg",
            "title": "Beachfront Bungalow",
            "typeOfPlace": "Entire bungalow",
            "guests": 6,
            "bedrooms":  3,
            "beds": 3,
            "baths": 2,
            "amenities": [
                "Beach access",
                "Outdoor dining",
                "Sunset view"
            ],
            "price": 280,
        },
        {
            "id": "11",
            "image": "11.jpeg",
            "title": "Historic Mansion",
            "typeOfPlace": "Entire mansion",
            "guests": "12 guests",
            "bedrooms":  6,
            "beds": 6,
            "baths": 4,
            "amenities": [
                "Antique decor",
                "Grand ballroom",
                "Garden"
            ],
            "price": 800,
        },
        {
            "id": "12",
            "image": "12.jpeg",
            "title": "Lakeside Cabin",
            "typeOfPlace": "Entire cabin",
            "guests": 6,
            "bedrooms":  3,
            "beds": 3,
            "baths": 2,
            "amenities": [
                "Lake view",
                "Canoeing",
                "Fishing"
            ],
            "price": 170,
        }
    ];

    getProperties() {
        return this.properties;
    }

    getPropertyById(id) {
        return this.properties.find(property => property.id === id);
    }
}

export default PropertyService;