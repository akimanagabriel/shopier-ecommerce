import CartItem from "@/components/partials/CartItem";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { products, totalQuantity, emptyCart } = useCartStore();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>

        <Button
          disabled={products.length === 0}
          variant={"destructive"}
          onClick={emptyCart}
        >
          <Trash />
          Clear cart
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total Quantity: {totalQuantity}
            </h2>
            <h2 className="text-xl font-semibold text-orange-600">
              Total: $
              {products
                .reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                )
                .toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
