import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock, Award, CheckCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="text-2xl font-bold font-heading text-white mb-4 block">
                            Estimating<span className="text-primary">Florida</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Florida's most accurate and reliable construction estimating service. 20 years of experience helping contractors, builders, and developers achieve budget accuracy and 99% bid-win ratio.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                        <div className="flex items-center gap-2 text-primary text-sm">
                            <Award size={16} />
                            <span>20 Years Experience • 99% Accuracy</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> About Us</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> Pricing</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> Contact Us</Link></li>
                            <li><Link to="/quote" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> Get Quote</Link></li>
                            <li><Link to="/sample" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"><CheckCircle size={14} /> Sample Work</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">• Residential Estimating</li>
                            <li className="text-gray-400">• Commercial Estimating</li>
                            <li className="text-gray-400">• Industrial Projects</li>
                            <li className="text-gray-400">• MEP Estimating</li>
                            <li className="text-gray-400">• Concrete Takeoffs</li>
                            <li className="text-gray-400">• Steel Estimating</li>
                            <li className="text-gray-400">• Drywall & Finishing</li>
                            <li className="text-gray-400">• Roofing Estimates</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Contact Information</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                                <span>1234 Sunshine Blvd, Suite 567<br />Miami, FL 33101 USA</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" size={18} />
                                <a href="tel:+17187196171" className="hover:text-white">(718) 719-6171</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary flex-shrink-0" size={18} />
                                <a href="mailto:info@estimatingflorida.com" className="hover:text-white">info@estimatingflorida.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                                <span>Mon–Sat 9:00 AM–6:00 PM EST</span>
                            </li>
                        </ul>
                        
                        <div className="mt-6">
                            <h5 className="font-semibold mb-3 text-primary">Get Free Quote</h5>
                            <Link to="/quote" className="btn btn-primary w-full text-center">
                                Request Estimate
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <h4 className="text-lg font-bold mb-4 text-center">Service Areas Across Florida</h4>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        {[
                            "Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", 
                            "St. Petersburg", "Hialeah", "Tallahassee", "Cape Coral", "Port St. Lucie"
                        ].map((city, idx) => (
                            <span key={idx} className="hover:text-primary cursor-pointer">{city}</span>
                        ))}
                        <span className="text-primary font-semibold">& Statewide</span>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
                        <div className="text-gray-500 text-center md:text-left">
                            <p>&copy; {new Date().getFullYear()} Estimating Florida. All rights reserved.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 text-primary">
                                <Award size={16} />
                                <span className="font-semibold">Licensed & Insured in Florida</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-center md:justify-end space-x-6 text-gray-500">
                            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                        <p>
                            Professional construction estimating services for contractors, builders, and developers throughout Florida. 
                            Specializing in residential, commercial, and industrial projects with fast turnaround times and accurate takeoffs.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}