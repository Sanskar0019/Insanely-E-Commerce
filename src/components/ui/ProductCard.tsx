import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, price }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={productName} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{productName}</h2>
      <p className="text-primary-600">{price}</p>
    </div>
  );
};

export default ProductCard;
