// HomePage.js

import React from "react";
import ArticlesCard from "../components/ui/ArticlesCard";
import Button from "@mui/material/Button";

const HomePage = () => {
  // Dummy data for demonstration
  const dummyData = [
    {
      id: 1,
      title: "Dummy Article 1",
      description: "This is the description of Dummy Article 1.",
      imageUrl: "https://source.unsplash.com/random/250x150",
    },
    {
      id: 2,
      title: "Dummy Article 2",
      description: "This is the description of Dummy Article 2.",
      imageUrl: "https://source.unsplash.com/random/250x150",
    },
    {
      id: 3,
      title: "Dummy Article 3",
      description: "This is the description of Dummy Article 3.",
      imageUrl: "https://source.unsplash.com/random/250x150",
    },
  ];

  return (
    <>
      <div className="wrapper home-wrapper flex col align-center">
        <h2>Latest Articles</h2>

        <div className="articles-wrapper flex" style={{ columnGap: "50px" }}>
          {dummyData.map((data) => (
            <ArticlesCard
              key={data.id}
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <Button variant="contained">
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
