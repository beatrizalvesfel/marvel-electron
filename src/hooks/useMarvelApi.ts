/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import md5 from 'md5';

const publicKey = 'a8b4dd1cb60ac478ec92252045119af1';
const privateKey = 'ffd3b4eee1ef1b448fdf33de245ba29cdd5e3318';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const useMarvelAPI = (endpoint: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
                console.log('Fetching URL:', url);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                console.log('API Response:', result);

                if (result.code === 200) {
                    setData(result.data.results);
                } else {
                    throw new Error(result.message || 'Unknown error occurred');
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useMarvelAPI;