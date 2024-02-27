import React, { useEffect, useState } from 'react';

function CsrfToken() {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const response = await fetch('/csrf');
                if (!response.ok) {
                    throw new Error('Failed to fetch CSRF token');
                }
                const data = await response.json();
                setCsrfToken(data.csrf_token);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        }

        fetchCsrfToken();
    }, []);

    return <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />;
}

export default CsrfToken;