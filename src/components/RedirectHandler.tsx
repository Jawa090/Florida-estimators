import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectHandler = () => {
    const location = useLocation();

    useEffect(() => {
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;
        const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

        // Skip all redirects on localhost
        if (isLocalhost) return;

        // 1. HTTP to HTTPS redirect
        if (protocol === 'http:') {
            window.location.href = `https://${hostname}${location.pathname}${location.search}`;
            return;
        }

        // 2. WWW to Non-WWW redirect
        if (hostname.startsWith('www.')) {
            const newHostname = hostname.replace('www.', '');
            window.location.href = `https://${newHostname}${location.pathname}${location.search}`;
            return;
        }

        // 3. Ensure trailing slash (except for files and homepage)
        const path = location.pathname;
        if (path !== '/' && !path.endsWith('/') && !path.includes('.')) {
            window.location.href = `${protocol}//${hostname}${path}/${location.search}`;
            return;
        }
    }, [location]);

    return null;
};

export default RedirectHandler;
