import React, { useEffect, useState } from "react";
import Social from "./social";

const InstaFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.REACT_APP_INSTAGRAM_KEY;
      setIsLoading(true);
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${token}`;
        const response = await fetch(url);
        const data = await response.json();

        const filteredData = data.data.filter(
          (item) => item.media_type !== "VIDEO",
        );

        setFeed(filteredData);
        console.log(filteredData);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching Instagram feed:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Social data={feed} isLoading={isLoading} error={error} />
    </>
  );
};

export default InstaFeed;
