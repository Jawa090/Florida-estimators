import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/services';
import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ServiceTemplate() {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    if (!service || !service.content) {
        return <Navigate to="/services" replace />;
    }

    const { content } = service;

    return (
        <>
            <SEO title={service.title} description={content.intro} />
            <Hero title={service.title} subtitle={content.headline} />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {content.intro}
                            </p>

                            <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {content.process}
                            </p>

                            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                            <ul className="space-y-3 mb-8">
                                {content.benefits && content.benefits.map((benefit: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/quote" className="btn btn-primary">Get a Quote for {service.title} <ArrowRight className="ml-2" size={18} /></Link>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-secondary p-8 rounded-xl border-l-4 border-primary">
                                <h3 className="font-bold text-xl mb-3">Why Choose Us?</h3>
                                <p className="text-gray-600">We use the latest software and local Florida data to ensure your bid is competitive and profitable.</p>
                            </div>

                            {/* Visual Placeholder */}
                            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                                <span className="text-gray-500 font-bold">{service.title} Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
