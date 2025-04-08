import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

function PageHeader() {
  const redirect = useNavigate();
  const { products } = useCartStore();

  return (
    <div className="sticky top-0 px-4 sm:px-6 backdrop-blur-3xl">
      <motion.div
        className="cursor-pointer flex justify-between container mx-auto py-4 flex-wrap sticky top-0 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          onClick={() => redirect("/")}
          className="font-bold text-2xl sm:text-3xl text-orange-800"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          SHOP<span className="text-orange-500">IER</span>
        </motion.h1>
        <motion.ul
          className="flex gap-5 items-center mt-2 sm:mt-0"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <li>
            <Button
              variant={"ghost"}
              onClick={() => redirect("/shop")}
            >
              <ShoppingBag />
              Market
            </Button>
          </li>

          <li
            onClick={() => redirect("/cart")}
            className="relative"
          >
            <Button size={"icon"}>
              <ShoppingCart />
            </Button>
            <p className=" flex items-center justify-center rounded-full absolute -top-2 -right-1 bg-orange-800 text-white h-5 w-5">
              <small>{products.length}</small>
            </p>
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default PageHeader;
