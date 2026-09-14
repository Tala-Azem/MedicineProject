import { useEffect, useState } from "react";

export function useRemoteData(fetchDataFunction, dependencies) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(
    () => {
      async function fetchDataAsync() {
        setIsFetching(true);
        try {
          const response = await fetchDataFunction();
          setData(response);
          console.log(response);
        } catch (error) {
          setError("Could not fetch data!");
        }
        setIsFetching(false);
      }

      fetchDataAsync();
    },
    dependencies ? [...dependencies, shouldRefresh] : [shouldRefresh]
  );

  function refreshData() {
    setShouldRefresh(!shouldRefresh);
  }

  return { data, isFetching, error, shouldRefresh, refreshData };
}
