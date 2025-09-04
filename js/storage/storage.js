
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
    if(key.trim() === '') {
        throw new Error('Tipo de Identificador inválido.');
    }
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