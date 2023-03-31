import axios from "axios";

export interface ProducstsProps {
  id: number;
  brand: string;
  name_kr: string;
  name_en: string;
  price: number;
  category: string;
  modelNumber: string;
  releaseDate: string;
  image: string;
}

export const url = `${import.meta.env.VITE_MJSTORE_API}/request`;

export const getProducsts = async () => {
  const response = await axios.get(url);

  return response.data;
};
