// ArticlesCard.js

import React from "react";

const ArticlesCard = ({ title, description, imageUrl }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ArticlesCard;
