import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Testa se fetchProduct chama a fetch passando o argumento', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('fetchProduct com o argumento "MLB1405519561" é igual ao objeto product', async () => {
    const data = await fetchProduct('MLB1405519561');
    expect(data).toStrictEqual(product);
  });

  it('Ao chamar a função fetchProduct sem argumento, retorna um erro com uma mensagem', async () => {
    try {
      await fetchProduct();
    } catch (error) {
      expect(error.message).toBe('ID não informado');
    }
  });
});
