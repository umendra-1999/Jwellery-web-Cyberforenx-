// // import { useEffect, useState } from 'react'
// // import Header from '../../reusablecomponents/Header'

// // // Custom prices for overriding the dollar price by using the index number ....
// // const CUSTOM_PRICES = {
// //   5: 1999,
// //   6: 10499,
// //   7: 289999,
// //   8: 98999,
// // };

// // const Products = () => {
// //   const [products, setProducts] = useState([]);
// //   const [sortOrder, setSortOrder] = useState(null); 

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/products/category/jewelery") // this is a API for the products and details of products 
// //       .then(res => res.json())
// //       .then(data => setProducts(data))
// //       .catch(error => {
// //         console.error("Failed to fetch products:", error);
// //       });
// //   }, []);

// //   // the function here i write for the override of custome price 
// //   const getPrice = (product) =>
// //     CUSTOM_PRICES[product.id] !== undefined ? CUSTOM_PRICES[product.id] : product.price;

// //   //function to do sorting of products
// //   const sortedProducts = [...products];
// //   if (sortOrder === 'asc') {
// //     sortedProducts.sort((a, b) => getPrice(a) - getPrice(b));
// //   } else if (sortOrder === 'desc') {
// //     sortedProducts.sort((a, b) => getPrice(b) - getPrice(a));
// //   }

// //   return (
// //     <>
// //       <Header />
// //       <div className="px-8 py-4">
// //  {/* Buttons to set price sorting  */}
// //           <div className="mb-8 flex gap-4">
// //           <button
// //             onClick={() => setSortOrder('asc')}
// //             className={`border-2 rounded-md px-4 py-2 font-semibold hover:bg-gray-100 transition ${
// //               sortOrder === 'asc' ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-700'
// //             }`}
// //           >
// //             Price: Low to High
// //           </button>
// //           <button
// //             onClick={() => setSortOrder('desc')}
// //             className={`border-2 rounded-md px-4 py-2 font-semibold hover:bg-gray-100 transition ${
// //               sortOrder === 'desc' ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-700'
// //             }`}
// //           >
// //             Price: High to Low
// //           </button>
// //         </div>

// //         <div
// //           className="grid gap-6"
// //           style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
// //         >
// //           {sortedProducts.map((product) => {
// //             const price = getPrice(product);
// //             return (
// //               <div
// //                 key={product.id}
// //                 className="border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm"
// //               >
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   className="w-full h-36 object-contain mb-3"
// //                 />
// //                 <h3 className="text-lg font-medium mb-2">{product.title}</h3>
// //                 <p className="text-gray-600 text-base">₹{price}</p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Products;


// import React from 'react'
// import {Link} from 'react-router-dom'

// const Products = () => {
//   return (
//     <>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 bg-rose-100'>
//       <div className='text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link >
//         <img className='p-12 ' src="images\product page  image\pro1.webp" alt="" />
//          <p>Everyday Charm Diamond Stud Earrings</p>
//         <p>₹ 40721</p>
//         </Link>
//       </div>
//       <div className=' text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro2.webp" alt="" />
//          <p>Contemporary solitaire Look Diamond</p>
//         <p>₹ 32712</p>
//         </Link>
//       </div>
//       <div className=' text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro3.webp" alt="" />
//          <p>Trefle Drop Earings</p>
//         <p>₹ 80375</p>
//         </Link>
//       </div>
//       <div className=' text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro4.webp" alt="" />
//          <p>Charming Paisley Pendant</p>
//         <p>₹ 40412</p>
//         </Link>
//       </div>
//       <div className=' text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro5.webp" alt="" />
//          <p>Glorious 22 karat yellow gold</p>
//         <p>₹ 22096</p>
//         </Link>
//       </div>
//       <div className='text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro6.webp" alt="" />
//          <p>Breathtaking 22 karat Yellow Gold</p>
//         <p>₹ 48160</p>
//         </Link>
//       </div>
//       <div className='text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro7.webp" alt="" />
//          <p>Brilliant 22 Karat Gold And Ruby..</p>
//         <p>₹ 32286</p>
//         </Link>
//       </div>
//       <div className='text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro8.webp" alt="" />
//          <p>Floral Diamond Nose Pin</p>
//         <p>₹ 13924</p>
//         </Link>
//       </div>
//       <div className='text-center rounded-3xl shadow-2xl bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro9.webp" alt="" />
//          <p>Dazzling Diamond Mangalsutra</p>
//         <p>₹ 80823</p>
//         </Link>
//       </div>
//       <div className=' rounded-3xl shadow-2xl text-center bg-gray-200 '>
//         <Link>
//         <img className='p-12' src="images\product page  image\pro10.webp" alt="" />
//          <p>Graceful Beaded Mangalsutra</p>
//         <p>₹ 138313</p>
//         </Link>
//       </div>
//       </div>
//     </>
//   )
// }

// export default Products


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
