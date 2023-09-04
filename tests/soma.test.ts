import {describe, expect, test, it} from '@jest/globals';
import { sum } from '../src/soma';

describe("sabosta rodando", () => {
  it("sucesso ", () => {
    const valFinal = 6;
    const soma = sum(2, 4);
    expect(soma).toBe(valFinal)
  })
})