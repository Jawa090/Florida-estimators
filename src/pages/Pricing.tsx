import PageSEO from '../components/PageSEO';
import { Check, Star, Clock, Calculator, FileText, Building, Phone, Upload, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <>
            <PageSEO
                slug="pricing"
                fallbackTitle="Pricing - Construction Estimating Services"
                fallbackDescription="Best Estimates at a Reasonable Budget. Accurate construction estimates at low rates. 20 years of experience with 99% bid-win ratio."
            />

            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Best Estimates at a Reasonable Budget
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Are you looking for a platform that provides accurate construction estimates at low rates?
                            We have been providing the best construction Estimating Services for 20 years for the best budgets ever possible.
                            We have supported thousands of contractors, builders, developers, architects, and homeowners to achieve
                            budget accuracy and bid-win ratio up to 99%.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+17187196171" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-xl">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Us: (718) 719-6171
                            </a>
                            <Link to="/contact/" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-bold">
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule a Meeting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Construction Estimating Plans Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Construction Estimating Plans</h2>
                        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Cost is the most important factor in estimation. It should be clear before the project starts.
                                Generally, smaller or simpler projects come with a straightforward, fixed fee. For simple projects,
                                the estimation fee averages around $200 per project. This option is good for contractors who need
                                estimates or only handle a few jobs.
                            </p>
                            <p>
                                If you manage multiple projects every month, choose a monthly estimating package. Because it is most
                                cost-effective for you. Many estimating companies offer plans starting from about $1,500 per month.
                                These include a dedicated estimator and a set number of estimates. This approach not only saves time
                                but also brings consistency.
                            </p>
                            <p className="font-medium text-primary">
                                There are some of the best plans for construction estimating services. You can pick one of them based on your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20 bg-gradient-to-br from-secondary/30 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Single Trade Package */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Single Trade Package</h3>
                                <div className="text-primary font-medium mb-4">Single Trade</div>
                                <p className="text-gray-600 mb-6">
                                    Ideal for subcontractors focusing on a single trade (e.g., electrical, plumbing, HVAC).
                                    Includes detailed Quantity takeoffs and trade-specific cost analysis.
                                </p>
                                <div className="text-4xl font-bold text-primary mb-2">$150 - $250</div>
                                <div className="text-gray-500">per project</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4">Package Details</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Turnaround Time:</strong> Within two working days</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Revisions:</strong> Multiple revisions allowed</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Coverage:</strong> All USA Regions</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/quote/" className="btn btn-outline w-full">Get Started</Link>
                        </div>

                        {/* Standard Package */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                                <div className="text-primary font-medium mb-4">Multiple Trade / GC</div>
                                <p className="text-gray-600 mb-6">
                                    Best for general contractors handling small to mid size projects.
                                    Includes complete trade breakdown, CSI-Coded summary and pricing sheets.
                                </p>
                                <div className="text-4xl font-bold text-primary mb-2">$400 - $600</div>
                                <div className="text-gray-500">per project</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4">Package Details</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Turnaround Time:</strong> Within four working days</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Revisions:</strong> Multiple revisions allowed</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Coverage:</strong> All USA Regions</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/quote/" className="btn btn-outline w-full">Get Started</Link>
                        </div>

                        {/* Premium Package - Most Popular */}
                        <div className="bg-primary text-white rounded-2xl p-8 shadow-xl relative transform scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-secondary text-dark px-6 py-2 rounded-full text-sm font-bold">Most Popular</span>
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Premium Packages</h3>
                                <div className="text-blue-100 font-medium mb-4">Full Project Estimation</div>
                                <p className="text-blue-100 mb-6">
                                    Designed for large GC or developers needing Comprehensive and prioritized estimates.
                                    Includes Value engineering, detailed reports, and clarifications.
                                </p>
                                <div className="text-4xl font-bold mb-2">$1,000 - $1,500</div>
                                <div className="text-blue-200">per project</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4">Package Details</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span><strong>Turnaround Time:</strong> Within four working days</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span><strong>Revisions:</strong> Unlimited revisions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span><strong>Coverage:</strong> All USA Regions</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/quote/" className="btn bg-white text-primary hover:bg-gray-100 w-full font-bold">Get Started</Link>
                        </div>

                        {/* Residential Monthly Package */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Residential Monthly Package</h3>
                                <div className="text-primary font-medium mb-4">Residential Project</div>
                                <p className="text-gray-600 mb-6">
                                    For builders or contractors managing residential projects per month.
                                    Includes recurring report, project tracking, and fast delivery.
                                </p>
                                <div className="text-4xl font-bold text-primary mb-2">$2,500 - $3,500</div>
                                <div className="text-gray-500">per month</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4">Package Details</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Calculator className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>No. of Projects:</strong> 15</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Project Size:</strong> Two story buildings</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Turnaround Time:</strong> 3 days per project</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Revisions:</strong> Multiple revisions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Target className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Coverage:</strong> All USA Regions</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/quote/" className="btn btn-outline w-full">Get Started</Link>
                        </div>

                        {/* Commercial Monthly Package */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Commercial Monthly Package</h3>
                                <div className="text-primary font-medium mb-4">Commercial Project</div>
                                <p className="text-gray-600 mb-6">
                                    For commercial GCs and developers needing consistent monthly estimating support.
                                    Includes material takeoffs and dedicated estimator access.
                                </p>
                                <div className="text-4xl font-bold text-primary mb-2">$3,500 - $4,500</div>
                                <div className="text-gray-500">per month</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4">Package Details</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Calculator className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>No. of Projects:</strong> 15</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Building className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Project Size:</strong> 10,000 SF to 20,000 SF</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Turnaround Time:</strong> 3 days per project</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Revisions:</strong> Multiple revisions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Target className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span><strong>Coverage:</strong> All USA Regions</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/quote/" className="btn btn-outline w-full">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factors that Affect Estimation Prices */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Factors that Affect the Estimation Prices</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            When it comes to construction estimating services, the final price can vary widely.
                            Several key factors influence what you will pay. However, understanding them can help you choose the right service for your project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                number: "1",
                                title: "Project Scope and Complexity",
                                desc: "The size and difficulty of your project play a major role when the project is started. Larger builds or jobs with complex designs have higher prices, while smaller or simpler projects are more affordable."
                            },
                            {
                                number: "2",
                                title: "Required Turnaround Time",
                                desc: "In addition, the speed at which you need your estimate can impact the price. If you request a fast turnaround, such as a 9–24-hour delivery, some companies may charge an extra fee for the rushed service."
                            },
                            {
                                number: "3",
                                title: "Level of Detail Needed",
                                desc: "Moreover, the amount of detail you want in your estimate also affects the cost. For example, including markups, specific cost codes, or deeper breakdowns. Such estimations often require more time and expertise, leading to a slightly higher price."
                            },
                            {
                                number: "4",
                                title: "Extra Services Included",
                                desc: "Some estimating packages come with additional services. Such as software guidance, cost engineering, or full material takeoffs. Since these add more value and support, they may increase the overall cost."
                            },
                            {
                                number: "5",
                                title: "Location-Based Pricing Data",
                                desc: "Finally, geographic pricing plays a role as well. Many companies use location-specific databases, such as RSMeans zip-code pricing in the U.S. This type of pricing adjusts material and labor costs based on regional market rates."
                            }
                        ].map((factor, idx) => (
                            <div key={idx} className="bg-secondary/30 p-8 rounded-xl hover:bg-secondary/50 transition-colors">
                                <div className="w-12 h-12 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mb-6">
                                    {factor.number}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{factor.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{factor.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Pricing Works */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Our Pricing Works for Contractors</h2>
                            <div className="space-y-6">
                                {[
                                    "You get accurate numbers, not guesswork.",
                                    "You meet deadlines without rushing.",
                                    "You pay less than typical market rates.",
                                    "You get ongoing support without extra charges.",
                                    "Each estimate is formatted to be easy to plug into your bid."
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-lg text-gray-700">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-center">Why We Are the Best Choice</h3>
                            <p className="text-gray-600 mb-6 text-center">
                                We combine speed, accuracy, affordability, and industry-tested experience to help contractors win more projects without stress.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "100% accurate and reliable takeoffs",
                                    "Competitive pricing that beats market rates",
                                    "Fast turnaround — no missed deadlines",
                                    "24/7 customer support",
                                    "Revisions & clarifications included (based on plan)"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Turnaround Time & CTA */}
            <section className="py-20 bg-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-4 bg-primary/20 px-8 py-4 rounded-full mb-8">
                            <Clock className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold">Turnaround Time: 9-24 Hours</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Your Quote Today</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                            <Link to="/quote/" className="btn bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 font-bold flex-1">
                                <FileText className="w-5 h-5 mr-2" />
                                Get a Quick Price Quote
                            </Link>
                            <Link to="/contact/" className="btn border-2 border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-4 font-bold flex-1">
                                <Phone className="w-5 h-5 mr-2" />
                                Book a Consultation Call
                            </Link>
                        </div>
                        <div className="mt-8">
                            <Link to="/quote/" className="inline-flex items-center gap-2 bg-secondary text-dark px-6 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                                <Upload className="w-5 h-5" />
                                Upload Plan & Submit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Are revisions included in your estimating plans?",
                                a: "Yes. Depending on the plan you choose, we offer limited, free, or unlimited revisions. For small projects, revisions may be basic. While our Customized Premium Plan includes full revision without an extra charge."
                            },
                            {
                                q: "Do you charge extra for urgent or rush estimates?",
                                a: "Yes, we offer rush delivery options. For estimates needed within 9-24 hours, there may be an additional rush fee depending on the complexity and current workload. Contact us for specific rush pricing."
                            },
                            {
                                q: "How do I know which pricing plan is best for me?",
                                a: "The best plan depends on your project type, size, and frequency. Single trade contractors typically choose our Single Trade Package, while general contractors prefer our Standard or Premium packages. For multiple monthly projects, our monthly packages offer the best value."
                            },
                            {
                                q: "Do you offer discounts for repeat clients or bulk projects?",
                                a: "Yes! We offer volume discounts for repeat clients and bulk projects. Our monthly packages are specifically designed to provide better rates for contractors with ongoing estimating needs. Contact us to discuss custom pricing for large volume work."
                            },
                            {
                                q: "Can I get a custom price for a complex or industrial project?",
                                a: "Absolutely. For complex industrial projects, large-scale developments, or unique construction types, we provide custom pricing based on the specific requirements. Contact us with your project details for a personalized quote."
                            },
                            {
                                q: "What payment methods do you accept for estimation?",
                                a: "We accept all major credit cards, PayPal, bank transfers, and checks. Payment is typically due upon delivery of the completed estimate, though we can arrange different payment terms for monthly packages or large projects."
                            },
                            {
                                q: "Are your estimating rates lower than other companies?",
                                a: "Yes, we pride ourselves on offering competitive rates that beat most market prices while maintaining the highest quality standards. Our 20 years of experience allows us to work efficiently, passing the savings on to our clients."
                            },
                            {
                                q: "How much do construction estimating services typically cost?",
                                a: "Construction estimating costs vary widely based on project complexity. Simple single-trade estimates start around $150-250, while comprehensive multi-trade estimates range from $400-1,500. Monthly packages for regular clients start at $2,500 and offer the best value for ongoing work."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-lg font-bold mb-3 text-primary">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}