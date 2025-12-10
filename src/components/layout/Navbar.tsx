import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { services } from '../../data/services';
import { trades } from '../../data/services';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    return (
        <header className={clsx("fixed w-full z-50 transition-all duration-300", scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4")}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold font-heading text-primary">
                    Florida<span className="text-dark">Estimator</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <Link to="/" className="text-dark hover:text-primary font-medium">Home</Link>
                    <Link to="/about" className="text-dark hover:text-primary font-medium">About</Link>
                    <div className="relative group">
                        <Link to="/services" className="text-dark hover:text-primary font-medium flex items-center">Services</Link>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md p-4 hidden group-hover:block border-t-4 border-primary">
                            {services.map(s => (
                                <Link key={s.id} to={s.path} className="block py-2 text-sm text-gray-600 hover:text-primary border-b border-gray-100 last:border-0">{s.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="text-dark hover:text-primary font-medium cursor-pointer">Trades</span>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md p-4 hidden group-hover:block border-t-4 border-primary">
                            {trades.map(t => (
                                <Link key={t.id} to={t.path} className="block py-2 text-sm text-gray-600 hover:text-primary border-b border-gray-100 last:border-0">{t.title}</Link>
                            ))}
                        </div>
                    </div>
                    <Link to="/locations" className="text-dark hover:text-primary font-medium">Locations</Link>
                    <Link to="/sample" className="text-dark hover:text-primary font-medium">Samples</Link>
                    <Link to="/blog" className="text-dark hover:text-primary font-medium">Blog</Link>
                    <Link to="/contact" className="text-dark hover:text-primary font-medium">Contact</Link>
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <Link to="/quote" className="btn btn-primary text-sm flex items-center gap-2">
                        <FileText size={18} /> Get a Quote
                    </Link>
                    <a href="tel:+13215550123" className="text-dark hover:text-primary font-bold flex items-center gap-2">
                        <Phone size={20} /> (321) 555-0123
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-dark">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4">
                    <Link to="/" className="text-dark hover:text-primary font-medium">Home</Link>
                    <Link to="/about" className="text-dark hover:text-primary font-medium">About</Link>
                    <Link to="/services" className="text-dark hover:text-primary font-medium">Services</Link>
                    <Link to="/trades" className="text-dark hover:text-primary font-medium">Trades</Link>
                    <Link to="/locations" className="text-dark hover:text-primary font-medium">Locations</Link>
                    <Link to="/sample" className="text-dark hover:text-primary font-medium">Samples</Link>
                    <Link to="/blog" className="text-dark hover:text-primary font-medium">Blog</Link>
                    <Link to="/contact" className="text-dark hover:text-primary font-medium">Contact</Link>
                    <Link to="/quote" className="btn btn-primary w-full text-center">Get a Quote</Link>
                </div>
            )}
        </header>
    );
}
