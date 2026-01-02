import SEO from './SEO';
import { usePageSEO } from '../hooks/usePageSEO';

interface PageSEOProps {
    slug: string; // The WordPress slug
    fallbackTitle: string;
    fallbackDescription: string;
    type?: 'page' | 'post';
}

export default function PageSEO({ slug, fallbackTitle, fallbackDescription, type = 'page' }: PageSEOProps) {
    const { seoData, loading } = usePageSEO(slug, type);

    // If loading or no data, show fallback
    if (loading || !seoData) {
        return (
            <SEO
                title={fallbackTitle}
                description={fallbackDescription}
            />
        );
    }

    // Show dynamic data
    return (
        <SEO
            title={seoData.title}
            description={seoData.metaDesc || fallbackDescription}
            canonical={seoData.canonical}
            keywords={seoData.keywords}
            robots={seoData.robots}
        />
    );
}
