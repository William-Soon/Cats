import React, { useState, useEffect } from 'react';
import SwipeStack from './components/SwipeStack';
import Summary from './components/Summary';
import  useCatImages  from './hooks/useCatImages';

const App: React.FC = () => {
    const { catImages, loading } = useCatImages();
    const [likedCats, setLikedCats] = useState<string[]>([]);
    const [showSummary, setShowSummary] = useState<boolean>(false);

    const handleLike = (imageUrl: string) => {
        setLikedCats((prev) => [...prev, imageUrl]);
    };

    const handleDislike = (imageUrl: string) => {
        // Optionally handle dislike logic
    };

    const handleEndSwipe = () => {
        if (catImages.length === 0) {
            setShowSummary(true);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            {!showSummary ? (
                <SwipeStack

                />
            ) : (
                <Summary likedCats={likedCats} />
            )}
        </div>
    );
};

export default App;