import axios from "axios";
import { baseURL } from "./baseURL";

//1
//a) GET/subscribers
//b) :promise<any[]>
//c)

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
