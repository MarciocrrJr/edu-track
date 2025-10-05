 * Filtra com base no nome e no curso.
 *
 * @param {string} key - chave para obter os dados
 * @param {string} [nome=''] - pesquisa para o nome
 * @param {string} [curso=''] - pesquisa para o curso
 * @returns {Array} contem os objetos filtrados
 * @example
 * filtrarNomeCurso('students', 'Marcio', 'ADS');
 * // [{nome: 'Marcio', curso: 'ADS'}]
 * 
 */

export function filtrarNomeCurso(key, nome = '', curso = '') {
    try {
        // pega os dados a partir da chave
        const { success, data } = get(key);

        // Valida se a obtenção dos dados foi bem-sucedida
        if (!success || !Array.isArray(data)) {
            throw new Error('Dados inválidos ou não encontrados na chave fornecida.');
        }

        // Converte as letras para minúsculas
        const nomemin = nome.toLowerCase();
        const cursomin = curso.toLowerCase();

        // Filtra os dados
        const filtrados = data.filter((item) => {
            const nomeValido = nomemin === '' || item.nome.toLowerCase().includes(nomemin);
            const cursoValido = cursomin === '' || item.curso.toLowerCase().includes(cursomin);

            // Um item só será adicionado se as condições (nome e curso) forem verdadeiras
            return nomeValido && cursoValido;
        });

        // Retorna o valor
        return filtrados;

    } catch (error) {
        // Captura qualquer erro que ocorra no bloco `try`
        console.error("Erro ao filtrar dados:", error.message);
        return [];
    }
}
