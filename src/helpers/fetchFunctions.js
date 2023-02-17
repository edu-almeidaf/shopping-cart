const URL_PRODUCTS = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const URL_ID = 'https://api.mercadolibre.com/items/';

export const fetchProduct = async (searchTerm) => {
  if (!searchTerm) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${URL_ID}${searchTerm}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (searchTerm) => {
  if (!searchTerm) {
    throw new Error('Termo de busca não informado');
  }

  const response = await fetch(`${URL_PRODUCTS}${searchTerm}`);
  const data = await response.json();
  return data.results;
};
