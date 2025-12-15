import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, ChevronDown } from 'lucide-react';

const TransportHero = ({ onSearch }) => {
    const [isPickupOpen, setIsPickupOpen] = useState(false);
    const [isDropoffOpen, setIsDropoffOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isPassengersOpen, setIsPassengersOpen] = useState(false);
    const [selectedPickup, setSelectedPickup] = useState('');
    const [selectedDropoff, setSelectedDropoff] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const [currentMonth, setCurrentMonth] = useState(new Date());

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    const locations = [
        'Islamabad Airport',
        'Karachi Airport',
        'Lahore Airport',
        'Murree',
        'Hunza Valley',
        'Skardu',
        'Naran Kaghan',
        'Swat Valley',
        'Rawalpindi',
        'Faisalabad'
    ];

    const passengersOptions = [
        { value: 1, label: '1 Passenger' },
        { value: 2, label: '2 Passengers' },
        { value: 3, label: '3 Passengers' },
        { value: 4, label: '4 Passengers' },
        { value: 5, label: '5 Passengers' },
        { value: 6, label: '6+ Passengers' }
    ];

    const handlePickupSelect = (location) => {
        setSelectedPickup(location);
        setIsPickupOpen(false);
        if (errors.pickup) {
            setErrors(prev => ({ ...prev, pickup: false }));
        }
    };

    const handleDropoffSelect = (location) => {
        setSelectedDropoff(location);
        setIsDropoffOpen(false);
        if (errors.dropoff) {
            setErrors(prev => ({ ...prev, dropoff: false }));
        }
    };

    const handlePassengersSelect = (value) => {
        setPassengers(value);
        setIsPassengersOpen(false);
        if (errors.passengers) {
            setErrors(prev => ({ ...prev, passengers: false }));
        }
    };

    const handleDateSelect = (date) => {
        setPickupDate(date);
        setIsCalendarOpen(false);
        if (errors.pickupDate) {
            setErrors(prev => ({ ...prev, pickupDate: false }));
        }
    };

    const handleClearDate = () => {
        setPickupDate('');
        if (errors.pickupDate) {
            setErrors(prev => ({ ...prev, pickupDate: false }));
        }
    };

    const handleTodayDate = () => {
        const today = new Date().toISOString().split('T')[0];
        setPickupDate(today);
        setIsCalendarOpen(false);
        if (errors.pickupDate) {
            setErrors(prev => ({ ...prev, pickupDate: false }));
        }
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    };

    const goToNextMonth = () => {
        setCurrentMonth(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    };

    const generateCalendarDates = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startingDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
        
        const dates = [];
        
        for (let i = 0; i < startingDayOfWeek; i++) {
            dates.push(null);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            dates.push(new Date(year, month, day));
        }
        
        return dates;
    };

    const calendarDates = generateCalendarDates();

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const handleSearch = () => {
        const newErrors = {};
        if (!selectedPickup) newErrors.pickup = true;
        if (!selectedDropoff) newErrors.dropoff = true;
        if (!pickupDate) newErrors.pickupDate = true;
        if (!passengers) newErrors.passengers = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        
        if (onSearch) {
            onSearch({
                pickup: selectedPickup,
                dropoff: selectedDropoff,
                date: pickupDate,
                passengers: passengers
            });
        }

        setTimeout(() => {
            window.scrollTo({
                top: 700,
                behavior: 'smooth'
            });
        }, 300);
    };

    return (
        <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-emerald-900/50 to-teal-900/60"></div>
            </div>

            <div className="absolute top-10 right-20 animate-pulse">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className={`text-center mb-8 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Book Your Ride Today
                    </h1>
                    <p className="text-gray-200 text-lg">
                        Comfortable and reliable transport across Pakistan
                    </p>
                </div>

                <div 
                    className={`w-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Pickup Location */}
                        <div className="relative">
                            <label className="block text-white text-sm font-medium mb-2 flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                                <span>Pickup Location</span>
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsPickupOpen(!isPickupOpen);
                                        setIsDropoffOpen(false);
                                        setIsCalendarOpen(false);
                                        setIsPassengersOpen(false);
                                    }}
                                    className={`w-full backdrop-blur-sm border rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between ${
                                        errors.pickup 
                                            ? 'bg-red-500/20 border-red-500 text-red-200' 
                                            : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                                    }`}
                                >
                                    <span className={selectedPickup ? 'text-white' : 'text-gray-300'}>
                                        {selectedPickup || 'Select pickup'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-200 ${isPickupOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isPickupOpen && (
                                    <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-200 overflow-hidden z-50 max-h-56 overflow-y-auto">
                                        {locations.map((location, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handlePickupSelect(location)}
                                                className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors duration-150 text-gray-700 text-sm font-medium"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                                                    <span>{location}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Dropoff Location */}
                        <div className="relative">
                            <label className="block text-white text-sm font-medium mb-2 flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                                <span>Dropoff Location</span>
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsDropoffOpen(!isDropoffOpen);
                                        setIsPickupOpen(false);
                                        setIsCalendarOpen(false);
                                        setIsPassengersOpen(false);
                                    }}
                                    className={`w-full backdrop-blur-sm border rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between ${
                                        errors.dropoff 
                                            ? 'bg-red-500/20 border-red-500 text-red-200' 
                                            : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                                    }`}
                                >
                                    <span className={selectedDropoff ? 'text-white' : 'text-gray-300'}>
                                        {selectedDropoff || 'Select dropoff'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-200 ${isDropoffOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isDropoffOpen && (
                                    <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-200 overflow-hidden z-50 max-h-56 overflow-y-auto">
                                        {locations.map((location, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleDropoffSelect(location)}
                                                className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors duration-150 text-gray-700 text-sm font-medium"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                                                    <span>{location}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pickup Date with Calendar */}
                        <div className="relative">
                            <label className="block text-white text-sm font-medium mb-2 flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-emerald-400" />
                                <span>Pickup Date</span>
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsCalendarOpen(!isCalendarOpen);
                                        setIsPickupOpen(false);
                                        setIsDropoffOpen(false);
                                        setIsPassengersOpen(false);
                                    }}
                                    className={`w-full backdrop-blur-sm border rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between ${
                                        errors.pickupDate 
                                            ? 'bg-red-500/20 border-red-500 text-red-200' 
                                            : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                                    }`}
                                >
                                    <span className={pickupDate ? 'text-white' : 'text-gray-300'}>
                                        {pickupDate ? formatDate(new Date(pickupDate)) : 'Select date'}
                                    </span>
                                    <Calendar className="w-5 h-5 text-emerald-400" />
                                </button>

                                {isCalendarOpen && (
                                    <div className="absolute top-full mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-200 p-3 z-50">
                                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-100">
                                            <button
                                                onClick={goToPreviousMonth}
                                                className="p-1 hover:bg-emerald-50 rounded-lg transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <div className="text-sm font-bold text-emerald-700">
                                                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                            </div>
                                            <button
                                                onClick={goToNextMonth}
                                                className="p-1 hover:bg-emerald-50 rounded-lg transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 mb-3">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                                                <div key={idx} className="text-center text-xs font-semibold text-emerald-700 py-1">
                                                    {day}
                                                </div>
                                            ))}
                                            
                                            {calendarDates.map((date, index) => {
                                                if (!date) {
                                                    return <div key={index} className="p-1.5"></div>;
                                                }
                                                
                                                const dateStr = date.toISOString().split('T')[0];
                                                const isSelected = pickupDate === dateStr;
                                                const isToday = new Date().toDateString() === date.toDateString();
                                                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                                                
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => !isPast && handleDateSelect(dateStr)}
                                                        disabled={isPast}
                                                        className={`p-1.5 text-xs rounded-lg transition-all duration-200 ${
                                                            isPast
                                                                ? 'text-gray-300 cursor-not-allowed'
                                                                : isSelected
                                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-md'
                                                                : isToday
                                                                ? 'bg-emerald-100 text-emerald-700 font-semibold'
                                                                : 'hover:bg-emerald-50 text-gray-700'
                                                        }`}
                                                    >
                                                        {date.getDate()}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-emerald-100">
                                            <button
                                                onClick={handleClearDate}
                                                className="flex-1 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                            >
                                                Clear
                                            </button>
                                            <button
                                                onClick={handleTodayDate}
                                                className="flex-1 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-md rounded-lg transition-all"
                                            >
                                                Today
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Passengers */}
                        <div className="relative">
                            <label className="block text-white text-sm font-medium mb-2 flex items-center space-x-2">
                                <Users className="w-4 h-4 text-emerald-400" />
                                <span>Passengers</span>
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsPassengersOpen(!isPassengersOpen);
                                        setIsPickupOpen(false);
                                        setIsDropoffOpen(false);
                                        setIsCalendarOpen(false);
                                    }}
                                    className={`w-full backdrop-blur-sm border rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between ${
                                        errors.passengers 
                                            ? 'bg-red-500/20 border-red-500 text-red-200' 
                                            : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                                    }`}
                                >
                                    <span className={passengers ? 'text-white' : 'text-gray-300'}>
                                        {passengers ? passengersOptions.find(opt => opt.value === passengers)?.label : 'Select passengers'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-200 ${isPassengersOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isPassengersOpen && (
                                    <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-200 overflow-hidden z-50 max-h-56 overflow-y-auto">
                                        {passengersOptions.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handlePassengersSelect(option.value)}
                                                className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors duration-150 text-gray-700 text-sm font-medium"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                                                    <span>{option.label}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={handleSearch}
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl px-6 py-3 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                            <Search className="w-5 h-5" />
                            <span>Search Vehicles</span>
                        </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-emerald-400">50+</div>
                                <div className="text-gray-300 text-sm">Vehicles Available</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                                <div className="text-gray-300 text-sm">Service Available</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-emerald-400">4.7★</div>
                                <div className="text-gray-300 text-sm">Customer Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportHero;