import { useParams, Navigate, Link } from 'react-router-dom';
import { locations } from '../data/locations';
import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { MapPin, TrendingUp, Shield } from 'lucide-react';

export default function LocationTemplate() {
    const { id } = useParams();
    const location = locations.find(l => l.id === id);

    if (!location || !location.content) {
        return <Navigate to="/locations" replace />;
    }

    const { content } = location;

    return (
        <>
            <SEO title={`Estimating Services in ${location.name}, FL`} description={`Accurate construction estimating and material takeoffs for contractors in ${location.name}, Florida.`} />
            <Hero title={`Construction Estimating in ${location.name}`} subtitle={content.headline} />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Section 1: Intro */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Local Expertise in {location.name}</h2>
                        <p className="text-xl text-gray-600">{content.intro}</p>
                    </div>

                    {/* Section 2: Trends & Helpers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-secondary p-8 rounded-xl">
                            <TrendingUp className="text-primary w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Local Building Trends</h3>
                            <p className="text-gray-600">{content.trends}</p>
                        </div>
                        <div className="bg-secondary p-8 rounded-xl">
                            <Shield className="text-primary w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-3">How We Help Contractors</h3>
                            <p className="text-gray-600">{content.help}</p>
                        </div>
                    </div>

                    {/* Section 3: Map & CTA */}
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">Start Your Next Project in {location.name}</h3>
                            <p className="text-gray-600 mb-8">Don't let accurate estimating hold you back. Upload your plans and get a quote specifically tailored to the {location.name} market rates.</p>
                            <Link to="/quote" className="btn btn-primary self-start">Get a Quote</Link>
                        </div>
                        <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <span className="font-bold text-gray-500">Map of {location.name} Area</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
