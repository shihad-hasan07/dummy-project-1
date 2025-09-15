import React, { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default Home;
