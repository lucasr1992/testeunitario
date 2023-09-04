import {describe, expect, test, it} from '@jest/globals';
import { sum } from '../src/soma';

const Cases = [
  {
    id:0,
    input:{a: 1, b: 5},
    output: 6
  },
  {
    id:1,
    input:{a: 7, b: 2},
    output: 9
  },
  {
    id:2,
    input:{a: 5, b: 5},
    output: 10
  },
  {
    id:3,
    input:{a: 3, b: 9},
    output: 12
  },
]

describe("Teste Laço de Repetição", () => {
  it.each(Cases)("Case id $id", ({input, output}) => {
    const {a, b} = input;
    expect(sum(a, b)).toBe(output);
  });
});