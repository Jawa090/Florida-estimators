import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { services, trades } from '../data/services';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <>
            <SEO title="Our Services" description="Comprehensive construction estimating services including residential, commercial, industrial, and all specific trades." />
            <Hero title="Our Estimating Services" subtitle="Specialized takeoff and consulting services tailored to your trade and project type." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service) => (
                            <Link key={service.id} to={service.path} className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <service.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="flex items-center text-primary font-medium">
                                    View Service <ChevronRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold mb-10 text-center">Trade Specific Estimating</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trades.map((trade) => (
                            <Link key={trade.id} to={trade.path} className="flex items-center p-6 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-colors group">
                                <trade.icon size={24} className="mr-4 text-primary group-hover:text-white" />
                                <span className="font-semibold text-lg">{trade.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
