import React from 'react'
import HeroImage from './HeroImage'
import ProductCard from './Product';
import ViewMoreButton from './ui/ViewMoreButton';

const LandingPage: React.FC = () =>  {
  return (
    <div className='sora-LandingPage'>
    <div className="flex justify-center items-center text-3xl tracking-wide text-primary-600  border-primary-600 py-3">
      Hey! You are Here!</div>   
    <HeroImage/>
    <div className="flex justify-center items-center text-3xl tracking-wide text-primary-600 border-b-4 border-primary-600 py-3">
     Shop Our Latest Collection!!</div>   
     <div className='flex justify-center items-center text-3xl tracking-wide text-primary-600 border-primary-600 py-6'>Men's Collection</div>
     <div className='flex justify-center items-center gap-10'>
     <ProductCard 
    imageUrl="https://maskonline.co.in/cdn/shop/files/FINAL.jpg?v=1725714053" 
    productName="Stylish Shacket" 
    price="$199.99" 
      />
    <ProductCard 
    imageUrl="https://pantproject.com/cdn/shop/products/mens-cargo-trousers_cffd3c61-8b45-4aa0-befc-a213693ee983.jpg?v=1666978738" 
    productName="Pant" 
    price="$299.99" 
      />
    <ProductCard 
    imageUrl="https://godevil.in/cdn/shop/products/never-give-up-in-green-printed-black-oversized-t-shirt-for-men-707138.jpg?v=1695318190" 
    productName="Men's T-Shirt" 
    price="$99.99" 
      />
    <ProductCard 
    imageUrl="https://www.montecarlo.in/cdn/shop/products/1230508TN-2432-38_2.jpg?v=1699534038&width=1100" 
    productName="Men's Pullover/Sweater" 
    price="$259.99" 
      />
     </div>
     <div className="flex justify-center mt-8">
      <ViewMoreButton />
    </div>
    <div className='flex justify-center items-center text-3xl tracking-wide text-primary-600 border-primary-600 py-6'>Women's Collection</div>
    <div className='flex justify-center items-center gap-10'>
     <ProductCard 
    imageUrl="https://levi.in/cdn/shop/files/A39230002_01_Front_36aa9385-0714-44f8-a33e-f30904da673f.jpg?v=1712742695" 
    productName="Women's Sweater" 
    price="$199.99" 
      />
    <ProductCard 
    imageUrl="https://www.libas.in/cdn/shop/files/1_2.jpg?v=1713936322&width=1080" 
    productName="Women's Dress" 
    price="$299.99" 
      />
    <ProductCard 
    imageUrl="https://itminan.in/cdn/shop/files/kur-f60-rp-tp2-4014_31.jpg?v=1707059687&width=2688" 
    productName="Women's Top" 
    price="$99.99" 
      />
    <ProductCard 
    imageUrl="https://mlada.in/cdn/shop/files/red-rayon-palazzo-100-rayon-liva-certified-652875.jpg?v=1729222285&width=2048" 
    productName="Women's Palazzo Pants" 
    price="$259.99" 
      />
     </div>
     <div className="flex justify-center mt-8">
      <ViewMoreButton />
    </div>
     <div className='flex justify-center items-center text-3xl tracking-wide text-primary-600 border-primary-600 py-6'>Kid's Collection</div>
    <div className='flex justify-center items-center gap-10'>
     <ProductCard 
    imageUrl="https://homafy.com/wp-content/uploads/2024/05/kids-printed-nightsuit-2.webp" 
    productName="Kid's Printed Shirt" 
    price="$199.99" 
      />
    <ProductCard 
    imageUrl="https://www.foreverkidz.in/cdn/shop/files/Blushing_Pink_Party_Dress-5015016.jpg?crop=center&height=2100&v=1730113131&width=1500" 
    productName="Kid's Birthday Dress" 
    price="$299.99" 
      />
    <ProductCard 
    imageUrl="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/b/k/bkpa0010.jpg" 
    productName="Kid's Traditional Wear" 
    price="$99.99" 
      />
    <ProductCard 
    imageUrl="https://fastcolors.in/cdn/shop/files/fastcolors-NEW_YORK-printed-kids_t_shirt_-_FastColors-4952449.jpg?v=1729850035" 
    productName="Kid's T-shirt" 
    price="$259.99" 
      />
     </div>
     <div className="flex justify-center mt-8 px-4">
      <ViewMoreButton />
    </div>
     <div className='flex justify-center items-center text-3xl tracking-wide text-primary-600 border-primary-600 py-6'>Unisex's Collection</div>
    <div className='flex justify-center items-center gap-10'>
     <ProductCard 
    imageUrl="https://images.bestsellerclothing.in/data/only/2-aug-2023/283106401_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" 
    productName="Unisex Shirt" 
    price="$199.99" 
      />
    <ProductCard 
    imageUrl="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a5de78f9d7f463a8682f0bc340378eb_9366/adidas-basketball-spacer-track-pants-gender-neutral.jpg" 
    productName="Unisex Pant" 
    price="$299.99" 
      />
    <ProductCard 
    imageUrl="https://img01.ztat.net/article/spp-media-p1/468721913c234f8d99ef5fb3689d9fa6/64eb63d8f8e244a1a8cbeeb7e4b213d3.jpg?imwidth=1800" 
    productName="Unisex Sweatshirt" 
    price="$99.99" 
      />
    <ProductCard 
    imageUrl="https://shipy.in/cdn/shop/products/unisex-heavy-blend-hoodie-black-600425d8351b2_1024x1024.jpg?v=1618304822" 
    productName="Unisex Hoodie Black" 
    price="$259.99" 
      />
     </div>
     <div className="flex justify-center mt-8">
      <ViewMoreButton />
    </div>
     </div>
  )
}

export default LandingPage;