"use strict";
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | non null assertion operator |
//* As vezes o typescript pode evidenciar um erro, baseando em um
//* valor que no momento do código ainda não está disponível
//* porém se sabemos que este valor será preenchido, podemos evitar o erro
//* utilizamos o caractere '!'
//? quando temos um elemento do DOM e queremos intentificar ele no typescript
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const p = document.getElementById('some-p');
console.log(p.innerText);
