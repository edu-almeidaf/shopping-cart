import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');
const loading = document.createElement('p');

const loadingMessage = () => {
  loading.classList.add('loading');
  loading.innerText = 'carregando...';
  products.appendChild(loading);
};

const showProductsOnScreen = async (callback) => {
  loadingMessage();
  const data = await callback;

  data.forEach((product) => products.appendChild(createProductElement(product)));
  products.removeChild(loading);
};

window.onload = () => {
  showProductsOnScreen(fetchProductsList('computador'));
};
