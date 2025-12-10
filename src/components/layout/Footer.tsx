import { Link } from 'react-router-dom';
import { services } from '../../data/services';

import { locations } from '../../data/locations';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <Link to="/" className="text-2xl font-bold font-heading text-white mb-4 block">
                            Florida<span className="text-primary">Estimator</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Florida’s most accurate and reliable construction estimating service. Helping contractors win more bids with fast turnaround times.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Services</h4>
                        <ul className="space-y-2">
                            {services.slice(0, 6).map(s => (
                                <li key={s.id}><Link to={s.path} className="text-gray-400 hover:text-primary transition-colors">{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Locations</h4>
                        <ul className="space-y-2">
                            {locations.slice(0, 6).map(l => (
                                <li key={l.id}><Link to={l.path} className="text-gray-400 hover:text-primary transition-colors">{l.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary mt-1" size={18} />
                                <span>123 Construction Blvd,<br />Orlando, FL 32801</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary" size={18} />
                                <a href="tel:+13215550123" className="hover:text-white">(321) 555-0123</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary" size={18} />
                                <a href="mailto:info@floridaestimator.com" className="hover:text-white">info@floridaestimator.com</a>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <h5 className="font-semibold mb-2">Subscribe to Newsletter</h5>
                            <div className="flex">
                                <input type="email" placeholder="Email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full outline-none focus:ring-1 focus:ring-primary" />
                                <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary/90">Go</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Florida Estimator. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
