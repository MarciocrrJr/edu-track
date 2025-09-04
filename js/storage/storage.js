
/**
 * Salva o Valor no LocalStorage, e retorna um Status e uma mensagem.
 * 
 * Recebe valores de identificação e valor
 * 
 * @author victor <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (02/09/2025)
 * @param {string} key Identificador do Valor a ser salvo
 * @param {any} value Valor a ser salvo (Será convertido em JSON)
 * 
 * @throws {Error} Se o valor da 'key' não for um texto
 * @throws {Error} Se o 'value' for um valor vazio
 * 
 * @returns {{ success: boolean, message: string }} Status da Operação e Messagem 
 * 
 * @example
 * save('name', 'Victor')
 * {success: true, message: 'Valor salvo com sucesso'}
**/
export function save(key, value) {
    // Validação do Tipo de Identificador
    if(key.trim() === '') {
        throw new Error('Identificador inválido.');
    }
    // Verifica se o valor é vazio
    if(value === undefined) {
        throw new Error('Valor inválido.')
    }

    // Salva o Item no Local Storage
    localStorage.setItem(key, JSON.stringify(value));

    // Busca a chave do valor
    let storage = localStorage.getItem(key);

    // Retorna
    return storage === JSON.stringify(value)
        ? {success: true, message: 'Valor salvo com sucesso!'} 
        : {success: false, message: 'Valor não foi salvo!'};
}

/**
 * Busca um valor do LocalStorage pelo identificador
 * 
 * Recebe um identificador
 * @author victor <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (04/09/2025)
 * @param {string} key - Identificador do valor a ser buscado
 * @returns {{ success: boolean, data: any }} Status da operação e valor encontrado
 * @throws {Error} Caso a chave seja inválida ou não exista valor
 * 
 * @example
 * get('name'); 
 * // { success: true, data: 'Victor' }
 */
export function get(key) {
    // Validação do Tipo de valor
    if (typeof key !== 'string' || key.trim() === '') {
        throw new Error('Identificador inválido.');
    }

    // Busca os valores
    const storage = localStorage.getItem(key);

    // Verifica o tamanho do valor buscado, se for menor ou igual a 0, retorna um erro
    if (storage === null || storage.length === 0) {
        throw new Error('Nenhum valor encontrado.');
    }

    // Converte JSON para valor original
    const data = JSON.parse(storage);

    // Retorno
    return { success: true, data };
}

