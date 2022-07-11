import performPurchase from "../src/PerformPurchase"
import User from "../src/model/User"

describe("Esse é o meu primeiro teste", ()=>{
    test("Esse teste vai verificar uma string", ()=>{
        const nome: string = "rodrigo"

        expect(nome).toBe("rodrigo")
    })
})

// a) Faça um teste com um usuário com o saldo maior do que o valor de compra

describe("Teste de compras1", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })
})

// b) Faça um teste com um usuário com o saldo igual ao valor de compra

describe("Teste 2", ()=> {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})

// c) Faça um teste com um usuário com o saldo menor do que o valor de compra

describe("Teste 3", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})

