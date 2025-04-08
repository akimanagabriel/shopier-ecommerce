import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader, ShoppingCart } from "lucide-react";
import { useProductStore } from "@/store/productStore";
import { Button } from "@/components/ui/button";
import { CartProduct, useCartStore } from "@/store/cartStore";

function ShopScreen() {
  const store = useProductStore();
  const { addToCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    store?.setProducts();
  }, []);

  // Get unique categories from products
  const categories = Array.from(
    new Set(store?.products.map((p) => p.category))
  );

  // Filter products based on selected category and search term
  const filteredProducts = (
    selectedCategory
      ? store?.products.filter((p) => p.category === selectedCategory)
      : store?.products
  )?.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {store?.isFetching ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h1 className="flex gap-3 items-center text-orange-500 text-xl font-semibold animate-pulse">
            <Loader className="animate-spin" />
            Please wait ...
          </h1>
        </div>
      ) : (
        <>
          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row md:justify-between sm:gap-4 mb-6">
            {/* Category Filters */}
            <div className="mb-4 sm:mb-0 w-full sm:w-auto flex flex-wrap gap-1 justify-start">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts?.map((product) => (
              <Card
                key={product.id}
                className="transition-shadow hover:shadow-lg"
              >
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <img
                      className="h-48 object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <h1 className="mb-2 text-lg font-bold text-orange-700 line-clamp-1">
                    {product.title}
                  </h1>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-orange-600 font-semibold text-xl ">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button onClick={() => addToCart(product as CartProduct)}>
                    <ShoppingCart /> Add to cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ShopScreen;
