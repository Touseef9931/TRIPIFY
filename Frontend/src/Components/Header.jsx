import React from 'react';
import { Plane } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    // Active nav styling  
    const isActive = (path) =>
        location.pathname === path
            ? "text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1"
            : "text-gray-700 hover:text-emerald-600";

    return (
        <header className="backdrop-blur-md bg-white/40 shadow-sm sticky top-0 z-50 border-b border-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg shadow-md">
                            <Plane className="w-6 h-6 text-white transform -rotate-45" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Tripyfy
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 flex justify-center">
                        <ul className="flex items-center space-x-8">
                            <li>
                                <Link to="/home" className={`${isActive("/home")} transition-all duration-200`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" className={`${isActive("/hotels")} transition-all duration-200`}>
                                    Hotels
                                </Link>
                            </li>
                            <li>
                                <Link to="/transport" className={`${isActive("/transport")} transition-all duration-200`}>
                                    Transport
                                </Link>
                            </li>
                            <li>
                                <Link to="/tour" className={`${isActive("/tour")} transition-all duration-200`}>
                                    Tour
                                </Link>
                            </li>
                            <li>
                                <Link to="/travelplanner" className={`${isActive("/travelplanner")} transition-all duration-200`}>
                                    Travel Planner
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`${isActive("/contact")} transition-all duration-200`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-3">

                        {/* Login Button */}
                        <Link
                            to="/login"
                            className="px-5 py-2 font-medium text-gray-700 hover:text-emerald-600 transition-all duration-200"
                        >
                            Login
                        </Link>

                        {/* Signup Button */}
                        <Link
                            to="/signup"
                            className="px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 
                                       hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="relative z-10">Sign Up</span>
                            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
