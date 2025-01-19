import React, { useState, useEffect } from 'react';
import ProductCard from './components/ui/ProductCard'; // Import the ProductCard component
import { useSearchParams } from 'react-router-dom';


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  ImageUrl: string;
}

const products: Product[] = [
    { id: 1, name: 'Men’s T-Shirt', price: 20, category: 'Men', ImageUrl: 'https://lsmedia.linker-cdn.net/62267/2023/8882177.jpeg?d=400x400' },
    { id: 2, name: 'Women’s Dress', price: 45, category: 'Women', ImageUrl: 'https://images-cdn.ubuy.co.in/636709b5ff4b353d4f486af2-jaipur-kurti-women-green-solid-maxi.jpg' },
    { id: 3, name: 'Kid’s Jacket', price: 30, category: 'Kids', ImageUrl: 'https://cdn.shopify.com/s/files/1/0414/5014/3896/files/JACK-WOLFSKIN-ICE-CURL-JACKET-FOR-KIDS-NIGHT-BLUE-1609162-T0033_2_400x400.jpg?v=1734425444' },
    { id: 4, name: 'Unisex Hoodie', price: 35, category: 'Unisex', ImageUrl: 'https://cdn.shopify.com/s/files/1/0003/4183/5782/files/CC-Pumice-Hoodie_0002_Layer_10_400x400.jpg?v=1724686661' },
    { id: 5, name: 'Men’s Jeans', price: 50, category: 'Men', ImageUrl: 'https://saddlerags.com/wp-content/uploads/2024/04/IMG_5215-400x400.jpg' },
    { id: 6, name: 'Women’s Top', price: 25, category: 'Women', ImageUrl: 'https://www.cyclop.in/cdn/shop/products/WR6994a_400x.jpg?v=1690288565' },
    { id: 7, name: 'Kid’s Shoes', price: 40, category: 'Kids', ImageUrl: 'https://i.pinimg.com/474x/0b/43/16/0b4316c8637c38e142243fe925311870.jpg' },
    { id: 8, name: 'Unisex Cap', price: 15, category: 'Unisex', ImageUrl: 'https://supervek.in/cdn/shop/products/Supervek8569-Edit_400x.jpg?v=1667212398' },
    { id: 9, name: 'Men’s Sneakers', price: 60, category: 'Men', ImageUrl: 'https://rukminim2.flixcart.com/image/400/450/xif0q/shoe/r/q/b/9-100-corsac-black-original-imagzx8vhacynhcy.jpeg?q=90&crop=false' },
    { id: 10, name: 'Women’s Handbag', price: 70, category: 'Women', ImageUrl: 'https://m.theblockart.com/ImageStorage/thumbs/BA2016202330721AM332213.jpeg' },
    { id: 11, name: 'Kid’s Backpack', price: 35, category: 'Kids', ImageUrl: 'https://images-cdn.ubuy.co.in/633ff63fa79c99088626ab5c-holographic-kids-backpack-mermaid-sequin.jpg' },
    { id: 12, name: 'Unisex Sunglasses', price: 25, category: 'Unisex', ImageUrl: 'https://shynzo.com/wp-content/uploads/2023/12/Luxury-Designer-4-400x400.jpg' },
    { id: 13, name: 'Men’s Jacket', price: 80, category: 'Men', ImageUrl: 'https://pictures.kartmax.in/live/400x0/sites/w0ACRcy407Pb14QWUoSQ/product-images/BHJI22512-NAVY_1.jpg' },
    { id: 14, name: 'Women’s Scarf', price: 20, category: 'Women', ImageUrl: 'https://dukaan.b-cdn.net/400x400/webp/download-and-upload/eb5da974-5bf5-4081-ad28-acc89706fd45.jpg' },
    { id: 15, name: 'Kid’s Hat', price: 12, category: 'Kids', ImageUrl: 'https://hatshow.com.au/cdn/shop/files/WEBSITEPHOTOKIDSHATS.jpg?v=1729591033' },
    { id: 16, name: 'Unisex Watch', price: 90, category: 'Unisex', ImageUrl: 'https://watchfactory.in/cdn/shop/files/FS6012_onwrist.jpg?v=1711806241&width=720' },
    { id: 17, name: 'Men’s Belt', price: 25, category: 'Men', ImageUrl: 'https://www.rvvleather.com/uploaded-files/thumb-cache/member_38/thumb---formal-leather-belt_2064.jpg' },
    { id: 18, name: 'Women’s Earrings', price: 30, category: 'Women', ImageUrl: 'https://assets.hermes.cn/is/image/hermesproduct/100052FO03_worn_9?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=400&hei=400' },
  ];
  

  const ShopPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [filter, setFilter] = useState<string>('All');
    const [sort, setSort] = useState<string>('default');
  
    useEffect(() => {
      const categoryParam = searchParams.get('category');
      const sortParam = searchParams.get('sort');
  
      if (categoryParam) setFilter(categoryParam);
      if (sortParam) setSort(sortParam);
    }, [searchParams]);
  
    const filteredProducts = products.filter((product) =>
      filter === 'All' ? true : product.category === filter
    );
  
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sort === 'priceLowToHigh') return a.price - b.price;
      if (sort === 'priceHighToLow') return b.price - a.price;
      return a.id - b.id; // Default sorting by ID
    });
  
    return (
      <div className="p-6 min-h-screen">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        </header>
  
        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mb-8">
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="All">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Unisex">Unisex</option>
          </select>
  
          {/* Sorting */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="default">Sort by Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.ImageUrl}
              productName={product.name}
              price={`$${product.price.toFixed(2)}`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ShopPage;