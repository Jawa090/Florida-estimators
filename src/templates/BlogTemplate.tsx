import { useParams } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BlogTemplate() {
    const { id } = useParams();
    // In a real app, fetch post by ID. Here we just use the ID as title for demo.
    const title = id ? id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : "Blog Post";

    return (
        <>
            <SEO title={title} description={`Read our latest article: ${title}`} />
            <Hero title={title} subtitle="Construction Insights" />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link to="/blog" className="flex items-center text-primary mb-8 font-semibold"><ArrowLeft size={18} className="mr-2" /> Back to Blog</Link>

                    <div className="prose lg:prose-xl">
                        <p className="lead text-xl text-gray-600 mb-6">
                            This is a placeholder for the blog post content. In a production environment, this would be populated from a CMS or markdown file.
                        </p>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3>Key Takeaways</h3>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Accuracy is paramount in estimating.</li>
                            <li>Florida has specific building codes that affect costs.</li>
                            <li>Using professional software reduces errors.</li>
                        </ul>
                        <p>
                            Contact Florida Estimator today to learn more about how we can help you with your next project.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
