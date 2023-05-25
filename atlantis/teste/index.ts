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

dependente.telefones = ( cliente.telefones.map(i => i.clonar()) as Telefone[])

dependente.endereco = cliente.endereco.clonar() as Endereco

// ---------------------------------------

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

console.log(cliente,'\n');
console.log(dependente);
