// ArticlesCard.js

import React from "react";
import ModalBlog from "../Modal";
const ArticlesCard = ({ title, description, imageUrl }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
    <div className="article-card"  style={{cursor: "pointer"}} onClick={handleOpen}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <ModalBlog open={open} img={imageUrl} title={title} description={description} close={handleOpen}/>
    </>
  );
};

export default ArticlesCard;
