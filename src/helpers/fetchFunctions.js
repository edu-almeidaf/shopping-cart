const URL_PRODUCTS = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const URL_ID = 'https://api.mercadolibre.com/items/';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (searchTerm) => {
  if (!searchTerm) {
    throw new Error('Termo de busca não informado');
  }

  const response = await fetch(`${URL_PRODUCTS}${searchTerm}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};
