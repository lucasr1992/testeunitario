import {describe, expect, it} from '@jest/globals';
import { Usuario } from '../src/classusuario';

const Cases = [
  {
    id:0,
    nome: "Lucas",
    idade: 30,
    cidade: "Hortolândia",
    sexo: "Macho"
  },
  {
    id:1,
    nome: "Rafael",
    idade: 24,
    cidade: "Araçatuba",
    sexo: "Duvidas"
  },
  {
    id:2,
    nome: "Wanderlei",
    idade: 45,
    cidade: "Campinas",
    sexo: "Macho"
  },
]

describe('teste instance Usuario', () => {
  it.each(Cases)("Case id $id", ({
    nome, idade, cidade, sexo
  }) => {
    const user = new Usuario({
      nome: nome,
      idade: idade,
      cidade: cidade,
      sexo: sexo
    })
    
    expect(user).toBeInstanceOf(Usuario);
    expect(user.nome).toEqual('Lucas');
  })
})