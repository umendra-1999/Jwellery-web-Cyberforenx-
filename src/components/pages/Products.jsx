import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../reusablecomponents/Header';
import Footer from '../../reusablecomponents/Footer';

const productsData = [
  { id: 1, name: "Everyday Charm Diamond Stud Earrings", price: 40721, img: "images/product-page-image/pro1.webp" },
  { id: 2, name: "Contemporary solitaire Look Diamond", price: 32712, img: "images/product-page-image/pro2.webp" },
  { id: 3, name: "Trefle Drop Earings", price: 80375, img: "images/product-page-image/pro3.webp" },
  { id: 4, name: "Charming Paisley Pendant", price: 40412, img: "images/product-page-image/pro4.webp" },
  { id: 5, name: "Glorious 22 karat yellow gold", price: 22096, img: "images/product-page-image/pro5.webp" },
  { id: 6, name: "Breathtaking 22 karat Yellow Gold", price: 48160, img: "images/product-page-image/pro6.webp" },
  { id: 7, name: "Brilliant 22 Karat Gold And Ruby..", price: 32286, img: "images/product-page-image/pro7.webp" },
  { id: 8, name: "Floral Diamond Nose Pin", price: 13924, img: "images/product-page-image/pro8.webp" },
  { id: 9, name: "Dazzling Diamond Mangalsutra", price: 80823, img: "images/product-page-image/pro9.webp" },
  { id: 10, name: "Graceful Beaded Mangalsutra", price: 138313, img: "images/product-page-image/pro10.webp" }
];

const Products = () => {
  const [products, setProducts] = useState(productsData);

  const handleSortLowToHigh = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const handleSortHighToLow = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  return (
    <>
    <Header/>
      <section className="relative bg-[url('https://whitegold.money/content/cms/image-68-compressed-scaled.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          My Products
        </h1>
      </section>
      <div className="flex gap-6 mx-6 mb-4 mt-6 ">
        <button
          className='px-4 py-2 bg-rose-600 text-white rounded-lg shadow-md'
          onClick={handleSortLowToHigh}
        >
          Price: Low to High
        </button>
        <button
          className='px-4 py-2 bg-rose-600 text-white rounded-lg shadow-md'
          onClick={handleSortHighToLow}
        >
          Price: High to Low
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 bg-rose-100'>
        {products.map(item => (
          <div key={item.id} className='text-center rounded-3xl shadow-2xl bg-gray-200'>
            <Link to={`/products/${item.id}`}>
              <img className='p-12 hover:scale-95' src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>₹ {item.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Products;
