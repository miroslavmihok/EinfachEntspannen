import React, { useEffect, useState } from "react";
import Social from "./social";

const InstaFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=IGQWRPcU16UEpyMDNKUUhDeEcxcXVVRVljb3k0XzdKZAHlWSnNGTUtOMm93UGpidmIwZAEgtT1BiMlE5UWNGZAE1aaThPSUY2eEh5Y1MySnVLUzZAuZAEZAUQXVBWlpwNmZAKeDRNcmk2RWZArb3A1UDFpaEFtX0Q5eDl1c0kZD`;
        const response = await fetch(url);
        const data = await response.json();

        const filteredData = data.data.filter(
          (item) => item.media_type !== "VIDEO",
        );

        setFeed(filteredData);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Social data={feed} />
    </>
  );
};

export default InstaFeed;
