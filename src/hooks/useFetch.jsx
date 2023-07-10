import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoint}`);
        const data = response.data;
        setData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
