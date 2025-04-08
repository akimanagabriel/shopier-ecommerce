import api from "@/config";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductStore = {
  products: Product[];
  setProducts: () => void;
  getAllProducts: () => Product[];
  getProductById: (id: number | string) => Product;
  isFetching: boolean;
};

export const useProductStore = create<ProductStore>()((set, get) => ({
  isFetching: false,
  products: [],

  setProducts: async () => {
    try {
      set({ isFetching: true });
      const { data } = await api.get("/products");
      set({ products: data });
    } catch (error) {
      console.log(error);
      const errorMessage =
        (error as AxiosError)?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    } finally {
      set({ isFetching: false });
    }
  },

  getAllProducts: () => {
    return get()?.products || [];
  },

  getProductById: (id) => {
    return get()?.products.find((p) => p.id == id) as Product;
  },
}));
