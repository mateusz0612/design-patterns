import { useState, useEffect, useCallback } from "react";

function useFetch<T>(url: string) {
  const [state, setState] = useState({
    data: {} as T,
    isLoading: true,
    isError: false,
  });

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      setState({
        data: {} as T,
        isLoading: false,
        isError: true,
      });
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return state;
}

export default useFetch;
