import React from "react";
import ArticlesCard from "../components/ui/ArticlesCard";
import Button from "@mui/material/Button";

const HomePage = () => {
  const dummyData = [
    {
      id: 1,
      title: "TechCrunch",
      description: "TechCrunch is an American company",
      imageUrl: "https://techcrunch.com/wp-content/uploads/2018/04/tc-logo-2018-square-reverse2x.png",
    },
    {
      id: 2,
      title: "MyFitnessPal blog",
      description: "MyFitnessPal is a fitness app and blog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-c6q5q3EMQGj55DYFW9-o4r9Liuzoge6wHA1lXdZo30zc9bJk2QqjrJbgDuv5oNgmss&usqp=CAU",
    },
    {
      id: 3,
      title: "A Cup of Jo",
      description: "Cup of Jo is a New York-based lifestyle",
      imageUrl: "https://cupofjo.com/wp-content/uploads/2015/05/jo_homepage.jpg",
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
