'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import { product } from "@/app/api/reservation/menuitems/types";

const Menuitems = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [cart, setCart] = useState<product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/reservation/menuitems");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Invalid cart data in localStorage", error);
        localStorage.removeItem("cart");
      }
    }
  }, []);
  
  const addToCart = (product: product) => {
    setCart((prevCart) => {
      const updatedCart = [
        ...prevCart,
        { ...product, uniqueId: `${product.id}-${Date.now()}-${Math.random()}` },
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (uniqueId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.uniqueId !== uniqueId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);
  
  return (
    <div className='relative main-h-screen p-14'>
      <div className='absolute inset-0 bg-cover bg-center opacity-20 animate-background'  
        style={{
          backgroundImage: `url('/images/background.jpg')`,
          backgroundSize: 'cover',  
          backgroundRepeat: 'no-repeat',  
          backgroundAttachment: 'fixed',  
          backgroundBlendMode: 'soft-light',  
          backgroundPosition: 'center',  
        }}></div>
      <div className="relative z-10">
        <div className="container mx-auto text-center mb-8">
          <h1 className='text-white text-5xl font-bold mb-6'>Our Pizza Menu</h1>
        </div>
        <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-y-10 gap-x-3 mt-10 mb-5'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCard={addToCart}
              cart={cart}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-sky-700 text-white py-3 px-16 rounded-lg shadow-md hover:bg-sky-500 transition duration-300 ease-out transform">
            {showCart ? 'Hide Cart' : 'View Cart'} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-white p-7 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-sky-800 text-center">Your Cart Items Includes:</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col sm:flex-row items-center justify-between mb-6 transition duration-300 ease-in-out transform hover:scale-110">
                        <img
                          src={product.image}
                          alt={product.image}
                          className="w-20 h-15 sm:w-24 sm:h-24 inline-block text-black transition duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="flex flex-col sm:flex-row sm:ml-4 w-full sm:w-auto">
                          <span className="text-lg font-medium text-sky-800">{product.name}</span>
                          <span className="mt-1 text-sm text-gray-500 sm:ml-4">{product.description}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:ml-4 w-full sm:w-auto justify-between items-center">
                          <span className="text-lg text-sky-800 font-medium">Rs: {product.price}</span>
                          <button
                            onClick={() => removeFromCart(product.uniqueId!)}
                            className="bg-red-600 py-1 px-4 mt-2 sm:mt-0 text-sm text-white rounded hover:bg-red-700 transition duration-300">
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black md:space-x-5">
                    <span className="font-semibold text-xl">Total: Rs. {totalAmount}</span>
  
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-yellow-700 py-3 px-9 rounded-lg text-lg text-white shadow-md hover:bg-sky-600 transition duration-300 ease-in-out transform hover:scale-110">
                        Proceed To Checkout
                      </button>
  
                      <button
                        onClick={clearCart}
                        className="bg-cyan-700 py-3 px-9 rounded-lg ml-4 text-lg text-white shadow-md hover:bg-sky-600 transition duration-300 ease-in-out transform hover:scale-110">
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-700">Your cart is empty</p>
              )}
            </div>
          )}
        </div>
        {isCheckout && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 relative z-60">
              <h2 className="text-3xl font-bold text-sky-700 mb-4 text-center">Checkout</h2>
              <p className="text-lg text-red-800 text-center">Please confirm your Order!</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product) => (
                    <li key={product.uniqueId} className="flex justify-between mb-4">
                      <span className="text-gray-700">{product.name}</span>
                      <span>Rs: {product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">Rs: {cart.reduce((total, product) => total + product.price, 0)}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-7 rounded-lg text-lg shadow-md hover:bg-slate-700 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Order confirmed.. will Deliver At Your Door Step!")}
                  className="bg-slate-600 text-white py-2 px-7 rounded-lg text-lg shadow-md hover:bg-slate-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>

  );
};  

export default Menuitems;  