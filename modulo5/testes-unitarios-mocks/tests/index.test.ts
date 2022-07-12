import {validateCharacter} from "../src/validateCharacter"
import Character from "../src/model/Character"


describe("Esse é o meu primeiro teste", ()=>{
    test("Esse teste vai verificar uma string", ()=>{
        const nome: string = "rodrigo"

        expect(nome).toBe("rodrigo")
    })
})

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