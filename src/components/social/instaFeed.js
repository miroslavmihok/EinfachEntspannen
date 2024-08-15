import React, { useEffect, useState } from "react";
import Social from "./social";

const InstaFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feed, setFeed] = useState([]);

  const refreshToken = async () => {
    try {
      const token = process.env.REACT_APP_INSTAGRAM_KEY;
      const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
      const response = await fetch(refreshUrl);
      const data = await response.json();

      if (data.access_token) {
        return data.access_token;
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      setError("Error refreshing Instagram token:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let token = process.env.REACT_APP_INSTAGRAM_KEY;

      const refreshedToken = await refreshToken();
      if (refreshedToken) {
        token = refreshedToken;
      }

      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${token}`;
        const response = await fetch(url);
        const data = await response.json();

        const filteredData = data.data.filter(
          (item) => item.media_type !== "VIDEO",
        );

        setFeed(filteredData);
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
