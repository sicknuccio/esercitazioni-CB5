import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setData(null);
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) =>
        res.json().then((json_data) => {
          setData(json_data);
        })
      )
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, refetch: fetchData };
}
