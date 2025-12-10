import { useParams, Navigate, Link } from 'react-router-dom';
import { trades } from '../data/services';
import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { CheckSquare, ArrowRight } from 'lucide-react';

export default function TradeTemplate() {
    const { id } = useParams();
    const trade = trades.find(t => t.id === id);

    if (!trade || !trade.content) {
        return <Navigate to="/services" replace />;
    }

    const { content } = trade;

    return (
        <>
            <SEO title={trade.title} description={content.intro} />
            <Hero title={trade.title} subtitle={content.headline} />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Trade Overview</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {content.intro}
                            </p>

                            <h3 className="text-2xl font-bold mb-4">What We Deliver</h3>
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                                <ul className="space-y-4">
                                    {content.deliverables && content.deliverables.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckSquare className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                                            <span className="text-gray-800 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact" className="btn btn-primary">Request {trade.title} Sample <ArrowRight className="ml-2" size={18} /></Link>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-dark text-white p-8 rounded-xl">
                                <h3 className="font-bold text-xl mb-3">Florida Trade Specialists</h3>
                                <p className="text-gray-300">Our team understands the specific material requirements and labor rates for {trade.title.toLowerCase()} in the Florida market.</p>
                            </div>

                            {/* Visual Placeholder */}
                            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                                <span className="text-gray-500 font-bold">{trade.title} Diagram</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
