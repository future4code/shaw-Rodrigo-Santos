import { Client } from "./Client";
import { Customer } from "./Customer";
import { Place } from "./Place";
import { User } from "./User";

const rodrigo = new User("1", "rodrigo.v.santos89@gmail.com", "Rodrigo", "1b2a3c")

console.log(rodrigo.getId());

console.log(rodrigo.getEmail());

console.log(rodrigo.getName());

//---------------------------------------------------------------------

const zeDasCouves =  new Customer("2", "zedas@gmail.com", "Zé das couves", "ze0102", "679218799817281")

console.log(zeDasCouves.getCreditCard())

console.log(zeDasCouves.getId());

console.log(zeDasCouves.getEmail());

console.log(zeDasCouves.getName());

console.log(zeDasCouves.getPurchaseTotal());

console.log(zeDasCouves.getPassword())

zeDasCouves.introduceYourself()

//----------------------------------------------------------------------

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

console.log(client)

/* const house = new Place() */

//----------------------------------------------------------------------






