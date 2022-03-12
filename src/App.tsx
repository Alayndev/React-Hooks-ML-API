import React, { useState } from "react";
import { useApiCall } from "./useApiCall";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

function App() {
  const [product, setProduct] = useState("");

  const setProductToSearch = (product: string) => {
    setProduct(product);
  };

  const results = useApiCall(product);
  console.log(results, "results");

  return (
    <>
      <header className="header">
        <div className="header-content">
          <SearchForm onSearch={setProductToSearch}></SearchForm>
        </div>
      </header>

      <div className="container">
        <h3 className="results-title">
          Resultados:
          <span className="results-count">{results.length}</span>
        </h3>

        <div className="results">
          {results.map((r) => (
            <SearchResultItem
              key={r.id}
              title={r.title}
              price={r.price}
              img={r.thumbnail}
              link={r.permalink}
              stock={r.available_quantity}
              sold={r.sold_quantity}
              condition={r.condition}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export { App };
