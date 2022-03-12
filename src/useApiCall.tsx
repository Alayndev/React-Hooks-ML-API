import { useState, useEffect } from "react";

function useApiCall(wordToSearch: string) {
  const [results, setResults] = useState([]);

  const fetchAPI = async (wordToSearch) => {
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + wordToSearch
    );
    const results = await res.json();

    setResults(results.results);
  };

  useEffect(() => {
    fetchAPI(wordToSearch);
  }, [wordToSearch]);

  return results;
}

export { useApiCall };
