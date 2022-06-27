import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private registroIdividual: string,
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getRegistroIdividual(): string {
      return this.registroIdividual;
    }
  
    public calculateBill(): number {
      return (this.consumedEnergy * 0.53 + this.machinesQuantity * 100.00);
    }
  }