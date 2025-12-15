import React from 'react';
import { Plane, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                                <Plane className="w-6 h-6 text-white transform -rotate-45" />
                            </div>
                            <h1 className="text-2xl font-bold text-white">Tripyfy</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Tripyfy is your smart travel companion — powered by AI to help you plan, book, and explore with ease.
                            Personalized itineraries, real-time support, and seamless booking — all in one place.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200">
                                <span className="text-white">f</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200">
                                <span className="text-white">𝕏</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200">
                                <span className="text-white">in</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links & Support Combined */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Hotels
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Transport
                                    </a>
                                </li>
                                <li>
                                    <a href="#destinations" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                      Tour
                                    </a>
                                </li>
                                <li>
                                    <a href="#plan-a-trip" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Plan Trip
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-4">Support</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#contact" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a href="#help" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Help Centre
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacy-policy" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#terms" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#faqs" className="hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h2 className="text-white text-lg font-semibold mb-4">Stay Updated</h2>
                        <p className="text-gray-400 text-sm">
                            Subscribe to our newsletter and get the latest travel deals, tips, and destination guides.
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                                Subscribe Now
                            </button>
                        </div>
                        <p className="text-gray-500 text-xs">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; 2025 Tripyfy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;