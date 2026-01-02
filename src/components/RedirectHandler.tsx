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

        let shouldRedirect = false;
        let newHostname = hostname;
        let newProtocol = protocol;

        // 1. WWW to Non-WWW redirect
        if (hostname.startsWith('www.')) {
            newHostname = hostname.replace('www.', '');
            shouldRedirect = true;
        }

        // 2. HTTP to HTTPS redirect
        if (protocol === 'http:') {
            newProtocol = 'https:';
            shouldRedirect = true;
        }

        const path = location.pathname;
        let newPath = path;

        // 3. Ensure trailing slash (except for files and homepage)
        if (path !== '/' && !path.endsWith('/') && !path.includes('.')) {
            newPath = path + '/';
            shouldRedirect = true;
        }

        if (shouldRedirect) {
            window.location.replace(`${newProtocol}//${newHostname}${newPath}${location.search}`);
        }
    }, [location]);

    return null;
};

export default RedirectHandler;
