import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
  id: string;
  name: string;
  email: string;
};

const usuario1:user = {
    id: "0011212",
    name: "Super Mario",
    email: "mario@gmail.com"
}

const usuario2:user = {
    id: "00114442",
    name: "Luigi",
    email: "luigi@gmail.com"
}

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  for (const user of users) {

    console.log(user);
    
    try {
       
        
      await axios.post(`${baseURL}/notifications`, {
        subscriberId: user.id,
        message,
      });

      console.log("All notifications sent");
    } catch (error: any) {
        const resp = error.response?.data || error.message;
        console.log(resp);
        
    }
  }
};

const usuarios = [usuario1, usuario2]

const main = async (): Promise<void> => {
  try {

   await sendNotifications(usuarios, "Oiiii!!");
    
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    
  }
};
main();
