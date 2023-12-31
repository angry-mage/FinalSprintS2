import React, { useEffect, useState } from 'react';

//This custom hook will retrieve the API with all production listing information. It can be used multiple times to fetch the information for any page that will need specific information about the products being sold. Id is added as a parameter to ensure we can use it to fetch each specific item on the Description page.

const useFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, id);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  return { data, loading, error };
};

export default useFetch;