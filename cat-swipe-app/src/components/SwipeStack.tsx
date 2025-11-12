import React, { useState, useEffect } from 'react';
import CatCard from './CatCard';
import useCatImages from '../hooks/useCatImages';
import useSwipeGestures from '../hooks/useSwipeGestures';
import { CatImage, SwipeDirection } from '../types';


const SwipeStack = () => {
    const { catImages, loading } = useCatImages();
    const [likedCats, setLikedCats] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [swipeDirection, setSwipeDirection] = useState<SwipeDirection | null>(null);

    const handleSwipe = (direction: SwipeDirection) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setSwipeDirection(direction);

        if (direction === 'right' && catImages[currentIndex]) {
            setLikedCats((prev) => [...prev, catImages[currentIndex]]);
        }

        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsAnimating(false);
            setSwipeDirection(null);
        }, 300);
    };

    const { bind } = useSwipeGestures(handleSwipe);
    
    useEffect(() => {
        if (currentIndex >= catImages.length) {
            console.log(`Finished that's all for the kitties ${likedCats.length} `)
        }
    }, [currentIndex, catImages.length, likedCats.length]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (currentIndex >= catImages.length) {
        return  (
     <div className="summary fade-in">
                <h2>🐱 You're all done! 🐱</h2>
                <p>You liked <span className="liked-count">{likedCats.length}</span> cats!</p>
                {likedCats.length > 0 && (
                    <div className="liked-cats-grid">
                        {likedCats.map((catUrl, index) => (
                            <img 
                                key={index} 
                                src={catUrl} 
                                alt={`Liked cat ${index + 1}`} 
                                className="liked-cat-thumbnail"
                                style={{animationDelay: `${index * 100}ms`}}
                            />
                        ))}
                    </div>
                )}
                <button 
                    className="restart-button"
                    onClick={() => {
                        setCurrentIndex(0);
                        setLikedCats([]);
                    }}
                >
                    Start Over
                </button>
            </div>
        )
    }

    const currentCat = catImages[currentIndex];
    const nextCat = catImages[currentIndex + 1];

    if (!currentCat)
    {
        return <div className="no-cats">Come back later, kitties are on the way! 🚀</div>
    }

    return (
           <div className="swipe-container">
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${((currentIndex) / catImages.length) * 100}%` }}
                ></div>
            </div>
            
            <div className="card-stack">
                {/* Next card (background) */}
                {nextCat && (
                    <div className="cat-card-wrapper next-card">
                        <CatCard
                            imageUrl={nextCat}
                            onSwipe={() => {}} // Disabled for background card
                            disabled={true}
                        />
                    </div>
                )}
                
                {/* Current card (foreground) */}
                <div 
                    className={`cat-card-wrapper current-card ${
                        isAnimating ? `swipe-${swipeDirection}` : ''
                    }`}
                    {...bind()}
                >
                    <CatCard
                        imageUrl={currentCat}
                        onSwipe={(direction: 'like' | 'dislike') => handleSwipe(direction === 'like' ? 'right' : 'left')}
                        disabled={isAnimating}
                    />
                </div>
            </div>
            
            <div className="swipe-hints">
                <div className="hint left">👈 Nope</div>
                <div className="hint right">👉 Like</div>
            </div>
        </div>
    );
};

export default SwipeStack;

