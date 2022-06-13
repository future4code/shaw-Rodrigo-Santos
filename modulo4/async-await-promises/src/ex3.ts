import axios from "axios";
import { baseURL } from "./baseURL";

// 5

type user = {
  id: string;
  name: string;
  email: string;
};

async function getSubscribers(): Promise<user[]> {
  const response = await axios.get(`${baseURL}/subscribers`);

  return response.data.map((res: any) => {
    return { id: res.id, name: res.name, email: res.email };
  });
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
