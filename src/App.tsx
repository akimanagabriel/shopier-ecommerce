import { useEffect, useState } from "react";
import api from "./config";

function App() {
  const [products, setProducts] = useState<Product[]>();

  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  const getProducts = async () => {
    const { data } = await api.get("/products");
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="p-10">
        <h1 className="text-2xl underline mb-5">All products</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5">
          {products?.length != 0 &&
            products?.map((product) => {
              const { id, category, description, image, price, title } =
                product;
              return (
                <div
                  key={id}
                  className="bg-white rounded-xl p-5 flex flex-col gap-3 justify-between items-center"
                >
                  <div>
                    <img
                      className="h-[200px] object-contain"
                      src={image}
                      alt=""
                    />
                    <h1 className="text-lg text-center">{title}</h1>
                    <div className="flex gap-10 items-center">
                      <span className="bg-orange-300 text-orange-800 px-2 uppercase rounded-full flex items-center">
                        <small className="text-sm">{category}</small>
                      </span>
                      <span className="text-3xl font-bold">${price}</span>
                    </div>
                    <p>{description.slice(0, 100)} ...</p>
                  </div>
                  <div>
                    <button className="px-6 py-2 flex items-center uppercase rounded bg-orange-500 text-white">
                      add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
