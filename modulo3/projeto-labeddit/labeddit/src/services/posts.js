import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const postCreatePost = (body, clear, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert(res.data);
      clear();
      setIsLoading(false)
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false)
    });
};

export const postCreateComent = (body, clear, params) => {
  axios
    .post(`${BASE_URL}/posts/${params.id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert(res.data);
      clear();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};


