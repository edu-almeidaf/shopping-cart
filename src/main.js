import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import {
  addProductsOnCart,
  addTotalPrice,
  createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const findCep = async () => {
  const cepInput = document.querySelector('.cep-input').value;
  const cartAddress = document.querySelector('.cart__address');
  const cepLength = 8;

  if (cepInput.length === cepLength) {
    const getCep = await searchCep(cepInput);
    cartAddress.innerText = getCep;
  } else {
    cartAddress.innerText = 'O CEP deve conter 8 dígitos!';
  }
};

document.querySelector('.cep-button').addEventListener('click', findCep);

const products = document.querySelector('.products');
const message = document.createElement('p');

const createMessage = (text) => {
  if (text === 'loading') {
    message.classList.add(text);
    message.innerText = 'carregando...';
    products.appendChild(message);
  }
  if (text === 'error') {
    message.classList.add(text);
    message.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.appendChild(message);
  }
};

const showProductsOnScreen = async (callback) => {
  try {
    createMessage('loading');
    const data = await callback;
    data.forEach((product) => products.appendChild(createProductElement(product)));
    products.removeChild(message);
  } catch (error) {
    products.removeChild(message);
    createMessage('error');
  }
};

const getProductsLocalStorage = async () => {
  const getIds = getSavedCartIDs();
  const cartItem = await Promise.all(getIds.map(async (id) => addProductsOnCart(id)));
  addTotalPrice();
  return cartItem;
};

window.onload = () => {
  showProductsOnScreen(fetchProductsList('computador'));
  getProductsLocalStorage();
};
