import axios from "axios";

export const getDogApi = () =>
  axios.get("https://dog.ceo/api/breeds/image/random/5");

export const getCatApi = () => axios.get("https://aws.random.cat/meow");
