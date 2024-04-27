// CardSkeleton.js
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CardSkeleton = ({ animation }) => {
  return (
    <div className="article-card">
      <Skeleton variant="rectangular" width={250} height={150} animation={animation} />
      <Skeleton variant="text" width={200} animation={animation} />
      <Skeleton variant="text" width={150} animation={animation} />
    </div>
  );
};

export default CardSkeleton;
