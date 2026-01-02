import { Link } from 'react-router-dom';
import {
    CheckCircle, Clock, DollarSign, HelpCircle,
    FileText, Calculator, Building, PenTool, Layout, Ruler, Hammer,
    Zap, Droplet, Wind, Box, Layers, Factory as FactoryIcon, Home as HomeIcon
} from 'lucide-react';
import PageSEO from '../components/PageSEO';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <PageSEO
                slug="home"
                fallbackTitle="Construction Estimating Services Florida | Accurate and Fast"
                fallbackDescription="Get professional construction estimating services Florida, with accurate takeoffs and pricing. At Florida Estimators, we help you plan better and stay within budget."
            />

            {/* Hero Section - Static Image */}
            <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-dark text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-dark/30 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Florida Construction Estimating"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 h-full relative z-20 flex items-center justify-center text-center">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
                                Florida Construction Estimating Services
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-4xl mx-auto font-light drop-shadow-md leading-relaxed">
                                The fast-growing construction market of Florida demands accurate estimations. Errors in these numbers can lead to budget confusion and overruns. At Florida estimators, we give you the solution with reliable cost projections. With 15 years of experience, our estimates will help you gain clarity and plan budgets better. It allows you to avoid surprises and setbacks. Work with us to grow your construction business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/quote/" className="btn btn-primary text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform">
                                    Get a Quote
                                </Link>
                                <Link to="/contact/" className="btn bg-white text-dark hover:bg-gray-100 text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform">
                                    Upload Plans
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Takeoff And Construction Estimating Services Florida */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-32 z-0" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Detailed Planning</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark leading-tight">Takeoff And Construction Estimating Services Florida</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Construction works in Florida need the right planning and realistic budgets. Our construction estimation services help contractors make stronger bids. We give you detailed measurements and cost projections of all materials and labor. This gives you better control over pricing and reduces the risks of missed items.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Our experts follow local pricing data and labor conditions. This aligns our cost values with the current market conditions. We prepare calculations for all CSI trades to get exact quantities. Our assistance in bid organization will also increase your chances of winning. With construction estimating Florida, you can manage to increase profits.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mb-8">
                                <h3 className="font-bold text-xl mb-2">Trusted Experts</h3>
                                <p className="text-gray-600">
                                    Precision and reliability are essential when calculating construction costs. Our team brings industry knowledge to your service. We pass all numbers through an elaborate review process as well. Our firm focuses on building trust with service you can rely on. Our support with planning budgets and managing risks will help you achieve your goals.
                                </p>
                                <p className="text-gray-600 mt-4">
                                    We check every calculation for consistency to avoid surprises. We combine our knowledge with practical understanding to help you make decisions. We are one of the best construction estimating services Florida.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-3xl z-0" />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-br-3xl z-0" />
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="Florida Construction Site" className="relative z-10 w-full rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contractors Trust Us */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-16 flex flex-col justify-center bg-dark text-white">
                                <h3 className="text-3xl font-bold mb-6">Why Contractors Trust Florida Estimator</h3>
                                <p className="text-gray-300 mb-8 text-lg">Contractors across Florida rely on us for accurate cost projections. We provide quick delivery with clear pricing to help with planning.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Fast Turnaround rate",
                                        "Prices based on Location",
                                        "Reliable support and easy revisions",
                                        "Advanced estimation tools"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="bg-primary rounded-full p-1"><CheckCircle size={16} className="text-white" /></div>
                                            <span className="font-semibold text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-64 lg:h-auto">
                                <img src="/trust.jpg" alt="Trust" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Comprehensive Construction Estimating Services Florida</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Commercial */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Commercial" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg">
                                    <Building size={24} className="text-primary" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4">Commercial Estimating Services</h3>
                                <p className="text-gray-600 mb-4">Our commercial services support sites like offices and retail centres. These are sites where active timing and coordination matter. So, we analyze each stage and assess conditions in our construction estimating Florida. Our team studies cost details to support bidding and scope comparison.</p>
                                <p className="text-gray-600 text-sm">We prepare trade calculations that cover concrete, masonry, and more. We also mark items that can cause pricing conflicts. Our calculations include complete quantities, labor hours, and material pricings. Working with us, you will avoid cost risks and improve the workflow.</p>
                            </div>
                        </div>

                        {/* Residential */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" alt="Residential" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg">
                                    <Hammer size={24} className="text-primary" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4">Residential Estimating Services</h3>
                                <p className="text-gray-600 mb-4">Residential services rely on effective repetition and cost consistency. We structure our calculations to help you plan purchases in advance. Our experts give attention to usage patterns and housing details.</p>
                                <p className="text-gray-600 text-sm">We also help our contractors to maintain uniform prices in all units. At our firm, we include layout changes and differences in site conditions. Book a call with us today to start. We give you the best construction estimating services in Florida.</p>
                            </div>
                        </div>

                        {/* Industrial */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg">
                                    <FactoryIcon size={24} className="text-primary" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4">Industrial Estimating Services</h3>
                                <p className="text-gray-600 mb-4">Industrial cost assessment needs attention to setup details and site conditions. We cover heavy materials and labor needs in it. Also, our team shows realistic work time.</p>
                                <p className="text-gray-600 text-sm">We follow timelines and phases of construction plans. This detailed work helps you reduce time while maintaining quality. Hence, you can manage high-scope projects with confidence.</p>
                            </div>
                        </div>

                        {/* Preliminary */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Preliminary" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg">
                                    <FileText size={24} className="text-primary" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4">Preliminary Estimating Services</h3>
                                <p className="text-gray-600 mb-4">Our preliminary services support planning before the process. We review the scope and budget needs of the task for better design choices. You can also choose suitable systems according to goals.</p>
                                <p className="text-gray-600 text-sm">This will help you test options and adjust direction. These estimates reduce the risks of extra expenses. So, you can rely on our expert construction estimators Florida.</p>
                            </div>
                        </div>

                        {/* Takeoff */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group md:col-span-2 lg:col-span-2">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                    <img src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=2069&auto=format&fit=crop" alt="Takeoff" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg">
                                        <Calculator size={24} className="text-primary" />
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-4">Construction Takeoff Services</h3>
                                    <p className="text-gray-600 mb-4">Our takeoff services provide the right quantity data for pricing. We group trades, material types, and construction stages to support pricing and ordering. We give you exact numbers to avoid confusion in bidding. These takeoffs will help contractors build pricing with fewer errors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 bg-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our approach</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Methodology</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Here are the steps for the right Florida construction estimating services.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {[
                            { title: "Clear Communication", desc: "We maintain open communication with our clients in the process. We confirm all details and address any confusion to avoid any mistakes." },
                            { title: "Detailed Project Review", desc: "Our team reviews your task to understand the scope and needs. We mark all the details and assumptions early for realistic cost values." },
                            { title: "Advanced Tools and Software", desc: "We work with the latest platforms to get exact results. These tools allow us to manage complex data with clarity." },
                            { title: "Updated Cost Data", desc: "We apply the latest pricing according to location and market conditions. This aligns material and labor costs with real values for a better budget." },
                            { title: "Continuous Skill Development", desc: "Our experts keep updating their knowledge to match changing construction methods. This learning helps maintain consistency in every number." },
                            { title: "Workflow Improvements", desc: "We refine our processes to reduce delays in the calculation. Our team streamlines the internal workflows for reliable results. This makes us a trustworthy construction estimating services Florida." },
                            { title: "Risk Management", desc: "Our team identifies the risks in cost impact with uncertainties. This helps with better cost planning before the construction." },
                            { title: "Scalable Support", desc: "Our approach is flexible for projects of different sizes and scopes. We handle small bids and large developments with resource fixes." },
                            { title: "Insights from Past Projects", desc: "We use experience from our completed projects for better cost values. Our team applies these lessons to improve its performance." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Process */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Easy Steps</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Process to Get your Estimate</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Upload Your Drawings And Plans", icon: FileText, desc: "First of all, share your projects and supporting documents with details. Our team reviews this information to understand the project scope and trades." },
                            { step: "02", title: "Get The Initial Quote", icon: Clock, desc: "After the plan review, we give a quote with cost and delivery time. This is according to your project needs and size." },
                            { step: "03", title: "Pay The Service Charges", icon: DollarSign, desc: "When you approve the quote, head to secure payment. This will confirm your order, and we will begin working on it. We offer the best construction estimating services Florida." },
                            { step: "04", title: "Get Your Estimate", icon: CheckCircle, desc: "Finally, you will get a detailed report of the cost analysis. This will have clear quantities and cost breakdowns. You will get it in time in a format ready for bidding." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={32} />
                                </div>
                                <div className="text-4xl font-bold text-gray-200 mb-2">{item.step}</div>
                                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/contact/" className="btn btn-primary btn-lg">Upload Plans Now</Link>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
                            <p className="text-gray-600 text-lg">Our past projects will show you the range and quality of our work. Each of these shows our attention to detail and accuracy. We support small builds to large buildings with equal attention. Explore our work to see our success in the business.</p>
                        </div>
                        <Link to="/sample/" className="btn btn-outline mt-6 md:mt-0">View All Projects</Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                        ].map((img, i) => (
                            <div key={i} className="group overflow-hidden rounded-xl h-64 relative">
                                <img src={img} alt="Portfolio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Link to="/sample/" className="btn btn-sm btn-primary">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Who We Serve</h2>
                    <p className="text-gray-600 mb-8">Here are the professionals we serve at the #1 estimating company in Florida:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "General Contractors", "Speciality Subcontractors", "Residential Builders",
                            "Engineering Consultants", "Commercial Property Owners", "Architects and Design Firms",
                            "Construction Management Teams", "Real Estate Developers"
                        ].map((item, i) => (
                            <div key={i} className="bg-white px-6 py-3 rounded-full shadow-sm text-dark font-medium border border-primary/20">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CSI Trade Estimations */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Specialized Trades</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">CSI Trade Estimations and Takeoffs</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Electrical Estimating",
                                icon: Zap,
                                desc: "The electrical cost analysis handles systems like lighting and power distribution. We measure each trade to maintain precision. Our approach matches the calculations with your drawings and details. Our construction estimating services Florida review the layouts as well. Clear separation of labor and costs helps the contractors plan the construction."
                            },
                            {
                                title: "Drywall Estimating And Takeoff",
                                icon: Layers,
                                desc: "Drywall cost values include all the ceilings, among other parts. We measure quantities according to room height and layout. The full cost also includes waste factors and setup costs. This allows contractors to order and plan labor with fewer risks. So, we maintain the right drywall numbers for your commercial and residential works."
                            },
                            {
                                title: "Lumber Takeoff",
                                icon: Ruler,
                                desc: "Lumber takeoff services will measure all the framing material. It includes material for floors, walls, and roofs. We measure these according to spacing needs and structures. Our team also makes the takeoff by lumber type and size. This service helps you control the material costs of the framing process. We offer you the top construction cost estimating services Florida."
                            },
                            {
                                title: "Insulation Estimating",
                                icon: Box,
                                desc: "These calculations include thermal and acoustic insulation for walls. We measure quantities according to assembly size and coverage area. Our team separates different materials to match needs. The right numbers help contractors plan labor use. Our calculation meets energy standards to avoid any cost gaps."
                            },
                            {
                                title: "Roofing Estimating",
                                icon: HomeIcon,
                                desc: "Roofing cost values cover shingles, metal roofing, and accessories. We measure roof areas and slopes to get a full scope. Our experts cover material overlaps and setup methods. With this approach, you can price projects with the right numbers. Hence, the setup will not face any gaps in construction estimating services Florida."
                            },
                            {
                                title: "HVAC Estimating",
                                icon: Wind,
                                desc: "HVAC numbers cover ductwork and controls. We measure quantities according to layout and system size. We separate the setup components to support clear pricing. This will help HVAC contractors to coordinate other trades. All the heating and ventilation systems make up this complete calculation."
                            },
                            {
                                title: "Plumbing Estimating",
                                icon: Droplet,
                                desc: "We cover domestic water, drainage, and other piping systems. Our team calculates quantities according to exact layout drawings. We also organize pipe sizes. This detailed approach reduces the risk of errors. We support your labor schedule and material coordination. This makes us an accurate construction estimating services Florida."
                            },
                            {
                                title: "Piping Estimating",
                                icon: PenTool,
                                desc: "This includes mechanical processes and other piping systems. We assess pipe lengths, sittings, and valves to give correct numbers. These quantities support planning and complete cost management. Thus, plumbing contractors can make exact bids and work with other trades."
                            },
                            {
                                title: "Concrete Estimating Services",
                                icon: Layout,
                                desc: "Our concrete system services measure all structures within it. We assess foundations, slabs, and walls in our process. Our team also includes the setup method and sequences. We structure our cost reviews to support the complete process. In the analysis, we especially pay attention to the site conditions before construction. You can trust us as a reliable Florida construction estimating company."
                            }
                        ].map((trade, i) => (
                            <div key={i} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-primary/50 group bg-gray-50 hover:bg-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <trade.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-lg">{trade.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{trade.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Do We Offer */}
            <section className="py-24 bg-dark text-white relative">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">What do we offer at the #1 Estimating Company in Florida?</h2>
                    <p className="text-xl text-gray-300 mb-12">We give support that allows teams to move from planning to pricing. Our deliverables bring clarity to complex data to support better decisions. We help you match cost planning with real construction needs. Here is a list of our deliverables for your clarity:</p>

                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                        {[
                            "Organized cost summaries for quick review",
                            "Clear Scope separation between trades",
                            "Support aligned with project timelines",
                            "Help during the bid clarification stages",
                            "Documents for future referencing"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-full backdrop-blur-sm">
                                <CheckCircle className="text-primary" size={20} />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Who can use your construction estimating services?", a: "Our services are good for general contractors as well as developers. In short, a vast number of people can use our services." },
                            { q: "What formats do you deliver your estimates in?", a: "We deliver clear data in Excel, PDF, or CSI-formatted reports. These are easy to review and bid on. We also give you the option to choose a format of your preference. You can customize results at the best construction estimating services Florida." },
                            { q: "Do you offer revisions in case of changed plans?", a: "Yes, we include revisions in our services to serve our clients. If your drawings or scopes change, we will update the number to match the current information." },
                            { q: "Does your company offer fast and urgent services as well?", a: "Yes, we offer fast and urgent estimating services to meet deadlines. Our team will handle rush projects without compromising on details." }
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

            {/* CTA Banner */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Win More Bids?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100 lg:text-2xl">Share your plans with us and get a quote from our expert estimators. Replace all the guesses with precise estimates you can work with. We give you the best construction estimating services Florida at our firm.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/quote/" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-12 py-5 font-bold shadow-2xl hover:-translate-y-1 transition-transform">
                            Get Your Estimate
                        </Link>
                        <Link to="/contact/" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-12 py-5 font-bold shadow-2xl hover:-translate-y-1 transition-all">
                            Upload Plans
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
