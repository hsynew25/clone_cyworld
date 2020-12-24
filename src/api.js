import axios from "axios";

export const getDogApi = () =>
  axios.get("https://dog.ceo/api/breeds/image/random/5");
