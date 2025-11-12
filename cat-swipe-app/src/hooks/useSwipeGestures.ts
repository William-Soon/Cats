import { useEffect, useState, useCallback } from 'react';
import {SwipeDirection} from '../types';

const useSwipeGestures = (onSwipe: (direction: SwipeDirection) => void) => {
    const bind = useCallback(() =>({
        onTouchStart: (e:React.TouchEvent) => {
            const touch = e.touches[0];
            const startX = touch.clientX;

            const handleTouchEnd = (endEvent:TouchEvent) => {
                const endTouch = endEvent.changedTouches[0];
                const endX = endTouch.clientX;
                const deltaX = endX -startX;

                if (Math.abs(deltaX) > 50)
                {
                    onSwipe(deltaX > 0 ? 'right' : 'left');
                }

                document.removeEventListener('touchend', handleTouchEnd);
            };

            document.addEventListener('touchend', handleTouchEnd);
            
        },

        onMouseDown: (e:React.MouseEvent) => {
            const startX = e.clientX;

            const handleMouseUp = (endEvent: MouseEvent) => {
                const deltaX = endEvent.clientX - startX;

                if (Math.abs(deltaX) > 50) {
                    onSwipe(deltaX > 0 ? 'right' : 'left');
                }

                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mouseup', handleMouseUp);
        }
    }), [onSwipe]);

    return {bind};
}

export default useSwipeGestures;