interface HeroProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

export default function Hero({ title, subtitle, bgImage }: HeroProps) {
    return (
        <div className="relative bg-dark text-white py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                {bgImage ? (
                    <img src={bgImage} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-primary to-dark" />
                )}
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        </div>
    );
}
