import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // console.log("fetch error");
        } else {
          setError(error.message);
          setLoading(false);
          console.log("fetch error");
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
