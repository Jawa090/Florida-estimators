import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { Target, Users, Wrench, ShieldCheck, Award, Clock, MapPin, TrendingUp, CheckCircle, Star, Building, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <SEO title="About Us" description="Learn about Florida Estimator’s mission, experience, and the tools we use like PlanSwift and Bluebeam." />
            <Hero title="About Florida Estimator" subtitle="Your trusted partner for accurate, reliable construction estimating." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                            <p className="text-gray-600 mb-4 text-lg">
                                Florida Estimator is a premier construction estimating firm dedicated to serving contractors, builders, and developers across the Sunshine State. We understand the unique challenges of the Florida market, from hurricane-proof building codes to local labor rates.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg">
                                Our team consists of senior estimators with decades of combined experience in residential, commercial, and industrial projects. We don't just count quantities; we build winning strategies for our clients.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                                <Link to="/sample" className="btn btn-outline">View Samples</Link>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                        <div className="bg-secondary p-8 rounded-lg text-center">
                            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-gray-600">To empower contractors with precise data, helping them bid with confidence and profitability.</p>
                        </div>
                        <div className="bg-secondary p-8 rounded-lg text-center">
                            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Our Experience</h3>
                            <p className="text-gray-600">Over 15 years servicing the Florida market with thousands of successful winning bids.</p>
                        </div>
                        <div className="bg-secondary p-8 rounded-lg text-center">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Why Trust Us</h3>
                            <p className="text-gray-600">We are dedicated to accuracy, speed, and maintaining the highest ethical standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History & Milestones */}
            <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Excellence Since 2008</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">From a small Tampa-based startup to Florida's most trusted estimating service, our growth reflects our commitment to accuracy and client success.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
                        
                        <div className="space-y-12">
                            {[
                                {
                                    year: "2008",
                                    title: "Company Founded",
                                    desc: "Started as a two-person team in Tampa, focusing on residential takeoffs for local contractors.",
                                    side: "left"
                                },
                                {
                                    year: "2012",
                                    title: "Commercial Expansion",
                                    desc: "Expanded into commercial estimating, completing our first $10M+ project in downtown Miami.",
                                    side: "right"
                                },
                                {
                                    year: "2016",
                                    title: "Technology Integration",
                                    desc: "Invested in PlanSwift and Bluebeam technology, increasing accuracy and reducing turnaround times by 60%.",
                                    side: "left"
                                },
                                {
                                    year: "2020",
                                    title: "Statewide Coverage",
                                    desc: "Achieved full Florida coverage with team members in all major metropolitan areas.",
                                    side: "right"
                                },
                                {
                                    year: "2024",
                                    title: "Industry Leadership",
                                    desc: "Recognized as Florida's leading independent estimating service with 5,000+ completed projects.",
                                    side: "left"
                                }
                            ].map((milestone, idx) => (
                                <div key={idx} className={`flex items-center ${milestone.side === 'right' ? 'lg:flex-row-reverse' : ''} gap-8`}>
                                    <div className={`lg:w-1/2 ${milestone.side === 'right' ? 'lg:text-right' : ''}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                                    <div className="lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team & Expertise */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Estimators You Can Trust</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our team combines decades of construction experience with cutting-edge technology to deliver unmatched accuracy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                name: "Michael Rodriguez, PE",
                                title: "Chief Estimator & Founder",
                                experience: "25+ Years Experience",
                                specialties: ["Commercial Projects", "Structural Engineering", "Value Engineering"],
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                            },
                            {
                                name: "Sarah Chen, CCC",
                                title: "Senior Residential Estimator",
                                experience: "18+ Years Experience", 
                                specialties: ["Custom Homes", "Multi-Family", "Renovations"],
                                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop"
                            },
                            {
                                name: "James Thompson, CCE",
                                title: "Industrial & MEP Specialist",
                                experience: "22+ Years Experience",
                                specialties: ["Industrial Projects", "MEP Systems", "Heavy Civil"],
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-secondary/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <div className="h-64 overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <div className="text-primary font-medium mb-2">{member.title}</div>
                                    <div className="text-gray-600 text-sm mb-4">{member.experience}</div>
                                    <div className="space-y-1">
                                        {member.specialties.map((specialty, i) => (
                                            <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                <CheckCircle size={14} className="text-primary" />
                                                {specialty}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/20 rounded-2xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                            {[
                                { icon: Award, number: "15+", label: "Industry Certifications" },
                                { icon: Clock, number: "150+", label: "Years Combined Experience" },
                                { icon: Building, number: "12", label: "Team Members" },
                                { icon: Star, number: "4.9/5", label: "Client Satisfaction Rating" }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-dark mb-1">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Affiliations */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Professional Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications & Affiliations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">We maintain the highest professional standards through continuous education and industry involvement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "AACE International",
                                subtitle: "Certified Cost Engineers",
                                desc: "Professional cost engineering and estimating certification"
                            },
                            {
                                title: "ASPE",
                                subtitle: "American Society of Professional Estimators",
                                desc: "Active members maintaining industry best practices"
                            },
                            {
                                title: "Florida Building Commission",
                                subtitle: "Licensed Contractors",
                                desc: "Deep understanding of Florida building codes and requirements"
                            },
                            {
                                title: "AGC Florida",
                                subtitle: "Associated General Contractors",
                                desc: "Connected to Florida's construction industry leadership"
                            }
                        ].map((cert, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">{cert.title}</h3>
                                <div className="text-primary font-medium text-sm mb-3">{cert.subtitle}</div>
                                <p className="text-gray-600 text-sm">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Technology</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Leading Tools & Software</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We invest in the best technology available to ensure accuracy, speed, and reliability. 
                                Our software stack represents over $50,000 in annual licensing to provide you with the most precise estimates possible.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { 
                                        name: "PlanSwift Professional", 
                                        desc: "Digital takeoff software for precise measurements and quantity calculations",
                                        features: ["Digital plan scaling", "Area & linear measurements", "Assembly takeoffs"]
                                    },
                                    { 
                                        name: "Bluebeam Revu eXtreme", 
                                        desc: "Advanced PDF markup and collaboration platform for plan review",
                                        features: ["Plan markup & annotations", "Quantity linking", "3D PDF support"]
                                    },
                                    { 
                                        name: "RSMeans CostWorks", 
                                        desc: "Real-time construction cost database with Florida-specific pricing",
                                        features: ["Local cost data", "Labor rates", "Material pricing"]
                                    }
                                ].map((tech, idx) => (
                                    <div key={idx} className="border-l-4 border-primary pl-6">
                                        <h4 className="font-bold text-dark mb-2">{tech.name}</h4>
                                        <p className="text-gray-600 mb-3">{tech.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.features.map((feature, i) => (
                                                <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 relative overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                                    alt="Construction Estimating Software" 
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                />
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values & Commitment */}
            <section className="py-20 bg-gradient-to-br from-dark to-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Every Day</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">Our core values guide every estimate we produce and every relationship we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Precision First",
                                desc: "Every measurement matters. We double-check our work because your success depends on our accuracy."
                            },
                            {
                                icon: Clock,
                                title: "Reliable Delivery",
                                desc: "Deadlines are sacred in construction. We deliver on time, every time, so you never miss a bid opportunity."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Ethical Standards",
                                desc: "We maintain the highest ethical standards, treating every project with confidentiality and professionalism."
                            },
                            {
                                icon: TrendingUp,
                                title: "Continuous Improvement",
                                desc: "We constantly invest in new technology and training to stay ahead of industry changes."
                            },
                            {
                                icon: Users,
                                title: "Client Partnership",
                                desc: "Your success is our success. We're not just a service provider; we're your estimating partner."
                            },
                            {
                                icon: MapPin,
                                title: "Florida Expertise",
                                desc: "Deep local knowledge of Florida codes, weather requirements, and market conditions."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300">
                                <value.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section - Enhanced */}
            <section className="py-20 bg-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <Wrench className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-6">Professional Software Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">We leverage industry-leading technology to ensure every number is accounted for and every measurement is precise.</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
                        {[
                            { name: 'PlanSwift', category: 'Takeoff' },
                            { name: 'Bluebeam', category: 'Markup' },
                            { name: 'Trimble', category: 'Modeling' },
                            { name: 'Revit', category: 'BIM' },
                            { name: 'RSMeans', category: 'Pricing' },
                            { name: 'Excel', category: 'Reporting' }
                        ].map((tool) => (
                            <div key={tool.name} className="group">
                                <div className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-white transition-colors cursor-default mb-2">
                                    {tool.name}
                                </div>
                                <div className="text-xs text-primary uppercase tracking-wider">
                                    {tool.category}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                        <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">$50,000+ Annual Software Investment</h3>
                        <p className="text-gray-300 text-lg">
                            We maintain professional licenses for all major estimating platforms, ensuring you get the most accurate and up-to-date estimates possible.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
