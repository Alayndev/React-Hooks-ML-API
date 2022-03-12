import React from "react";

type SearchFormProps = {
  onSearch: (product: string) => any;
};

function SearchForm(props: SearchFormProps) {
  console.log("render SearchForm");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = e.target.product.value;

    props.onSearch(product);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          name="product"
          type="text"
          className="search-input"
          placeholder=" Buscar productos, marcas y más..."
          required
        />
        <button className="search-button">Buscar</button>
      </form>
    </>
  );
}

export { SearchForm };
