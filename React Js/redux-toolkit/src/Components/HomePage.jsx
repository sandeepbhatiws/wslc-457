import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../Redux Toolkit/CartSlice";

export default function HomePage() {

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php')
        .then((result) => {
            setProducts(result.data.data);
        })
        .catch(() => {
            toast.error('Something went wrong !');
        })
    },[])



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="">
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>

              <button onClick={ () => dispatch(addToCart(product )) } className="mt-4 gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
