export const getAddress = async (cep) => {
  const FIRST__URL = 'https://cep.awesomeapi.com.br/json/';
  const SECOND__URL = 'https://brasilapi.com.br/api/cep/v2/';

  try {
    const promise1 = fetch(`${FIRST__URL}${cep}`);
    const promise2 = fetch(`${SECOND__URL}${cep}`);
    const promises = [promise1, promise2];
    const result = Promise.any(promises);
    const response = await result;
    if (response.ok) {
      const data = response.json();
      return data;
    }
    throw new Error('CEP não encontrado/Requisição inválida');
  } catch (error) {
    throw new Error('CEP não encontrado', error.message);
  }
};

export const searchCep = async (cep) => {
  try {
    const getCep = await getAddress(cep);
    const { address, district, city, state } = getCep;
    const result = `${address} - ${district} - ${city} - ${state}`;

    return result;
  } catch (error) {
    return 'CEP não encontrado';
  }
};
