/**
 * Busca alunos pelo nome incompleto
 * 
 * @param {string} key - chave
 * @param {string} nome - nome a ser buscado
 * @returns {Array} lista dos alunos
 * @example
 * buscarAlunoPorNome('students', 'mar');
 */
export function buscarAlunoPorNome(key, nome = '') {
    try {
        const { success, data } = get(key);

        if (!success || !Array.isArray(data)) {
            throw new Error('Dados invalidos ou não encontrados.');
        }

        const nomemin = nome.toLowerCase();

        return data.filter((aluno) => 
            aluno.nome.toLowerCase().includes(nomemin)
        );

    } catch (error) {
        console.error("Erro ao buscar aluno:", error.message);
        return [];
    }
}
