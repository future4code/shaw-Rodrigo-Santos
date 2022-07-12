import { validateCharacter } from "../src/validateCharacter";
import Character from "../src/model/Character";
import { performAttack } from "../src/perfomeAttack";

describe("Esse é o meu primeiro teste", () => {
  test("Esse teste vai verificar uma string", () => {
    const nome: string = "rodrigo";

    expect(nome).toBe("rodrigo");
  });
});

// a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

//b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.

test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

// c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.

test("Should return false for strength 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 2000,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

// d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.

test("Should return false for defense 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 2000,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

// e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo

test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Showing jest.fn", () => {
  const mock = jest.fn(() => {
    const user = {
      name: "Astrodev",
      age: 29,
    };
    return user;
  });
});

//4a) Devemos criar um mock de ambos nos próximos testes pois precisamos verificar tanto o ataque quanto a validação do character

//4b b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });
});

//4 c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false;
  });
});

/*5a a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. 
Verifique o estado final das personagens. 
Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*/

test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack(attacker, defender, validatorMock as any);

  expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

/* 5 b. Faça um teste com um dos personagens com alguma informação inválida. 
Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada,
 o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou. */

 test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack(attacker, defender, validatorMock as any);
  } catch (err:any) {
    expect(err.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});
