import { useState, useEffect } from 'react';
import { getPageBySlug, getPostBySlug } from '../services/wordpress';

interface SEOData {
    title: string;
    metaDesc: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    keywords?: string;
    robots?: string;
}

export const usePageSEO = (slug: string, type: 'page' | 'post' = 'page') => {
    const [seoData, setSeoData] = useState<SEOData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSEO = async () => {
            setLoading(true);
            try {
                const data = type === 'page' ? await getPageBySlug(slug) : await getPostBySlug(slug);

                if (data && data.yoast_head_json) {
                    const yoast = data.yoast_head_json;

                    // Helper to clean up canonical URL
                    const getCanonical = () => {
                        const currentHost = window.location.hostname;
                        const isLocalhost = currentHost === 'localhost' || currentHost === '127.0.0.1';

                        // If localhost, stick to localhost
                        if (isLocalhost) {
                            return window.location.href;
                        }

                        // If production, ensure it matches the production domain (without CMS prefix)
                        // The CMS might return cms.estimatingflorida.com, we want estimatingflorida.com
                        let canonical = yoast.canonical || window.location.href;
                        return canonical.replace('cms.estimatingflorida.com', 'estimatingflorida.com');
                    };

                    // Format robots string
                    const getRobotsString = () => {
                        if (yoast.robots && typeof yoast.robots === 'object') {
                            return Object.values(yoast.robots).filter(Boolean).join(', ');
                        }
                        return '';
                    };

                    setSeoData({
                        title: yoast.title || data.title.rendered,
                        metaDesc: yoast.description || '',
                        canonical: getCanonical(),
                        ogTitle: yoast.og_title || yoast.title || '',
                        ogDescription: yoast.og_description || yoast.description || '',
                        ogImage: yoast.og_image?.[0]?.url || '',
                        keywords: yoast.focuskw || '',
                        robots: getRobotsString()
                    });
                }
            } catch (error) {
                console.error('Error fetching SEO data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchSEO();
        }
    }, [slug, type]);

    return { seoData, loading };
};
