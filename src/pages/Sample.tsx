import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { FileText, Download } from 'lucide-react';

export default function Sample() {
    const samples = [
        { title: "Residential Material Takeoff", type: "Excel / PDF", desc: "Complete lumber, concrete, and finishing list for a 2,500 sqft home." },
        { title: "Commercial Concrete Estimate", type: "Planswift Report", desc: "Detailed foundation and slab on grade breakdown for retail space." },
        { title: "MEP Quantities", type: "PDF", desc: "Electrical, Plumbing, and HVAC fixture counts and runner lengths." },
        { title: "Drywall & Framing BOQ", type: "Excel", desc: "Metal stud framing and gypsum board quantities by partition type." },
    ];

    return (
        <>
            <SEO title="Samples" description="View our sample construction estimates and material takeoffs. See the quality of our work." />
            <Hero title="Our Work Samples" subtitle="Review example deliverables to understand the depth and accuracy of our estimates." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                            <div className="bg-gray-100 h-64 flex items-center justify-center border-b border-gray-200">
                                <FileText className="w-24 h-24 text-gray-400" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">Detailed Material Takeoff</h3>
                                <p className="text-gray-600 mb-6">Our spreadsheets are organized by division, location, and phase, making it easy for you to price your bid.</p>
                                <button className="btn btn-outline w-full flex items-center justify-center gap-2"><Download size={18} /> Download Sample PDF</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                            <div className="bg-gray-100 h-64 flex items-center justify-center border-b border-gray-200">
                                {/* Placeholder for marked up plan */}
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-blue-900/10 grid grid-cols-12 grid-rows-12 gap-1">
                                        {/* Fake grid lines */}
                                        {Array.from({ length: 144 }).map((_, i) => <div key={i} className="border-[0.5px] border-blue-900/5"></div>)}
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 font-bold">Marked-Up Plans View</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">Color-Coded Plans</h3>
                                <p className="text-gray-600 mb-6">Visual verification of everything we count. We provide colored markups so you can see exactly what is included.</p>
                                <button className="btn btn-outline w-full flex items-center justify-center gap-2"><Download size={18} /> Download Sample Plan</button>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-8 text-center">Available Sample Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {samples.map((s, i) => (
                            <div key={i} className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow">
                                <FileText className="text-primary mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                                <span className="text-xs uppercase font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded mb-3 inline-block">{s.type}</span>
                                <p className="text-gray-600 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
