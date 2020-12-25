import { useEffect, useState } from "react";
import { getCatApi, getDogApi } from "../api";

export const FetchCatImg = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState("");

  const getImg = async () => {
    setLoading(true);
    try {
      const {
        data: { file },
      } = await getCatApi();
      setImages(file);
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
