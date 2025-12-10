import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <SEO title="Contact Us" description="Get in touch with Florida Estimator. Call us or visit our office for all your construction estimating needs." />
            <Hero title="Contact Us" subtitle="We are here to help you win more jobs. Reach out today." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="(555) 123-4567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>

                        <div>
                            <div className="bg-secondary p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="text-primary mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-semibold">Our Office</h4>
                                            <p className="text-gray-600">123 Construction Blvd, Suite 101<br />Orlando, FL 32801</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="text-primary mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <p className="text-gray-600">(321) 555-0123</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="text-primary mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <p className="text-gray-600">info@floridaestimator.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="text-primary mt-1 mr-4" size={24} />
                                        <div>
                                            <h4 className="font-semibold">Hours</h4>
                                            <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 bg-gray-200 rounded-xl w-full flex items-center justify-center">
                                <span className="text-gray-500 font-semibold">Google Map Embed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
