import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let telefone1 = new Telefone()
telefone1.ddd = "12"
telefone1.numero = "991912428"
cliente.telefones.push(telefone1)

let telefone2 = new Telefone()
telefone2.ddd = "12"
telefone2.numero = "992924246"
cliente.telefones.push(telefone2)

let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let documento1 = new Documento()
documento1.tipo = TipoDocumento.CPF
documento1.numero = "151701352"
documento1.dataExpedicao = new Date(1904, 1, 7)
cliente.documentos.push(documento1)

let documento2 = new Documento()
documento2.tipo = TipoDocumento.RG
documento2.numero = "10117856181"
documento2.dataExpedicao = new Date(1968, 9, 23)
cliente.documentos.push(documento2)

// --------------DEPENDENTE---------------

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)

let dependenteTelefone1 = new Telefone()
dependenteTelefone1.ddd = "12"
dependenteTelefone1.numero = "993912428"
dependente.telefones.push(dependenteTelefone1)

let dependenteTelefone2 = new Telefone()
dependenteTelefone2.ddd = "12"
dependenteTelefone2.numero = "994924246"
dependente.telefones.push(dependenteTelefone2)

// ---------------------------------------

dependente.endereco = cliente.endereco.clonar() as Endereco

let dependenteDocumento1 = new Documento()
dependenteDocumento1.tipo = TipoDocumento.CPF
dependenteDocumento1.numero = "251701352"
dependenteDocumento1.dataExpedicao = new Date(1904, 1, 7)
dependente.documentos.push(dependenteDocumento1)

let dependenteDocumento2 = new Documento()
dependenteDocumento2.tipo = TipoDocumento.RG
dependenteDocumento2.numero = "20117856181"
dependenteDocumento2.dataExpedicao = new Date(1968, 9, 23)
dependente.documentos.push(dependenteDocumento2)

dependente.documentos = cliente.documentos

// ---------------------------------------

dependente.titular = cliente
cliente.dependentes

// console.log(cliente,'\n');
// console.log(dependente);

console.log("Cliente:");
console.log("Nome:", cliente.nome);
console.log("Nome Social:", cliente.nomeSocial);
console.log("Data de Cadastro:", cliente.dataCadastro.toLocaleString());
console.log("Data de Nascimento:", cliente.dataNascimento.toLocaleString());
console.log("Telefones:");
cliente.telefones.forEach((telefone, index) => {
  console.log("Telefone", index + 1);
  console.log("DDD:", telefone.ddd);
  console.log("Número:", telefone.numero);
});
console.log("Endereço:");
console.log("Rua:", cliente.endereco.rua);
console.log("Bairro:", cliente.endereco.bairro);
console.log("Cidade:", cliente.endereco.cidade);
console.log("Estado:", cliente.endereco.estado);
console.log("País:", cliente.endereco.pais);
console.log("Código Postal:", cliente.endereco.codigoPostal);
console.log("Documentos:");
cliente.documentos.forEach((documento, index) => {
  console.log("Documento", index + 1);
  console.log("Tipo:", documento.tipo);
  console.log("Número:", documento.numero);
  console.log("Data de Expedição:", documento.dataExpedicao.toLocaleString());
});

console.log("\nDependente:");
console.log("Nome:", dependente.nome);
console.log("Nome Social:", dependente.nomeSocial);
console.log("Data de Cadastro:", dependente.dataCadastro.toLocaleString());
console.log("Data de Nascimento:", dependente.dataNascimento.toLocaleString());
console.log("Telefones:");
dependente.telefones.forEach((telefone, index) => {
  console.log("Telefone", index + 1);
  console.log("DDD:", telefone.ddd);
  console.log("Número:", telefone.numero);
});
console.log("Endereço:");
console.log("Rua:", dependente.endereco.rua);
console.log("Bairro:", dependente.endereco.bairro);
console.log("Cidade:", dependente.endereco.cidade);
console.log("Estado:", dependente.endereco.estado);
console.log("País:", dependente.endereco.pais);
console.log("Código Postal:", dependente.endereco.codigoPostal);
console.log("Documentos:");
dependente.documentos.forEach((documento, index) => {
  console.log("Documento", index + 1);
  console.log("Tipo:", documento.tipo);
  console.log("Número:", documento.numero);
  console.log("Data de Expedição:", documento.dataExpedicao.toLocaleString());
});
