import { useEffect, useState } from "react";
import { getDogApi } from "../api";

export const FetchDogImg = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const getImg = async () => {
    setLoading(true);
    try {
      const {
        data: { message },
      } = await getDogApi();
      setImages(message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  return { loading, images };
};
