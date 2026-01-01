import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    robots?: string;
}

export default function SEO({ title, description, canonical, keywords, robots }: SEOProps) {
    const siteTitle = "Florida Estimator";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {robots && <meta name="robots" content={robots} />}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta name="geo.region" content="US-FL" />
            <meta name="geo.placename" content="Florida" />
        </Helmet>
    );
}
