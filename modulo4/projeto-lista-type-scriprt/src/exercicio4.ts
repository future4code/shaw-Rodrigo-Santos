enum Setor {
  MARKETING = "Marketing",
  VENDAS = "Vendas",
  FINANCEIRO = "Financeiro",
}

type Pessoa = {
  nome: string;
  salário: number;
  presencial: boolean;
  setor: Setor;
};

const pessoas: Pessoa[] = [
  { nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: Setor.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: Setor.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: Setor.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: Setor.MARKETING, presencial: true },
];

function pessoasDoMkt(pessoas: Pessoa[], setorInformado: string): Pessoa[] {
  return pessoas.filter((pessoa) => {
    return pessoa.setor === setorInformado;
  });
}

console.table(pessoasDoMkt(pessoas, Setor.MARKETING));
