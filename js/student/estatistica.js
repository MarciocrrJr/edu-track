/**
 * estatisticas de alunos por curso e ano
 * 
 * @param {string} key - chave
 * @returns {Object} estatísticas no formato {curso: {ano: quantidade}}
 * @example
 * gerarEstatisticas('students');
 */
export function gerarEstatisticas(key) {
    try {
        const { success, data } = get(key);

        if (!success || !Array.isArray(data)) {
            throw new Error('Dados invalidos ou não encontrados.');
        }

        const estatisticas = {};

        data.forEach((aluno) => {
            const curso = aluno.curso || 'Indefinido';
            const ano = aluno.anoLetivo || 'Sem Ano';

            if (!estatisticas[curso]) estatisticas[curso] = {};
            if (!estatisticas[curso][ano]) estatisticas[curso][ano] = 0;

            estatisticas[curso][ano]++;
        });

        return estatisticas;

    } catch (error) {
        console.error("Erro ao gerar estatísticas:", error.message);
        return {};
    }
}
