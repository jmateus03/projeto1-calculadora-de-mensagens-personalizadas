//Etapa 1
const nome = "Mateus"
let idade = 25
let cidade = "São Paulo"
let profissao = "Desenvolvedor de Sistemas"
let anoatual = 2025
//Etapa 2
let salario = 3460.00
let bonus = 400.00
let totalano = salario + bonus
//Etapa 3
alert(` 
========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento: ${anoatual - idade}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${totalano}
Total ano: U$${totalano * 12}
Total anual: U$${totalano * 12 * 2}
=========================================

`)

