import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Clock, DollarSign, Award, ChevronLeft, ArrowRight, HelpCircle } from 'lucide-react';

import { services } from '../data/services';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            title: "Florida’s Most Accurate Construction Buying Service",
            subtitle: "Fast, Affordable & Contractor-Ready Estimates Delivered On Time. We help you bid more and win more jobs across the Sunshine State.",
            cta: "Get a Quote",
            link: "/quote"
        },
        {
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
            title: "Residential & Commercial Takeoffs",
            subtitle: "From custom homes in Naples to high-rises in Miami, our estimators deliver precision lumber, concrete, and finishing lists.",
            cta: "View Services",
            link: "/services"
        },
        {
            image: "https://images.unsplash.com/photo-1581094794329-cdac82a6cc88?q=80&w=2000&auto=format&fit=crop",
            title: "Win More Bids With Confidence",
            subtitle: "Stop guessing. Start estimating with data-backed accuracy using PlanSwift and Bluebeam technology.",
            cta: "See Samples",
            link: "/sample"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <>
            <SEO
                title="Florida Estimator - Accurate Construction Takeoffs"
                description="Florida’s leading estimating service. We provide material takeoffs and cost estimates for contractors, builders, and developers."
            />

            {/* Hero Slider Section */}
            <section className="relative h-[500px] md:h-[650px] overflow-hidden bg-dark text-white">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0 z-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="absolute inset-0 bg-dark/60 z-10" />
                        <img src={slides[currentSlide].image} alt="Hero Background" className="w-full h-full object-cover" />
                    </motion.div>
                </AnimatePresence>

                <div className="container mx-auto px-4 h-full relative z-20 flex items-center justify-center text-center">
                    <div className="max-w-4xl">
                        <motion.div
                            key={`text-${currentSlide}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
                                {slides[currentSlide].subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={slides[currentSlide].link} className="btn btn-primary text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform">
                                    {slides[currentSlide].cta}
                                </Link>
                                <Link to="/contact" className="btn bg-white text-dark hover:bg-gray-100 text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform">
                                    Upload Plans
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Slider Controls */}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors hidden md:block">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors hidden md:block">
                    <ChevronRight size={40} />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Contractors Trust Florida Estimator</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">We combine local Florida construction knowledge with industry-leading software to deliver precision accuracy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: CheckCircle, title: "99% Accuracy", desc: "Detailed localized material and labor costs." },
                            { icon: Clock, title: "24-48 Hr Turnaround", desc: "Fast delivery so you never miss a bid deadline." },
                            { icon: Award, title: "Florida Certified", desc: "Expertise in Florida building codes and compliance." },
                            { icon: DollarSign, title: "Affordable Rates", desc: "Cost-effective solutions for bids of all sizes." },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-secondary rounded-2xl hover:shadow-lg transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon className="text-primary w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive Estimating Services</h2>
                            <p className="text-gray-500 max-w-2xl text-lg">From residential remodels to commercial complexes, we cover every trade.</p>
                        </div>
                        <Link to="/services" className="btn btn-outline flex items-center gap-2">
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 6).map((service) => (
                            <Link key={service.id} to={service.path} className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <service.icon size={100} className="text-primary -rotate-12" />
                                </div>
                                <service.icon className="w-14 h-14 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                                <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
                                <p className="text-gray-500 mb-8 relative z-10">{service.description}</p>
                                <div className="flex items-center text-primary font-bold relative z-10">
                                    Learn More <ChevronRight size={18} className="ml-1 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works (New Content) */}
            <section className="py-24 bg-dark text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full"
                        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Simple Process</span>
                        <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 z-0"></div>

                        {[
                            { step: "01", title: "Upload Plans", desc: "Submit your PDF blueprints via our secure portal. We accept all formats." },
                            { step: "02", title: "We Takeoff", desc: "Our expert estimators measure and quantify every material item." },
                            { step: "03", title: "Receive Quote", desc: "Get a detailed Excel and PDF report ready for your bid submission." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center">
                                <div className="w-24 h-24 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-dark shadow-xl">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 max-w-xs mx-auto text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/quote" className="btn btn-primary btn-lg text-lg px-10 py-4">Start Your Estimate Now</Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Florida Projects</h2>
                        <p className="text-gray-500">We have estimated thousands of projects across the state.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative rounded-2xl overflow-hidden group h-[400px]">
                            <img src="https://images.unsplash.com/photo-1590664216212-62e76309e8aa?q=80&w=1770&auto=format&fit=crop" alt="Commercial Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-10">
                                <span className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Commercial</span>
                                <h3 className="text-3xl text-white font-bold mb-2">Downtown Miami Office Complex</h3>
                                <p className="text-gray-300">Full GC Estimate • $45M Value</p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group h-[400px]">
                            <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1770&auto=format&fit=crop" alt="Residential Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-10">
                                <span className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Residential</span>
                                <h3 className="text-3xl text-white font-bold mb-2">Luxury Villas in Naples</h3>
                                <p className="text-gray-300">Material Takeoff • 12 Units</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Content) */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How much does an estimate cost?", a: "Our pricing depends on the size and complexity of the project. We offer fixed pricing per project, starting as low as $200 for small trades. Upload your plans for a free quote." },
                            { q: "What is your turnaround time?", a: "Most residential estimates are completed within 24-48 hours. Larger commercial projects may take 3-5 days. We also offer rush services." },
                            { q: "Do you provide marked-up plans?", a: "Yes! Every estimate includes a color-coded markup of the plans so you can verify exactly what we've counted." },
                            { q: "Are you located in Florida?", a: "Yes, our team is based in Florida and we understand local building requirements, wind codes, and labor markets." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                                    <HelpCircle className="text-primary mt-1 min-w-[24px]" size={24} />
                                    {item.q}
                                </h3>
                                <p className="text-gray-600 ml-9 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Statistics */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Proven Results</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Numbers That Matter</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Our track record speaks for itself. See why Florida contractors choose us for their most important projects.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "5,000+", label: "Projects Completed", desc: "Across all of Florida" },
                            { number: "$2.5B+", label: "Total Project Value", desc: "Successfully estimated" },
                            { number: "99.2%", label: "Accuracy Rate", desc: "Verified by clients" },
                            { number: "24hrs", label: "Average Turnaround", desc: "For residential projects" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                                    <div className="text-lg font-bold text-dark mb-1">{stat.label}</div>
                                    <div className="text-gray-500 text-sm">{stat.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Software */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Advanced Technology</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Leading Estimating Software</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We leverage the most advanced construction estimating software available to ensure precision and speed. 
                                Our technology stack includes industry standards that major contractors rely on nationwide.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { name: "PlanSwift", desc: "Digital takeoff and measurement software for precise quantity calculations" },
                                    { name: "Bluebeam Revu", desc: "PDF markup and collaboration platform for plan review and markup" },
                                    { name: "RSMeans Database", desc: "Real-time cost data for accurate Florida market pricing" },
                                    { name: "AutoCAD", desc: "Professional drafting software for plan analysis and verification" }
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-dark mb-1">{tech.name}</h4>
                                            <p className="text-gray-600">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 relative overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                                    alt="Construction Software Technology" 
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                />
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Client Success</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here's what Florida contractors say about our estimating services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Florida Estimator helped us win a $12M commercial project in Tampa. Their detailed takeoffs gave us the confidence to bid competitively while maintaining our margins.",
                                author: "Mike Rodriguez",
                                title: "Project Manager",
                                company: "Sunshine Construction Group",
                                location: "Tampa, FL"
                            },
                            {
                                quote: "The turnaround time is incredible. We submitted plans on Monday morning and had our complete estimate by Tuesday afternoon. This speed gives us a real competitive advantage.",
                                author: "Sarah Chen",
                                title: "Estimating Director", 
                                company: "Coastal Builders Inc.",
                                location: "Fort Lauderdale, FL"
                            },
                            {
                                quote: "Their knowledge of Florida building codes and hurricane requirements saved us from a costly oversight. The attention to detail is unmatched in the industry.",
                                author: "James Thompson",
                                title: "General Contractor",
                                company: "Gulf Coast Construction",
                                location: "Naples, FL"
                            }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative">
                                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-6">"</div>
                                <p className="text-gray-600 mb-6 relative z-10 italic leading-relaxed pt-8">
                                    {testimonial.quote}
                                </p>
                                <div className="border-t pt-6">
                                    <div className="font-bold text-dark">{testimonial.author}</div>
                                    <div className="text-primary font-medium">{testimonial.title}</div>
                                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Statewide Coverage</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving All of Florida</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">From the Panhandle to the Keys, we provide estimating services throughout the Sunshine State.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { city: "Miami-Dade", projects: "1,200+ Projects" },
                                    { city: "Tampa Bay", projects: "800+ Projects" },
                                    { city: "Orlando", projects: "650+ Projects" },
                                    { city: "Jacksonville", projects: "500+ Projects" },
                                    { city: "Fort Lauderdale", projects: "450+ Projects" },
                                    { city: "Naples", projects: "300+ Projects" },
                                    { city: "Gainesville", projects: "250+ Projects" },
                                    { city: "Tallahassee", projects: "200+ Projects" }
                                ].map((area, idx) => (
                                    <div key={idx} className="bg-secondary/50 p-6 rounded-xl hover:bg-secondary transition-colors">
                                        <h4 className="font-bold text-dark mb-2">{area.city}</h4>
                                        <p className="text-primary font-medium">{area.projects}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                                <h4 className="font-bold text-dark mb-2">Specialized Florida Expertise</h4>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Hurricane-resistant construction requirements</li>
                                    <li>• Florida Building Code compliance</li>
                                    <li>• Coastal construction considerations</li>
                                    <li>• Local material and labor costs</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop" 
                                alt="Florida Construction Projects" 
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-2xl flex items-end p-8">
                                <div className="text-white">
                                    <h4 className="text-2xl font-bold mb-2">Statewide Excellence</h4>
                                    <p className="text-gray-200">Trusted by contractors from Pensacola to Key West</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-24 bg-gradient-to-br from-dark to-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Quality Promise</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Quality Assurance Process</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">Every estimate goes through our rigorous quality control process to ensure accuracy and completeness.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                                step: "1", 
                                title: "Initial Review", 
                                desc: "Plans are reviewed for completeness and clarity before starting the takeoff process." 
                            },
                            { 
                                step: "2", 
                                title: "Digital Takeoff", 
                                desc: "Experienced estimators use PlanSwift to measure and quantify all materials accurately." 
                            },
                            { 
                                step: "3", 
                                title: "Peer Review", 
                                desc: "A second estimator reviews all calculations and measurements for accuracy verification." 
                            },
                            { 
                                step: "4", 
                                title: "Final QC", 
                                desc: "Senior estimator performs final quality check and approves the completed estimate." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We stand behind our work. If you're not completely satisfied with your estimate, 
                                we'll revise it at no additional cost or provide a full refund. Your success is our success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Win More Bids?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100 lg:text-2xl">Upload your plans today and get a quote within minutes. Stop guessing and start estimating with precision.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/quote" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-10 py-5 font-bold shadow-2xl hover:-translate-y-1 transition-transform">
                            Get Your Free Quote
                        </Link>
                        <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-5 font-bold shadow-2xl hover:-translate-y-1 transition-all">
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
