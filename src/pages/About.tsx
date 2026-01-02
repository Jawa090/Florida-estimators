import Hero from '../components/ui/Hero';
import PageSEO from '../components/PageSEO';
import { MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <PageSEO
                slug="about"
                fallbackTitle="About Us - Estimating Florida"
                fallbackDescription="Welcome to Estimating Florida, a team of professionals who provide construction estimating services in Florida."
            />
            <Hero title="About Estimating Florida" subtitle="Your trusted partner for accurate, reliable construction estimating." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About Estimating Florida</h2>
                            <p className="text-gray-600 mb-4 text-lg">
                                Welcome to Estimating Florida, a team of professionals who provide construction estimating services in Florida to contractors, subcontractors, builders, and other construction professionals who require reliable numbers and help.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg">
                                Our mission is simple: to help you bid with confidence, stay competitive, and maintain your margins by giving you clear, trade-specific estimate reports.
                            </p>

                            <h3 className="text-2xl font-bold mb-4 mt-8">What We Are</h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                Estimating Florida was made to work with the fast-paced Florida building business. We help clients that don't have time for guesswork. They want orderly takeoffs, realistic prices, and a smooth process from planning to the final quotation. We help you cut down on your work and make your bids more accurate, whether you're bidding on one project or handling several bids each week.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <Link to="/contact/" className="btn btn-primary">Contact Us</Link>
                                <Link to="/sample/" className="btn btn-outline">View Samples</Link>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">We provide professional estimating solutions tailored to your project scope.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Quantity Takeoffs / Material Takeoffs",
                            "Construction Cost Estimating",
                            "Bid Estimates & Tender Support",
                            "Budget & Preliminary Estimates",
                            "Trade-Specific Estimates for contractors and subcontractors"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-primary">
                                <h3 className="font-bold text-lg mb-2">{item}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 font-medium">
                            Our deliverables are structured, easy to review, and designed to help you make quick decisions during bidding and procurement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative h-80 rounded-xl overflow-hidden shadow-xl bg-gray-200">
                            <img
                                src="/serve.jpg"
                                alt="Who We Serve"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
                            <p className="text-gray-600 mb-6 text-lg">We support construction professionals across Florida, including:</p>
                            <ul className="space-y-4">
                                {[
                                    "General Contractors (GCs)",
                                    "Subcontractors (all trades)",
                                    "Builders & Developers",
                                    "Renovation and remodeling professionals"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="text-primary" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600 mt-6 text-lg">
                                From residential builds to commercial projects, we adapt our estimating to match the job requirements and bid deadlines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Estimating Florida */}
            <section className="py-20 bg-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Why Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Estimating Florida?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Florida projects demand speed and precision. Clients choose us because we focus on:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Accuracy & detail", desc: "in takeoffs and line items" },
                            { title: "Clear reporting", desc: "that’s easy to understand and submit for bids" },
                            { title: "Deadline-driven turnaround", desc: "to help you meet bid dates" },
                            { title: "Responsive communication", desc: "during scope reviews and revisions" },
                            { title: "Consistent estimating support", desc: "when your in-house team is overloaded" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estimating Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Estimating Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">We keep the workflow simple and contractor-friendly:</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Send your plans", desc: "(PDF drawings, addenda, and specifications)" },
                            { step: "2", title: "Scope review", desc: "to confirm trades, quantities, and deadline" },
                            { step: "3", title: "Takeoff + Estimate", desc: "preparation with organized breakdowns" },
                            { step: "4", title: "Final Delivery", desc: "of your estimate report ready for bidding" }
                        ].map((item, i) => (
                            <div key={i} className="text-center relative">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg ring-4 ring-white">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Serving Florida Statewide */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4 text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Florida Statewide</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                        Estimating Florida proudly serves clients across the state, including Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and surrounding areas. No matter where your project is located in Florida, we provide estimating support to help you stay on track and competitive.
                    </p>
                    <Link to="/contact/" className="btn btn-primary btn-lg">Get Started Today</Link>
                </div>
            </section>
        </>
    );
}
