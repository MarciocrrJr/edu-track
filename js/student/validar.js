/**
 * Valida os campos do formulário de aluno
 * 
 * @param {Object} aluno - dados do aluno
 * @returns {Object} { valido: boolean, erros: Object }
 * @example
 * validarAluno({
 *   nome: 'Marcio Correa',
 *   registroMatricula: '20251234',
 *   telefone: '11999999999',
 *   anoLetivo: 2025,
 *   email: 'marcio@mail.com',
 *   cpf: '12345678910',
 *   instituicao: 'Fatec Itu',
 *   curso: 'ADS'
 * });
 */
export function validarAluno(aluno) {
    const erros = {};

    // Nome
    if (!aluno.nome || aluno.nome.trim().length < 3) {
        erros.nome = 'O nome deve ter pelo menos 3 caracteres.';
    }

    // Registro de matrícula
    if (!aluno.registroMatricula || aluno.registroMatricula.trim().length < 3) {
        erros.registroMatricula = 'Registro de matrícula inválido.';
    }

    // Telefone
    if (!/^[0-9]{8,}$/.test(aluno.telefone || '')) {
        erros.telefone = 'Telefone inválido.';
    }

    // Ano letivo
    if (!aluno.anoLetivo || isNaN(aluno.anoLetivo)) {
        erros.anoLetivo = 'Ano letivo deve ser um número.';
    }

    // Email
    if (!aluno.email || !/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(aluno.email)) {
        erros.email = 'Email inválido.';
    }

    // CPF
    if (!/^[0-9]{11}$/.test(aluno.cpf || '')) {
        erros.cpf = 'CPF deve ter 11 números.';
    }

    // Instituição
    if (!aluno.instituicao || aluno.instituicao.trim() === '') {
        erros.instituicao = 'Instituição é obrigatória.';
    }

    // Curso
    if (!aluno.curso || aluno.curso.trim() === '') {
        erros.curso = 'Curso é obrigatório.';
    }

    return {
        valido: Object.keys(erros).length === 0,
        erros
    };
}
