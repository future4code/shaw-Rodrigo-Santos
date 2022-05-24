import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const creatPostVote = (id, getFeed) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert(res.data);
      getFeed()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const creatCommentVote = (id, getFeed) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert(res.data);
      getFeed()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const putChangePostVote = (id, getFeed) => {
  const body = {
    direction: -1,
  };
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert("Deslike");
      getFeed()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const putChangeCommentVote = (id, getFeed) => {
  const body = {
    direction: -1,
  };
  axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      alert("Deslike");
      getFeed()
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
