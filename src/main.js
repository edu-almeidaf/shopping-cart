import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const showProductsOnScreen = async (callback) => {
  const data = await callback;
  console.log(data);

  const products = document.querySelector('.products');
  console.log(products);

  data.forEach((product) => products.appendChild(createProductElement(product)));

  return products;
};

window.onload = () => {
  showProductsOnScreen(fetchProductsList('computador'));
};
