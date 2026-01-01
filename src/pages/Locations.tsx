import Hero from '../components/ui/Hero';
import PageSEO from '../components/PageSEO';
import { locations } from '../data/locations';
import { MapPin, Building, Users, TrendingUp, Clock, Award, Phone, Mail, CheckCircle, Calculator, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Locations() {
    return (
        <>
            <PageSEO
                slug="locations"
                fallbackTitle="Service Areas"
                fallbackDescription="We provide estimating services across all of Florida, including Miami, Tampa, Orlando, Jacksonville and more."
            />
            <Hero title="Service Areas in Florida" subtitle="Local expertise for every major city and county across the state." />

            {/* Statewide Coverage Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Comprehensive Coverage</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Every Corner of Florida</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            From the Panhandle to the Keys, we provide expert construction estimating services throughout the Sunshine State.
                            Our local knowledge and statewide presence ensure accurate, market-specific estimates for your projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Why Local Expertise Matters</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Building,
                                        title: "Regional Building Codes",
                                        desc: "Each Florida region has unique requirements - from hurricane zones to coastal construction standards."
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Local Market Rates",
                                        desc: "Labor and material costs vary significantly across the state. We maintain current pricing for every market."
                                    },
                                    {
                                        icon: Users,
                                        title: "Contractor Networks",
                                        desc: "Our relationships with local suppliers and subcontractors provide insider market intelligence."
                                    },
                                    {
                                        icon: Clock,
                                        title: "Regional Logistics",
                                        desc: "Understanding delivery schedules, permitting timelines, and local inspection processes."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
                                    alt="Florida Construction Map"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-2xl flex items-end p-8">
                                    <div className="text-white">
                                        <MapPin className="w-12 h-12 text-primary mb-4" />
                                        <h4 className="text-2xl font-bold mb-2">Statewide Presence</h4>
                                        <p className="text-gray-200">67 Counties • 400+ Cities • 15+ Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Statistics */}
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/20 rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { number: "67/67", label: "Counties Served", desc: "Complete statewide coverage" },
                                { number: "5,000+", label: "Projects Completed", desc: "Across all regions" },
                                { number: "24hrs", label: "Average Response", desc: "Statewide service" },
                                { number: "99.2%", label: "Accuracy Rate", desc: "Consistent quality" }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                    <div className="font-bold text-dark mb-1">{stat.label}</div>
                                    <div className="text-gray-600 text-sm">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Major Markets */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Major Markets</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Primary Service Areas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We maintain dedicated teams and local expertise in Florida's largest construction markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                city: "Miami-Dade",
                                region: "South Florida",
                                projects: "1,200+ Projects",
                                specialties: ["High-Rise Construction", "Luxury Residential", "Commercial Towers"],
                                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "Fastest growing vertical market in the Southeast"
                            },
                            {
                                city: "Tampa Bay",
                                region: "West Central Florida",
                                projects: "800+ Projects",
                                specialties: ["Multi-Family", "Commercial Renovation", "Industrial"],
                                image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "Major logistics and distribution hub"
                            },
                            {
                                city: "Orlando",
                                region: "Central Florida",
                                projects: "650+ Projects",
                                specialties: ["Hospitality", "Theme Parks", "Vacation Rentals"],
                                image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "Tourism and entertainment construction leader"
                            },
                            {
                                city: "Jacksonville",
                                region: "Northeast Florida",
                                projects: "500+ Projects",
                                specialties: ["Logistics Centers", "Residential Subdivisions", "Port Facilities"],
                                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "Major port and logistics gateway"
                            },
                            {
                                city: "Fort Lauderdale",
                                region: "Broward County",
                                projects: "450+ Projects",
                                specialties: ["Marine Construction", "Luxury Homes", "Yacht Facilities"],
                                image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "Premium marine and waterfront construction"
                            },
                            {
                                city: "Naples",
                                region: "Southwest Florida",
                                projects: "300+ Projects",
                                specialties: ["Custom Homes", "Golf Communities", "Resort Properties"],
                                image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop",
                                marketInfo: "High-end residential and resort market"
                            }
                        ].map((market, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={market.image}
                                        alt={market.city}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold">{market.city}</h3>
                                        <span className="text-primary font-medium text-sm">{market.projects}</span>
                                    </div>
                                    <div className="text-gray-600 text-sm mb-4">{market.region}</div>
                                    <p className="text-gray-600 text-sm mb-4 italic">{market.marketInfo}</p>

                                    <div className="space-y-2">
                                        <h4 className="font-medium text-dark">Specialties:</h4>
                                        {market.specialties.map((specialty, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={14} className="text-primary" />
                                                {specialty}
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to={`/location/${market.city.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`}
                                        className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                                    >
                                        Learn More <MapPin size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Expertise */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Regional Knowledge</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Florida-Specific Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our deep understanding of Florida's unique construction requirements ensures accurate estimates that account for local conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Hurricane Codes",
                                icon: Award,
                                desc: "Wind load requirements, impact-resistant materials, and storm-rated construction standards.",
                                regions: ["South Florida", "Central Coast", "Panhandle"]
                            },
                            {
                                title: "Coastal Construction",
                                icon: Building,
                                desc: "Seawall requirements, pile foundations, and saltwater-resistant materials and finishes.",
                                regions: ["Miami-Dade", "Broward", "Collier"]
                            },
                            {
                                title: "Soil Conditions",
                                icon: Truck,
                                desc: "Sandy soils, high water tables, and specialized foundation requirements throughout the state.",
                                regions: ["Statewide", "Coastal Areas", "Central Florida"]
                            },
                            {
                                title: "Climate Factors",
                                icon: Calculator,
                                desc: "Humidity considerations, UV protection, and thermal expansion requirements for materials.",
                                regions: ["All Regions", "Tropical Zones", "Subtropical Areas"]
                            }
                        ].map((expertise, idx) => (
                            <div key={idx} className="bg-secondary/30 p-6 rounded-xl hover:bg-secondary/50 transition-colors">
                                <expertise.icon className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-3">{expertise.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{expertise.desc}</p>
                                <div className="space-y-1">
                                    {expertise.regions.map((region, i) => (
                                        <div key={i} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded inline-block mr-1">
                                            {region}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Locations Grid */}
            <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Complete Coverage</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">All Service Locations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Click on any location to learn about local market conditions, recent projects, and specialized services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {locations.map((loc) => (
                            <Link
                                key={loc.id}
                                to={loc.path}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group text-center"
                            >
                                <MapPin className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-medium text-dark group-hover:text-primary transition-colors">{loc.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Don't See Your Location?</h3>
                            <p className="text-gray-600 mb-6">
                                We serve contractors throughout Florida, including smaller cities and rural areas.
                                Contact us to discuss your specific location and project needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/" className="btn btn-primary">
                                    <Phone size={18} className="mr-2" />
                                    Call Us Today
                                </Link>
                                <Link to="/quote/" className="btn btn-outline">
                                    <Mail size={18} className="mr-2" />
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Partnerships */}
            <section className="py-20 bg-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Local Connections</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Statewide Partnerships</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Our network of local partnerships ensures we stay current with regional market conditions and pricing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Material Suppliers",
                                desc: "Direct relationships with lumber yards, concrete plants, and specialty suppliers in every major market.",
                                count: "150+"
                            },
                            {
                                title: "Subcontractor Networks",
                                desc: "Active connections with trade contractors providing real-time labor rate and availability data.",
                                count: "500+"
                            },
                            {
                                title: "Industry Associations",
                                desc: "Memberships in local AGC chapters, builder associations, and trade organizations statewide.",
                                count: "25+"
                            }
                        ].map((partnership, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                                <div className="text-4xl font-bold text-primary mb-2">{partnership.count}</div>
                                <h3 className="text-xl font-bold mb-4">{partnership.title}</h3>
                                <p className="text-gray-300">{partnership.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
