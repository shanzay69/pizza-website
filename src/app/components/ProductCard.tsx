import React from 'react';
import { product } from "@/app/api/reservation/menuitems/types";

interface ProductCardprops extends product {
  onAddToCard: (Product: product) => void;
  cart: product[]; // Added cart prop to check if item is already in cart
}

const ProductCard: React.FC<ProductCardprops> = ({
  id,
  name,
  price,
  image,
  description,
  onAddToCard,
  cart,
}) => {
  const isInCart = cart.some(item => item.id === id);

  return (
    <div className='w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative gap-3'>
      <img
        src={image}
        alt={`Image of ${name} pizza`}
        className='h-72 w-full object-cover rounded-t-xl mb-4'
      />
      <h2 className='text-lg font-bold text-sky-700 truncate block capitalize mb-2'>{name}</h2>
      <p className='text-lg font-semibold text-black my-3 cursor-auto'>Rs: {price}</p>
      <p className='text-sm text-gray-500 mb-4'>{description}</p>
      <button
        onClick={() => onAddToCard({ id, name, price, image, description })}
        disabled={isInCart}
        className={`bg-sky-700 text-white w-full py-3 rounded-lg text-lg shadow-md hover:bg-sky-500 transition duration-300 ease-in-out ${isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;



