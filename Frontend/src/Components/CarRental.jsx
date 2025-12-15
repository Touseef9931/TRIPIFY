import React, { useState, useEffect } from 'react';
import { Car, Users, Fuel, Settings, Star, ArrowRight } from 'lucide-react';

const CarRental = ({ searchFilters }) => {
    const [displayedCars, setDisplayedCars] = useState([]);

    // Cars data with Pakistan locations and distance-based pricing
    const allCars = {
        'Islamabad Airport': [
            {
                id: 1, name: "Toyota Corolla GLi", category: "Sedan",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
                description: "Reliable choice for business trips and family vacations.",
                rating: 4.6, reviews: 386, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7000, medium: 9000, long: 12000 }
            },
            {
                id: 2, name: "Honda Civic", category: "Sedan",
                image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
                description: "Smooth city rides with excellent fuel efficiency.",
                rating: 4.7, reviews: 342, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 8000, medium: 10000, long: 13500 }
            },
            {
                id: 3, name: "Toyota Fortuner", category: "SUV",
                image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
                description: "Luxury SUV for northern areas exploration.",
                rating: 4.8, reviews: 298, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 12000, medium: 15000, long: 20000 }
            },
            {
                id: 4, name: "Suzuki Alto VXR", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
                description: "Budget-friendly for city travel.",
                rating: 4.4, reviews: 521, seats: 4, transmission: "Manual", fuel: "Petrol/CNG",
                distanceRates: { short: 3000, medium: 4000, long: 5500 }
            }
        ],
        'Karachi Airport': [
            {
                id: 5, name: "Honda City", category: "Sedan",
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
                description: "Modern sedan for comfortable city driving.",
                rating: 4.6, reviews: 412, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7500, medium: 9500, long: 13000 }
            },
            {
                id: 6, name: "Toyota Land Cruiser", category: "Luxury SUV",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
                description: "Premium comfort with powerful performance.",
                rating: 4.9, reviews: 256, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 15000, medium: 18000, long: 25000 }
            },
            {
                id: 7, name: "Suzuki Cultus VXL", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
                description: "Popular family choice with economical fuel.",
                rating: 4.5, reviews: 512, seats: 5, transmission: "Manual", fuel: "Petrol/CNG",
                distanceRates: { short: 4500, medium: 5500, long: 7500 }
            },
            {
                id: 8, name: "Hyundai Tucson", category: "SUV",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
                description: "Stylish crossover with premium features.",
                rating: 4.7, reviews: 289, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 10000, medium: 12500, long: 17000 }
            }
        ],
        'Lahore Airport': [
            {
                id: 9, name: "Honda BRV", category: "SUV",
                image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
                description: "Spacious 7-seater family SUV.",
                rating: 4.6, reviews: 367, seats: 7, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 9000, medium: 11500, long: 15500 }
            },
            {
                id: 10, name: "Toyota Yaris", category: "Sedan",
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
                description: "Compact sedan with great mileage.",
                rating: 4.5, reviews: 445, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 6500, medium: 8500, long: 11500 }
            },
            {
                id: 11, name: "Kia Sportage", category: "SUV",
                image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800",
                description: "Modern SUV with cutting-edge technology.",
                rating: 4.8, reviews: 324, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 11000, medium: 14000, long: 19000 }
            },
            {
                id: 12, name: "Suzuki WagonR", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800",
                description: "Economical with spacious cabin.",
                rating: 4.4, reviews: 598, seats: 4, transmission: "Manual", fuel: "Petrol/CNG",
                distanceRates: { short: 3500, medium: 4500, long: 6000 }
            }
        ],
        'Murree': [
            {
                id: 13, name: "Toyota Prado", category: "Luxury SUV",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
                description: "Premium 4x4 for hill station adventures.",
                rating: 4.9, reviews: 198, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 14000, medium: 17000, long: 23000 }
            },
            {
                id: 14, name: "Honda Civic Turbo", category: "Sedan",
                image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
                description: "Turbocharged sedan for hill drives.",
                rating: 4.7, reviews: 278, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 9000, medium: 11000, long: 15000 }
            },
            {
                id: 15, name: "Suzuki Swift", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
                description: "Sporty for winding mountain roads.",
                rating: 4.5, reviews: 412, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 5500, medium: 7000, long: 9500 }
            }
        ],
        'Hunza Valley': [
            {
                id: 16, name: "Toyota Land Cruiser V8", category: "Luxury SUV",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
                description: "Ultimate vehicle for Hunza terrain.",
                rating: 4.9, reviews: 145, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 18000, medium: 22000, long: 30000 }
            },
            {
                id: 17, name: "Toyota Fortuner 4x4", category: "SUV",
                image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
                description: "Built for northern areas exploration.",
                rating: 4.8, reviews: 223, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 13000, medium: 16000, long: 22000 }
            },
            {
                id: 18, name: "Suzuki Jimny", category: "Off-Road",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
                description: "Compact off-roader for narrow paths.",
                rating: 4.7, reviews: 189, seats: 4, transmission: "Manual", fuel: "Petrol",
                distanceRates: { short: 8000, medium: 10000, long: 14000 }
            }
        ],
        'Skardu': [
            {
                id: 19, name: "Toyota Hilux Double Cabin", category: "4x4 Pickup",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
                description: "Rugged pickup for rough terrain.",
                rating: 4.8, reviews: 167, seats: 5, transmission: "Manual", fuel: "Diesel",
                distanceRates: { short: 12000, medium: 15000, long: 20000 }
            },
            {
                id: 20, name: "Toyota Prado", category: "Luxury SUV",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
                description: "Premium SUV with advanced 4x4.",
                rating: 4.9, reviews: 134, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 16000, medium: 19000, long: 26000 }
            },
            {
                id: 21, name: "Mitsubishi Pajero", category: "SUV",
                image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
                description: "Reliable mountain SUV.",
                rating: 4.7, reviews: 198, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 11000, medium: 14000, long: 19000 }
            }
        ],
        'Naran Kaghan': [
            {
                id: 22, name: "Toyota Fortuner", category: "SUV",
                image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
                description: "Perfect for scenic mountain roads.",
                rating: 4.8, reviews: 245, seats: 7, transmission: "Automatic", fuel: "Diesel",
                distanceRates: { short: 12500, medium: 15500, long: 21000 }
            },
            {
                id: 23, name: "Honda BRV", category: "SUV",
                image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
                description: "Spacious SUV for valley trips.",
                rating: 4.6, reviews: 312, seats: 7, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 9500, medium: 12000, long: 16500 }
            },
            {
                id: 24, name: "Suzuki Vitara", category: "Compact SUV",
                image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800",
                description: "Compact yet capable SUV.",
                rating: 4.5, reviews: 267, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7500, medium: 9500, long: 13000 }
            }
        ],
        'Swat Valley': [
            {
                id: 25, name: "Toyota Corolla XLi", category: "Sedan",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
                description: "Comfortable for scenic highway drives.",
                rating: 4.6, reviews: 389, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7000, medium: 9000, long: 12500 }
            },
            {
                id: 26, name: "Honda Civic", category: "Sedan",
                image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
                description: "Premium sedan for mountain roads.",
                rating: 4.7, reviews: 298, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 8500, medium: 10500, long: 14500 }
            },
            {
                id: 27, name: "Hyundai Tucson", category: "SUV",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
                description: "AWD crossover for valley exploration.",
                rating: 4.7, reviews: 234, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 10500, medium: 13000, long: 18000 }
            }
        ],
        'Rawalpindi': [
            {
                id: 28, name: "Honda City Aspire", category: "Sedan",
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
                description: "Modern sedan for city and highway.",
                rating: 4.6, reviews: 456, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7500, medium: 9500, long: 13000 }
            },
            {
                id: 29, name: "Suzuki Cultus VXL", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
                description: "Economical family hatchback.",
                rating: 4.5, reviews: 589, seats: 5, transmission: "Manual", fuel: "Petrol/CNG",
                distanceRates: { short: 4500, medium: 5500, long: 7500 }
            },
            {
                id: 30, name: "Toyota Corolla GLi", category: "Sedan",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
                description: "Reliable sedan for comfortable drives.",
                rating: 4.6, reviews: 412, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 7000, medium: 9000, long: 12500 }
            }
        ],
        'Faisalabad': [
            {
                id: 31, name: "Honda Civic Oriel", category: "Sedan",
                image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
                description: "Top variant with premium features.",
                rating: 4.8, reviews: 298, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 9000, medium: 11500, long: 15500 }
            },
            {
                id: 32, name: "Suzuki Alto VXL", category: "Hatchback",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
                description: "Budget-friendly compact car.",
                rating: 4.4, reviews: 567, seats: 4, transmission: "Manual", fuel: "Petrol/CNG",
                distanceRates: { short: 3000, medium: 4000, long: 5500 }
            },
            {
                id: 33, name: "Toyota Yaris GLi", category: "Sedan",
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
                description: "Compact with excellent fuel efficiency.",
                rating: 4.5, reviews: 378, seats: 5, transmission: "Automatic", fuel: "Petrol",
                distanceRates: { short: 6500, medium: 8500, long: 11500 }
            }
        ]
    };

    const calculateDistance = (pickup, dropoff) => {
        if (!pickup || !dropoff) return 'short';
        const mountainLocations = ['Hunza Valley', 'Skardu', 'Naran Kaghan', 'Swat Valley', 'Murree'];
        const isPickupMountain = mountainLocations.some(loc => pickup.includes(loc));
        const isDropoffMountain = mountainLocations.some(loc => dropoff.includes(loc));
        
        if (isPickupMountain && isDropoffMountain) return 'medium';
        if (isPickupMountain || isDropoffMountain) return 'long';
        return 'short';
    };

    const getRandomCars = (count) => {
        const locations = Object.keys(allCars);
        const selectedCars = [];
        const usedLocations = new Set();

        while (selectedCars.length < count && usedLocations.size < locations.length) {
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            if (!usedLocations.has(randomLocation)) {
                const locationCars = allCars[randomLocation];
                const randomCar = locationCars[Math.floor(Math.random() * locationCars.length)];
                selectedCars.push(randomCar);
                usedLocations.add(randomLocation);
            }
        }
        return selectedCars;
    };

    const filterCars = () => {
        if (!searchFilters || !searchFilters.pickup) {
            return getRandomCars(6);
        }

        const pickupCars = allCars[searchFilters.pickup] || [];
        const distance = calculateDistance(searchFilters.pickup, searchFilters.dropoff);
        const count = Math.floor(Math.random() * 3) + 3;
        
        return pickupCars.slice(0, count).map(car => ({
            ...car,
            displayPrice: car.distanceRates[distance]
        }));
    };

    useEffect(() => {
        setDisplayedCars(filterCars());
    }, [searchFilters]);

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                        {searchFilters?.pickup ? `Available Cars in ${searchFilters.pickup}` : 'Premium Car Rentals'}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {searchFilters?.pickup
                            ? `Explore ${displayedCars.length} handpicked vehicles for your journey`
                            : "Choose from our fleet of well-maintained vehicles"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCars.map((car) => (
                        <div key={car.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-gray-200/50 hover:border-emerald-300 hover:scale-105">
                            <div className="relative h-56 overflow-hidden">
                                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-300"></div>
                                
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1.5 shadow-lg">
                                    <Car className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm font-semibold text-gray-700">{car.category}</span>
                                </div>

                                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full px-3 py-1.5 flex items-center space-x-1 shadow-lg">
                                    <Star className="w-4 h-4 text-white fill-white" />
                                    <span className="text-sm font-bold text-white">{car.rating}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">{car.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>

                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="flex flex-col items-center p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <Users className="w-5 h-5 text-emerald-600 mb-1" />
                                        <span className="text-xs text-gray-600 font-medium">{car.seats} Seats</span>
                                    </div>
                                    <div className="flex flex-col items-center p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <Settings className="w-5 h-5 text-emerald-600 mb-1" />
                                        <span className="text-xs text-gray-600 font-medium">{car.transmission}</span>
                                    </div>
                                    <div className="flex flex-col items-center p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <Fuel className="w-5 h-5 text-emerald-600 mb-1" />
                                        <span className="text-xs text-gray-600 font-medium">{car.fuel}</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className={`w-4 h-4 ${index < Math.floor(car.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">({car.reviews} reviews)</span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div>
                                        <p className="text-xs text-gray-500">Starting from</p>
                                        <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                            PKR {(car.displayPrice || car.distanceRates.short).toLocaleString()}
                                            <span className="text-sm text-gray-500 font-normal">/day</span>
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

export default CarRental;