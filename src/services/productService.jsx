export async function getProductList(searchTerm) {
  const fetchedData = await fetch(
    `http://localhost:8000/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  const data = await fetchedData.json();

  return data;
}

export async function getProduct(id) {
  const fetchedData = await fetch(`http://localhost:8000/444/products/${id}`);
  const data = await fetchedData.json();
  return data;
}

export async function getFeaturedList() {
  const fetchedData = await fetch(
    "http://localhost:8000/444/featured_products"
  );
  const data = await fetchedData.json();
  return data;
}
