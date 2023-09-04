import {describe, expect, test, it} from '@jest/globals';
import { Usuario } from '../src/classusuario';

describe('teste instance Usuario', () => {
  it("criar usuario", () => {
    const user = new Usuario({
      nome: "Lucas",
      idade: 30,
      cidade: "Hortolândia",
      sexo: "Macho"
    })

    expect(user).toBeInstanceOf(Usuario);
    expect(user.nome).toEqual('Lucas')
  })
})