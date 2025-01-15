import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Card } from '../components/ui/card';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, price }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="relative w-72 bg-gradient-to-br from-primary-400 to-primary-300 text-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image Container with Zoom Effect */}
      <div 
         className="relative h-72 overflow-hidden cursor-pointer group"
         onClick={() => setIsZoomed(!isZoomed)}
       >
         <img
           src={imageUrl}
           alt={productName}
           className={`w-full h-full object-cover transition-transform duration-500 ${
             isZoomed ? 'scale-125' : 'scale-100'
           } group-hover:scale-110`}
         />
        
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-primary-100/80 backdrop-blur-md hover:bg-primary-200/80 transition-colors duration-300 shadow-sm"
        >
          <Heart
            className={`w-6 h-6 transition-colors ${
              isWishlisted ? 'fill-primary-600 text-primary-600' : 'text-gray-700'
            }`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold mb-1">{productName}</h3>
          <p className="text-xl font-bold text-primary-700">{price}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold shadow-md transition-colors duration-300">
            Buy Now
          </button>
          
          <button className="w-full py-2 flex items-center justify-center gap-2 bg-primary-100/60 hover:bg-primary-200/70 rounded-lg font-semibold text-primary-700 transition-colors duration-300 shadow-sm">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary-200/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary-200/30 to-transparent" />
    </Card>
  );
};

export default ProductCard;
