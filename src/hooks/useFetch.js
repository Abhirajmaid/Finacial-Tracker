import { useEffect, useState } from "react";

// const APIKEY = process.env.REACT_GIPHY_API;
// const API_URL = `https://newsapi.org/v2/everything?q=usa&apiKey=${APIKEY}`;

// const APIKEY = import.meta.env.REACT_GIPHY_API

const APIKEY = "kUlmmZs5a3hx2aTEtLTd6IWhlFtKSLxT";
const useFetch = ({ text }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${text
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://media.giphy.com/media/7BW9U2cJPQZ0s/giphy.gif");
    }
  };

  useEffect(() => {
    if (text) fetchGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return gifUrl;
};

export default useFetch;
