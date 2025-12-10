import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { UploadCloud, FileText, CheckCircle } from 'lucide-react';

export default function Quote() {
    return (
        <>
            <SEO title="Get a Quote" description="Request a fast and accurate construction estimate. Upload your plans and get a quote within hours." />
            <Hero title="Get A Free Quote" subtitle="Upload your plans and let us handle the numbers. Fast turnaround guaranteed." />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-gray-100">
                        <h2 className="text-3xl font-bold mb-8 text-center">Request Your Estimate</h2>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Doe Construction LLC" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="(555) 123-4567" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                                    <option>Residential - Single Family</option>
                                    <option>Residential - Multi Family</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Trade Specific (MEP, Concrete, etc.)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Description & Scope</label>
                                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Describe the project scope..."></textarea>
                            </div>

                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                <UploadCloud className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Upload Project Plans</h3>
                                <p className="text-gray-500 text-sm mb-4">Drag & drop your PDF, CAD, or Excel files here</p>
                                <span className="btn btn-outline text-sm">Browse Files</span>
                            </div>

                            <button type="button" className="btn btn-primary w-full text-lg py-4 shadow-lg shadow-primary/30">Submit Request</button>
                        </form>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <FileText size={32} />
                            </div>
                            <h4 className="font-bold mb-2">1. Upload Plans</h4>
                            <p className="text-gray-600 text-sm">Send us your blueprints and specifications securely.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="font-bold mb-2">2. We Estimate</h4>
                            <p className="text-gray-600 text-sm">Our team performs a detailed material takeoff.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <FileText size={32} />
                            </div>
                            <h4 className="font-bold mb-2">3. Receive Quote</h4>
                            <p className="text-gray-600 text-sm">Get a precise quote and turnaround time within hours.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
