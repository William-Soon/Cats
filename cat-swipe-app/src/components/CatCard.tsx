import React, { useState } from 'react';

interface CatCardProps {
    imageUrl: string;
    onSwipe: (direction: 'like' | 'dislike') => void;
    disabled?: boolean;
}

const CatCard: React.FC<CatCardProps> = ({ imageUrl, onSwipe, disabled = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleSwipeRight = () => {
        if (!disabled) onSwipe('like');
    };

    const handleSwipeLeft = () => {
        if (!disabled) onSwipe('dislike');
    };

    return (
        <div className={`cat-card ${disabled ? 'disabled' : ''}`}>
            <div className="image-container">
                {!imageLoaded && !imageError && (
                    <div className="image-placeholder">
                        <div className="loading-spinner small"></div>
                    </div>
                )}
                
                <img 
                    src={imageUrl} 
                    alt="Adorable cat" 
                    className={`cat-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    style={{ display: imageError ? 'none' : 'block' }}
                />
                
                {imageError && (
                    <div className="error-placeholder">
                        <p>🐱 Oops! This kitty is hiding</p>
                    </div>
                )}
            </div>
            
            {!disabled && (
                <div className="action-buttons">
                    <button 
                        className="swipe-button dislike" 
                        onClick={handleSwipeLeft}
                        disabled={disabled}
                    >
                        <span className="button-icon">❌</span>
                        <span className="button-text">Nope</span>
                    </button>
                    <button 
                        className="swipe-button like" 
                        onClick={handleSwipeRight}
                        disabled={disabled}
                    >
                        <span className="button-icon">❤️</span>
                        <span className="button-text">Like</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CatCard;