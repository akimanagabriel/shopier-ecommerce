import { Button } from "@/components/ui/button";
import { CartProduct, useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react";

type CartItemProps = {
  product: CartProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  const { removeFromCart, increaseQuantity, reduceQuantity } = useCartStore();

  const handleIncreaseQuantity = () => {
    increaseQuantity(product);
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      reduceQuantity(product);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-gray-200">
      {/* Product Info */}
      <div className="flex gap-4 w-full sm:w-2/3">
        <img
          src={product.image}
          alt={product.title}
          className="h-20 w-20 object-contain shrink-0"
        />
        <div>
          <h3 className="text-base font-semibold text-orange-800 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-2 text-orange-500 font-semibold">
            ${product.price}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full sm:w-1/3">
        {/* Quantity Controls */}
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <Button
            disabled={product.quantity == 1}
            onClick={handleDecreaseQuantity}
            size="sm"
            variant="outline"
          >
            -
          </Button>
          <span className="text-base font-medium">{product.quantity}</span>
          <Button
            onClick={handleIncreaseQuantity}
            size="sm"
            variant="outline"
          >
            +
          </Button>
        </div>

        {/* Price & Remove */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-base font-semibold text-orange-600">
            ${(product.price * product.quantity).toFixed(2)}
          </span>
          <Button
            onClick={handleRemoveFromCart}
            size="icon"
            variant="outline"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
