import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const redirect = useNavigate();
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 flex flex-col md:flex-row items-center justify-center px-4 py-16 md:p-8 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left w-full max-w-xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-800 mb-4 sm:mb-6">
          Discover the Best Deals Online
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
          Shop top-quality products at unbeatable prices. Your favorite brands,
          just a click away.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Button
            onClick={() => redirect("/shop")}
            className="text-white bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
          >
            Shop Now
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
          >
            Browse Categories
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-sm"
      >
        <img
          src="/ecommerce-hero.svg"
          alt="Mobile E-commerce App"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
