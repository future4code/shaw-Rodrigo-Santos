type Cliente = {
  cliente: string;
  saldoTotal: number;
  debitos: Array<number>;
};

const clientes: Cliente[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const saldoAtualizado = ( clientes: Cliente[]): Cliente[] =>{

   return clientes.map((cliente:Cliente):Cliente=>{
    const debitoSoma:number = cliente.debitos.length>0 ? cliente.debitos.reduce((acc:number, cur:number)=>acc+cur, 0):0 
    const attSaldo:number = cliente.saldoTotal - debitoSoma

    return{...cliente, saldoTotal:attSaldo,debitos:[]}

   }).filter((clientMap:Cliente):boolean=>{
     return clientMap.saldoTotal<0
   })
}
console.table(saldoAtualizado(clientes))

/* const emprestimo = clientes.filter((item)=>{
  let somaTotal = 0
  item.debitos.forEach((item2)=>{
    somaTotal += item2
  })
  let saldoFinal = item.saldoTotal - somaTotal
  if (saldoFinal < 0 ) {
    return [item.cliente, item.saldoTotal = saldoFinal, item.debitos = []]
  }
})
console.log(emprestimo); */
