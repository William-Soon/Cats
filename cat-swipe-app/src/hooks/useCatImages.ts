import { useEffect, useState } from 'react';
import { fetchCatImages } from '../services/cataasApi';

const useCatImages = () => {
    const [catImages, setCatImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCatImages = async () => {
            try {
                const images = Array.from({length: 10}, (_,i) => `https://cataas.com/cat?${Date.now()-i}&width=400&height=400`);
                setCatImages(images);
            } catch (err) {
                setError('Failed to load cat images');
            } finally {
                setLoading(false);
            }
        };

        loadCatImages();
    }, []);

    return { catImages, loading, error };
};

export default useCatImages;