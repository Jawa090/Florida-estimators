import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock, FileText, Building, CheckCircle, Users, Target, Upload, Calendar } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <SEO title="Contact Estimating Florida" description="Quick and correct cost estimates for your next building project in Florida. Skilled building estimating services for contractors, subcontractors, builders, and developers." />
            
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Contact Estimating Florida
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Do you need quick and correct cost estimates for your next building project? In Florida, contractors, 
                            subcontractors, builders, and developers can get skilled building estimating services from Estimating Florida. 
                            Let us know your due date and plans, and we will get back to you right away with the next steps.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:info@estimatingflorida.com" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-xl">
                                <Mail className="w-5 h-5 mr-2" />
                                Email Us Now
                            </a>
                            <a href="tel:+17187196171" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-bold">
                                <Phone className="w-5 h-5 mr-2" />
                                Call (718) 719-6171
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Do you want to know more about how we estimate, how long it takes, or our prices? 
                            Get in touch with us in any way listed below, and we'll respond as quickly as we can.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-secondary/30 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="(555) 123-4567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="City, Florida" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm mb-8">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <a href="mailto:info@estimatingflorida.com" className="text-primary hover:text-primary/80">
                                                info@estimatingflorida.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Address</h4>
                                            <p className="text-gray-600">
                                                1234 Sunshine Blvd, Suite 567<br />
                                                Miami, FL 33101 USA
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Business Hours</h4>
                                            <p className="text-gray-600">
                                                Mon–Sat 9:00 AM–6:00 PM EST
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Target className="text-primary mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Service Area</h4>
                                            <p className="text-gray-600">
                                                Florida (Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale & statewide)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl w-full flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                                    <span className="text-gray-600 font-semibold">Miami, Florida Location</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Request Construction Estimate Section */}
            <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request a Construction Estimate (Fast Quote)</h2>
                            <p className="text-gray-600 text-lg">To get a quick quote and schedule, please send:</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-6">Required Information:</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Drawings or ideas for the project (PDFs are best)",
                                            "The project is in City, Florida",
                                            "The kind of project: residential, commercial, or industrial",
                                            "Trades needed (e.g., Concrete, Masonry, Roofing, Drywall, Painting, Electrical, Plumbing, HVAC, etc.)",
                                            "Due date for bids",
                                            "Any scope notes, addenda, or specs"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-primary/10 p-6 rounded-xl">
                                    <h4 className="font-bold mb-4 text-center">Send Your Plans</h4>
                                    <div className="text-center mb-6">
                                        <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                                        <p className="text-gray-600 mb-4">
                                            Send your ideas to <br />
                                            <a href="mailto:info@estimatingflorida.com" className="text-primary font-bold hover:text-primary/80">
                                                info@estimatingflorida.com
                                            </a>
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            or use the contact form to send files and information.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <a href="mailto:info@estimatingflorida.com" className="btn btn-primary w-full">
                                            <Mail className="w-5 h-5 mr-2" />
                                            Email Plans Now
                                        </a>
                                        <button className="btn btn-outline w-full">
                                            <Upload className="w-5 h-5 mr-2" />
                                            Upload Files
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Happens When You Get in Touch with Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our streamlined process ensures you get accurate estimates quickly and efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: "1",
                                title: "Review Your Scope",
                                desc: "We go over your scope and ideas.",
                                icon: FileText
                            },
                            {
                                step: "2", 
                                title: "Set Parameters",
                                desc: "We set the date, format, and trades.",
                                icon: Calendar
                            },
                            {
                                step: "3",
                                title: "Provide Quote",
                                desc: "You get a response time and a quote.",
                                icon: Clock
                            },
                            {
                                step: "4",
                                title: "Deliver Report",
                                desc: "We get your launch or estimate report ready for bidding.",
                                icon: CheckCircle
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-20 h-20 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    {item.step}
                                </div>
                                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-dark to-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pick Estimating Florida?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            We combine accuracy, clarity, and speed to deliver the best estimating services in Florida.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: CheckCircle,
                                title: "Correct Estimating and Number Takeoffs",
                                desc: "Accurate calculations and reliable quantity takeoffs you can trust for your bids."
                            },
                            {
                                icon: FileText,
                                title: "Reports Easy for Contractors to Read",
                                desc: "Organized, clear, and simple reports that are formatted for easy bid submission."
                            },
                            {
                                icon: Clock,
                                title: "Quick Communication and On-Time Arrival",
                                desc: "Fast response times and reliable delivery schedules that meet your deadlines."
                            },
                            {
                                icon: Users,
                                title: "Support for General Builders",
                                desc: "Comprehensive support for general contractors throughout their projects."
                            },
                            {
                                icon: Building,
                                title: "Subcontractor Specialists",
                                desc: "Specialized services tailored for subcontractors across all trades."
                            },
                            {
                                icon: Target,
                                title: "Statewide Florida Coverage",
                                desc: "Complete coverage across all of Florida with local market knowledge."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300">
                                <feature.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
                        Contact us today for quick and accurate construction estimates. 
                        We're here to help you win more bids and grow your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:info@estimatingflorida.com" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-10 py-4 font-bold shadow-xl">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Us Today
                        </a>
                        <a href="tel:+17187196171" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4 font-bold">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (718) 719-6171
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}