import axios from "axios";
import { baseURL } from "./baseURL";

// 2
// a) O arrow function permite ao desenvolvedor alcançar o mesmo resultado simplificando o seu código. Os colchetes se tornam desnecessários se apenas uma expressão seja realizada:
// b) 
async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
}

const main = async (): Promise<void> => {
  try {
    const subscribers = await getSubscribers();
    console.log(subscribers);
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};
main();
