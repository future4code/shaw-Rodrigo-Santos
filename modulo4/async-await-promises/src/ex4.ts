import axios from "axios";
import { baseURL } from "./baseURL";

//4a) 

const createNews = async ( title: string, content: string, date: number ) => {
    const res = await axios.put(`${baseURL}/news`, {
         title:title,
         content : content,
         date:date
    })
    console.log(res);
    
}

createNews ("Sega compra nintendo", "Sega compra Nintendo do Japão", 26091989)



