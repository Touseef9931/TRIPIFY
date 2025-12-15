import React, { useState, useEffect } from 'react';
import { Mic, MapPin, Calendar, Users, Wallet, Sparkles } from 'lucide-react';

const TravaelPlannerContent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        people: '',
        days: '',
        budget: '',
        tripType: ''
    });

    // Typewriter Animation State
    const phrases = ["Plan Your Dream Trip", "Create Your Adventure", "Design Your Journey"];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Typewriter Effect
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentPhrase.length) {
                    setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentPhraseIndex]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleVoiceClick = () => {
        setIsListening(!isListening);
        // Add voice recognition logic here
        setTimeout(() => setIsListening(false), 3000);
    };

    const handleSubmit = () => {
        console.log('Trip Data:', formData);
        alert('Generating your perfect trip itinerary!');
    };

    const budgetOptions = [
        { value: 'low', label: 'Low', range: 'Rs1000–Rs2500/day', Icon: Wallet },
        { value: 'medium', label: 'Medium', range: 'Rs2500–Rs5000/day', Icon: Wallet },
        { value: 'luxury', label: 'Luxury', range: 'Rs5000–Rs10000/day', Icon: Sparkles }
    ];

    const tripTypes = [
        { value: 'solo', label: 'Solo', Icon: Users },
        { value: 'couple', label: 'Couple', Icon: Users },
        { value: 'friends', label: 'Friends', Icon: Users },
        { value: 'family', label: 'Family', Icon: Users }
    ];

    return (
        <div className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-emerald-900/75"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header Section with Typewriter */}
                <div 
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                            {currentText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Tell us your preferences and let our AI create a personalized itinerary tailored just for you
                    </p>
                </div>

                {/* Voice Input Card */}
                <div 
                    className={`max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <button
                        onClick={handleVoiceClick}
                        className={`w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 transition-all duration-300 ${
                            isListening 
                                ? 'border-emerald-400 shadow-xl shadow-emerald-500/30 scale-105' 
                                : 'border-white/20 hover:border-emerald-400/50 hover:bg-white/15'
                        }`}
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <div className={`w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
                                isListening ? 'animate-pulse scale-110' : ''
                            }`}>
                                <Mic className={`w-10 h-10 text-white ${isListening ? 'animate-pulse' : ''}`} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-semibold mb-2">
                                    {isListening ? 'Listening...' : 'Use Microphone'}
                                </h3>
                                <p className="text-gray-300">
                                    {isListening 
                                        ? 'Tell us about your dream trip...' 
                                        : 'Click the microphone and say like I want to travel from Islamabad to Naran for 5 days with 2 people on a medium budget for a couple trip'}
                                </p>
                            </div>
                        </div>
                    </button>
                </div>

                {/* OR Divider */}
                <div 
                    className={`flex items-center justify-center mb-8 transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="flex-1 h-px bg-white/20 max-w-xs"></div>
                    <span className="px-6 text-white text-xl font-semibold">OR</span>
                    <div className="flex-1 h-px bg-white/20 max-w-xs"></div>
                </div>

                {/* Travel Planning Form */}
                <div 
                    className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-xl">
                        <div className="space-y-6">
                            {/* Departure and Destination */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-medium mb-2 flex items-center space-x-2">
                                        <MapPin className="w-5 h-5 text-emerald-400" />
                                        <span>Departure</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="departure"
                                        value={formData.departure}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                                        placeholder="Enter departure city"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2 flex items-center space-x-2">
                                        <MapPin className="w-5 h-5 text-teal-400" />
                                        <span>Destination</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                                        placeholder="Where do you want to go?"
                                    />
                                </div>
                            </div>

                            {/* Number of People and Days */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-medium mb-2 flex items-center space-x-2">
                                        <Users className="w-5 h-5 text-emerald-400" />
                                        <span>Number of People</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="people"
                                        value={formData.people}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                                        placeholder="How many travelers?"
                                        min="1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2 flex items-center space-x-2">
                                        <Calendar className="w-5 h-5 text-teal-400" />
                                        <span>Number of Days</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="days"
                                        value={formData.days}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                                        placeholder="Trip duration"
                                        min="1"
                                    />
                                </div>
                            </div>

                            {/* Budget Range */}
                            <div>
                                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                                    <Wallet className="w-5 h-5 text-emerald-400" />
                                    <span>Budget Range</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {budgetOptions.map((option) => {
                                        const IconComponent = option.Icon;
                                        return (
                                            <button
                                                key={option.value}
                                                onClick={() => setFormData({ ...formData, budget: option.value })}
                                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                                    formData.budget === option.value
                                                        ? 'bg-emerald-500/30 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                                                        : 'bg-white/5 border-white/20 hover:border-emerald-400/50 hover:bg-white/10'
                                                }`}
                                            >
                                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-white font-semibold text-lg">{option.label}</div>
                                                <div className="text-gray-300 text-sm mt-1">{option.range}</div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Trip Type */}
                            <div>
                                <label className="block text-white font-medium mb-3 flex items-center space-x-2">
                                    <Sparkles className="w-5 h-5 text-emerald-400" />
                                    <span>Trip Type</span>
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {tripTypes.map((type) => {
                                        const IconComponent = type.Icon;
                                        return (
                                            <button
                                                key={type.value}
                                                onClick={() => setFormData({ ...formData, tripType: type.value })}
                                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                                    formData.tripType === type.value
                                                        ? 'bg-teal-500/30 border-teal-400 shadow-lg shadow-teal-500/30 scale-105'
                                                        : 'bg-white/5 border-white/20 hover:border-teal-400/50 hover:bg-white/10'
                                                }`}
                                            >
                                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-white font-semibold">{type.label}</div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
                            >
                                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                <span>Generate My Trip</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravaelPlannerContent;