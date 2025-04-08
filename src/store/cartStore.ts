import { persist } from "zustand/middleware";
import { Product } from "@/store/productStore";
import { create } from "zustand";
import { toast } from "sonner";

export type CartProduct = Product & { quantity: number };

type CartStore = {
  products: CartProduct[];
  totalQuantity: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (product: Product) => void;
  emptyCart: () => void;
  reduceQuantity: (product: CartProduct) => void;
  updateTotalQuantity: () => void;
  increaseQuantity: (product: CartProduct) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      totalQuantity: 0,

      increaseQuantity: (product: CartProduct) => {
        set({
          products: get().products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        });
        // Update total quantity after reducing the quantity
        get().updateTotalQuantity();
      },

      // Function to update total quantity
      updateTotalQuantity: () => {
        const total = get().products.reduce(
          (acc, product) => acc + product.quantity,
          0
        );
        set({ totalQuantity: total });
      },

      reduceQuantity: (product: CartProduct) => {
        set({
          products: get().products.map((p) =>
            p.id === product.id && p.quantity > 1
              ? { ...p, quantity: p.quantity - 1 }
              : p
          ),
        });
        // Update total quantity after reducing the quantity
        get().updateTotalQuantity();
      },

      addToCart: (newProduct: Product) => {
        const existingProduct = get().products.find(
          (p) => p.id === newProduct.id
        );
        if (existingProduct) {
          set({
            products: get().products.map((p) =>
              p.id === existingProduct.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
          });
          toast.info(
            existingProduct.title +
              " already exists in the cart, it has been increased by quantity."
          );
        } else {
          set({
            products: [...get().products, { ...newProduct, quantity: 1 }],
          });
          toast.success(newProduct.title + " added to cart");
        }
        // Update total quantity after adding a product
        get().updateTotalQuantity();
      },

      removeFromCart: (product) => {
        set({
          products: get().products.filter((p) => p.id !== product.id),
        });
        // Update total quantity after removing a product
        get().updateTotalQuantity();
      },

      emptyCart: () => {
        set({ products: [] });
        // Update total quantity after emptying the cart
        get().updateTotalQuantity();
        toast.success("Cart cleared");
      },
    }),
    { name: "cart" }
  )
);
