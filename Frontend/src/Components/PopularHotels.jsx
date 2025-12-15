import React, { useState, useEffect } from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const PopularHotels = ({ searchFilters }) => {
    const [displayedHotels, setDisplayedHotels] = useState([]);

    const allHotels = {
        'Hunza Valley': [
            {
                id: 1,
                name: "Hunza Serena Inn",
                city: "Hunza Valley",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
                description: "Authentic mountain hospitality with panoramic views of snow-capped peaks and Rakaposhi.",
                rating: 4.9,
                reviews: 478,
                price: 32000,
            },
            {
                id: 2,
                name: "Eagle's Nest Hotel",
                city: "Hunza Valley",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Perched on a hilltop offering breathtaking valley views with traditional Hunza architecture.",
                rating: 4.8,
                reviews: 392,
                price: 28000,
            },
            {
                id: 3,
                name: "Hunza Embassy Hotel",
                city: "Hunza Valley",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Comfortable stay with modern amenities and stunning views of Ultar Sar peak.",
                rating: 4.7,
                reviews: 325,
                price: 24000,
            },
            {
                id: 4,
                name: "Hill Top Hotel Hunza",
                city: "Hunza Valley",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
                description: "Family-run boutique hotel offering warm hospitality and traditional Hunza cuisine.",
                rating: 4.6,
                reviews: 268,
                price: 20000,
            }
        ],
        'Skardu': [
            {
                id: 5,
                name: "Shangrila Resort",
                city: "Skardu",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Paradise on earth with lakeside cottages and mesmerizing natural beauty of Lower Kachura Lake.",
                rating: 4.9,
                reviews: 542,
                price: 35000,
            },
            {
                id: 6,
                name: "Skardu Serena Hotel",
                city: "Skardu",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Premium luxury resort with modern facilities and stunning mountain vistas.",
                rating: 4.8,
                reviews: 456,
                price: 38000,
            },
            {
                id: 7,
                name: "Baltistan Continental",
                city: "Skardu",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
                description: "Comfortable accommodations with easy access to Skardu's major attractions.",
                rating: 4.6,
                reviews: 312,
                price: 26000,
            },
            {
                id: 8,
                name: "K2 Base Hotel",
                city: "Skardu",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
                description: "Adventure hub for trekkers with cozy rooms and expedition support services.",
                rating: 4.7,
                reviews: 289,
                price: 22000,
            }
        ],
        'Naran Kaghan': [
            {
                id: 9,
                name: "Pine Park Resort",
                city: "Naran Kaghan",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
                description: "Riverside luxury resort surrounded by pine forests and mountain streams.",
                rating: 4.8,
                reviews: 418,
                price: 30000,
            },
            {
                id: 10,
                name: "Hotel Dreamland",
                city: "Naran Kaghan",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Family-friendly hotel with modern amenities and stunning valley views.",
                rating: 4.6,
                reviews: 356,
                price: 25000,
            },
            {
                id: 11,
                name: "Kaghan Continental",
                city: "Naran Kaghan",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
                description: "Comfortable stay with traditional hospitality near Saif-ul-Malook Lake.",
                rating: 4.7,
                reviews: 298,
                price: 28000,
            },
            {
                id: 12,
                name: "River View Lodge",
                city: "Naran Kaghan",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Cozy riverside accommodation perfect for nature lovers and trekkers.",
                rating: 4.5,
                reviews: 234,
                price: 22000,
            }
        ],
        'Swat Valley': [
            {
                id: 13,
                name: "Swat Serena Hotel",
                city: "Swat Valley",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Switzerland of Pakistan - luxurious stay amidst lush green valleys and rivers.",
                rating: 4.9,
                reviews: 512,
                price: 34000,
            },
            {
                id: 14,
                name: "Pearl Continental Malam Jabba",
                city: "Swat Valley",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
                description: "Premium ski resort offering winter sports and summer retreats with modern facilities.",
                rating: 4.8,
                reviews: 445,
                price: 32000,
            },
            {
                id: 15,
                name: "Rock City Resort",
                city: "Swat Valley",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
                description: "Riverside resort with archaeological sites nearby and serene mountain backdrop.",
                rating: 4.7,
                reviews: 378,
                price: 27000,
            },
            {
                id: 16,
                name: "Mingora Heights Hotel",
                city: "Swat Valley",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
                description: "Central location with easy access to Swat's attractions and markets.",
                rating: 4.6,
                reviews: 324,
                price: 23000,
            }
        ],
        'Fairy Meadows': [
            {
                id: 17,
                name: "Fairy Meadows Cottages",
                city: "Fairy Meadows",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
                description: "Rustic wooden cottages with direct views of Nanga Parbat, the Killer Mountain.",
                rating: 4.9,
                reviews: 387,
                price: 18000,
            },
            {
                id: 18,
                name: "Raikot Serai Camp",
                city: "Fairy Meadows",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Glamping experience with spectacular mountain vistas and starry night skies.",
                rating: 4.7,
                reviews: 298,
                price: 15000,
            },
            {
                id: 19,
                name: "Nanga Parbat View Resort",
                city: "Fairy Meadows",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Eco-friendly resort offering trekking support and authentic mountain hospitality.",
                rating: 4.8,
                reviews: 342,
                price: 16500,
            }
        ],
        'Murree Hills': [
            {
                id: 20,
                name: "Pearl Continental Murree",
                city: "Murree Hills",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Mountain retreat offering breathtaking valley views and cozy hill station ambiance.",
                rating: 4.8,
                reviews: 512,
                price: 28000,
            },
            {
                id: 21,
                name: "Lockwood Hotel",
                city: "Murree Hills",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
                description: "Historic colonial-era hotel with modern amenities and panoramic mountain views.",
                rating: 4.7,
                reviews: 445,
                price: 25000,
            },
            {
                id: 22,
                name: "Cecil Hotel Murree",
                city: "Murree Hills",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
                description: "Classic hill station hotel with old-world charm and Mall Road proximity.",
                rating: 4.6,
                reviews: 398,
                price: 22000,
            },
            {
                id: 23,
                name: "Pine View Resort",
                city: "Murree Hills",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
                description: "Family-friendly resort surrounded by pine forests with recreational facilities.",
                rating: 4.7,
                reviews: 367,
                price: 24000,
            }
        ],
        'Chitral Valley': [
            {
                id: 24,
                name: "Hindukush Heights Hotel",
                city: "Chitral Valley",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
                description: "Gateway to the Hindu Kush mountains with traditional Chitrali hospitality.",
                rating: 4.8,
                reviews: 324,
                price: 26000,
            },
            {
                id: 25,
                name: "Mountain Inn Chitral",
                city: "Chitral Valley",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                description: "Comfortable accommodations with access to Kalash Valleys and Shandur Pass.",
                rating: 4.7,
                reviews: 278,
                price: 23000,
            },
            {
                id: 26,
                name: "Tirich Mir Hotel",
                city: "Chitral Valley",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
                description: "Named after Pakistan's highest peak, offering modern comforts in remote beauty.",
                rating: 4.6,
                reviews: 245,
                price: 20000,
            },
            {
                id: 27,
                name: "Chitral Fort Lodge",
                city: "Chitral Valley",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
                description: "Heritage hotel near the historic Chitral Fort with cultural experiences.",
                rating: 4.5,
                reviews: 198,
                price: 18000,
            }
        ]
    };

    const getRandomHotels = (count) => {
        const cities = Object.keys(allHotels);
        const selectedHotels = [];
        const usedCities = new Set();

        while (selectedHotels.length < count && usedCities.size < cities.length) {
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            
            if (!usedCities.has(randomCity)) {
                const cityHotels = allHotels[randomCity];
                const randomHotel = cityHotels[Math.floor(Math.random() * cityHotels.length)];
                selectedHotels.push(randomHotel);
                usedCities.add(randomCity);
            }
        }

        return selectedHotels;
    };

    const filterHotels = () => {
        if (!searchFilters || !searchFilters.destination) {
            return getRandomHotels(6);
        }

        const cityHotels = allHotels[searchFilters.destination] || [];
        const count = Math.floor(Math.random() * 3) + 3;
        return cityHotels.slice(0, count);
    };

    useEffect(() => {
        setDisplayedHotels(filterHotels());
    }, [searchFilters]);

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                        {searchFilters?.destination 
                            ? `Hotels in ${searchFilters.destination}` 
                            : 'Popular Hotels'}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {searchFilters?.destination
                            ? `Explore ${displayedHotels.length} handpicked hotels in ${searchFilters.destination}`
                            : "Discover our handpicked selection of premium hotels across Pakistan's most beautiful destinations"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedHotels.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1.5">
                                    <MapPin className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm font-semibold text-gray-700">{hotel.city}</span>
                                </div>

                                <div className="absolute top-4 right-4 bg-emerald-500 rounded-full px-3 py-1.5 flex items-center space-x-1">
                                    <Star className="w-4 h-4 text-white fill-white" />
                                    <span className="text-sm font-bold text-white">{hotel.rating}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {hotel.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {hotel.description}
                                </p>

                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`w-4 h-4 ${
                                                    index < Math.floor(hotel.rating)
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        ({hotel.reviews} reviews)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-sm text-gray-500">Starting from</p>
                                        <p className="text-2xl font-bold text-emerald-600">
                                            PKR {hotel.price.toLocaleString()}
                                            <span className="text-sm text-gray-500 font-normal">/night</span>
                                        </p>
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl py-3 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <span>Book Now</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularHotels;