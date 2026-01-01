

const WP_API_BASE = 'https://cms.estimatingflorida.com/wp-json/wp/v2';

export interface WPPage {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    yoast_head_json?: any;
}

export interface WPPost {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    yoast_head_json?: any;
}

export const getPageBySlug = async (slug: string): Promise<WPPage | null> => {
    try {
        const response = await fetch(`${WP_API_BASE}/pages?slug=${slug}`);
        const data = await response.json();
        return data[0] || null;
    } catch (error) {
        console.error(`Error fetching page ${slug}:`, error);
        return null;
    }
};

export const getPostBySlug = async (slug: string): Promise<WPPost | null> => {
    try {
        const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}`);
        const data = await response.json();
        return data[0] || null;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
};

export const getAllPosts = async (): Promise<WPPost[]> => {
    try {
        const response = await fetch(`${WP_API_BASE}/posts?per_page=100`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};
