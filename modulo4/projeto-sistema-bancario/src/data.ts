export type User = {
  name: string;
  CPF: number;
  birthDate: Date;
  balance: number;
  statement: Statement[];
};

export type Statement = {
  value: number;
  date: Date;
  description: string;
};

export const user: User[] = [
  {
    name: "Rodrigo",
    CPF: 12345678901,
    birthDate: new Date("1970-08-20"),
    balance: 300.0,
    statement: [
      {
        value: 12.0,
        date: new Date("1970-08-20"),
        description: "Break feast",
      },
      {
        value: 49.0,
        date: new Date("1970-08-20"),
        description: "Bar do Zé",
      },
      {
        value: 120.0,
        date: new Date("1970-08-20"),
        description: "Gas",
      },
    ],
  },
  {
    name: "Pablo do Arrocha",
    CPF: 12345678903,
    birthDate: new Date("1970-08-20"),
    balance: 800.0,
    statement: [
      {
        value: 200.0,
        date: new Date("1970-08-20"),
        description: "Chinelin da moda",
      },
      {
        value: 500.0,
        date: new Date("1970-08-20"),
        description: "Passagem pra Goiás",
      },
      {
        value: 120.0,
        date: new Date("1970-08-20"),
        description: "Barzin da moda",
      },
      {
        value: 300.0,
        date: new Date("1970-08-20"),
        description: "Advogado",
      },
    ],
  },
  {
    name: "Servulin de mainha",
    CPF: 12345678902,
    birthDate: new Date("1970-08-20"),
    balance: 999.0,
    statement: [
      {
        value: 200.0,
        date: new Date("1970-08-20"),
        description: "Outback",
      },
      {
        value: 220.0,
        date: new Date("1970-08-20"),
        description: "Bar da praia",
      },
      {
        value: 120.0,
        date: new Date("1970-08-20"),
        description: "Barzin da moda",
      },
      {
        value: 300.0,
        date: new Date("1970-08-20"),
        description: "Passagem pro RJ",
      },
    ],
  },
];
