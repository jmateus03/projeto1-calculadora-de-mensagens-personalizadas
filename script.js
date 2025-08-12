//Etapa 1
const nome = "Mateus"
let idade = 25
let cidade = "São Paulo"
let profissao = "Desenvolvedor de Sistemas"
let anoatual = 2025
const anoNascimento = anoatual - idade

//Etapa 2
let salario = 3460.00
let bonus = 400.00
let mensal = salario + bonus
let totalano = (salario + bonus) * 12
let totalanual = totalano * 2
//Etapa 3

alert(` 
========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento: ${anoNascimento}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${mensal}
Total ano: U$${totalano}
Total anual: U$${totalanual}
=========================================

`)


