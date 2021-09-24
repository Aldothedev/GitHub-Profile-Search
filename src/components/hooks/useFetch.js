import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(query) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const URL = `https://api.github.com/users/${query}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setError(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(true);

        // Remove the error
        setTimeout(() => {
          setError(false);
        }, 1000);

        console.log(err);
      });
  }, [query, URL]);

  return [data, error, setError];
}
