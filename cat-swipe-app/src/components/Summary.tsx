import React from 'react';

interface SummaryProps {
  likedCats: string[];
}

const Summary: React.FC<SummaryProps> = ({ likedCats }) => {
  return (
    <div className="summary">
      <h2>Liked Cats</h2>
      <p>You liked {likedCats.length} cats!</p>
      <div className="liked-cats">
        {likedCats.map((catUrl, index) => (
          <img key={index} src={catUrl} alt={`Liked Cat ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Summary;