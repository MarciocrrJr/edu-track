import {  get, save } from "../storage/storage.js";

/**
 * Adiciona um aluno a lista de alunos
 * 
 * Recebe os dados do estudante
 * 
 * @author victor <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (04/09/2025)
 * @param {any} student - Valor a ser salvo
 * @returns {{ success: boolean, data: [Object] }} Status da operação e valor encontrado
 * @throws {Error} Caso o valor "student" seja vazio
 * 
 * @example
 * addStudent({name: 'Victor', idade: 18}); 
 * // { success: true, data: [{name: 'Victor', idade: 18}] }
 */

export function addStudent(student) {
    if(student === null) {
        throw new Error('Valor inválido.')
    }

    let students;
    try {
        const result = get('students');
        if(result.success) {
            students = result.data;
        }
    } catch(err) {
        students = [];
    }

    students.push(student);

    save('students', students);

    return {success: true, data: students}
}

/**
 * Busca todos os alunos cadastrados
 * 
 * @author victor <victor242206@gmail.com>
 * @version 1.0.0 
 * @since 1.0.0 (04/09/2025) 
 * 
 * @returns {{ success: boolean, data: [Object] }}
 * 
 * @example 
 * getStudents()
 * // {success: true, data: [{nome: 'Victor', idade: 18}]}
**/
export function getStudents() {
    let students;

    try {
        const result = get('students');
        if(result.success) {
            students = result.data;
        }
    } catch (err) {
        students = [];
    }

    return {success: true, data: students};
}