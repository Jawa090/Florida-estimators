import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        { title: "Why Builders Need Accurate Takeoffs", date: "Jan 10, 2024", summary: "Avoid costly overruns by starting with precision numbers." },
        { title: "Florida Construction Cost Trends 2024", date: "Feb 15, 2024", summary: "How material prices in Florida are changing this year." },
        { title: "Residential vs Commercial Estimating", date: "Mar 05, 2024", summary: "Key differences in approach and pricing strategies." },
        { title: "How to Reduce Material Waste", date: "Mar 20, 2024", summary: "Order only what you need to improve your bottom line." },
        { title: "Best Software for Construction Estimators", date: "Apr 10, 2024", summary: "Reviewing PlanSwift, Bluebeam, and others." },
        { title: "Florida Permit Costs Explained", date: "Apr 25, 2024", summary: "Budgeting for impact fees and permits in FL cities." },
        { title: "How to Read Blueprint Plans", date: "May 12, 2024", summary: "A beginner's guide to symbols and scales." },
        { title: "Estimating Checklist for Contractors", date: "May 30, 2024", summary: "Don't miss a single item on your next bid." },
    ];

    return (
        <>
            <SEO title="Construction Estimating Blog" description="Industry insights, tips, and trends for Florida contractors and builders." />
            <Hero title="Insights & News" subtitle="Stay updated with the latest in construction estimating and Florida market trends." />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-secondary flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-lg">Image Placeholder</span>
                                </div>
                                <div className="p-8">
                                    <span className="text-sm text-primary font-bold">{post.date}</span>
                                    <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="block">
                                        <h3 className="text-xl font-bold mt-2 mb-3 hover:text-primary cursor-pointer">{post.title}</h3>
                                    </Link>
                                    <p className="text-gray-600 mb-6">{post.summary}</p>
                                    <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="flex items-center text-primary font-bold hover:gap-2 transition-all">
                                        Read More <ArrowRight size={18} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
