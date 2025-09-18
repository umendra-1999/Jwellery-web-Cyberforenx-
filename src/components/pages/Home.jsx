import React from 'react'
import Header from '../../reusablecomponents/Header'
import Footer from '../../reusablecomponents/Footer'

const Home = () => {
  return (
    <>
      <Header />
        <section className="relative bg-[url('https://whitegold.money/content/cms/image-68-compressed-scaled.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Home
        </h1>
      </section>
      
      <div className='flex flex-col md:flex-row bg-rose-200 p-4 md:p-8 gap-6'>
        <img
          src="images/image for herosection/img2.jpg"
          alt=""
          className='rounded-3xl mt-5 md:mt-0 md:ml-5 w-full md:w-1/2 object-cover'
        />
        <div className='flex flex-col justify-center items-start md:ml-5 w-full md:w-1/2'>
          <p className='text-2xl md:text-3xl italic font-mono mt-4 md:mt-40'>
            Add a touch of class to your wardrobe💍 <br /> with our stunning jewellery.
          </p>
          <img
            className='h-40 md:h-50 mt-6 rounded-4xl transition-transform duration-300 hover:scale-110 hover:rotate-4 w-full md:w-auto object-cover'
            src="images/image for herosection/img3.jpg"
            alt=""
          />
        </div>
      </div>

      <h1 className='text-3xl md:text-4xl font-semibold text-center p-4 bg-rose-300 italic'>
        Categories of our Products.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full p-6 md:p-10 bg-rose-200 place-items-center">
        {[
          { title: "Necklace", src: "images/image for featureproducts/necklace.jpg" },
          { title: "Rings", src: "images/image for featureproducts/rings.jpeg" },
          { title: "Bracelets", src: "images/image for featureproducts/bracelets.jpg" },
          { title: "Earrings", src: "images/image for featureproducts/earrings.webp" },
        ].map(({ title, src }) => (
          <div key={title} className="relative w-full max-w-xs h-64 md:h-80">
            <img
              src={src}
              alt={title}
              className="h-full w-full object-cover rounded-3xl transition-opacity duration-300 hover:opacity-75"
            />
            <h1 className="absolute bottom-2 left-4 text-white font-serif text-2xl md:text-3xl drop-shadow-md">
              {title}
            </h1>
          </div>
        ))}
      </div>

      <h1 className='p-6 text-center text-3xl md:text-4xl font-bold italic bg-rose-300'>
        # Trending Now
      </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-rose-200 p-4 md:p-10 place-items-center'>
        {[ 
          {
            imgSrc: "images/image for gridproducts/pro1.jpg",
            title: "24KT Yellow Gold Necklace",
            desc: "Women | Necklace",
            price: "₹ 4,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pr03.jpg",
            title: "24KT Gold Necklace Set",
            desc: "Women | Necklace",
            price: "₹ 40,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro6.webp",
            title: "24KT Gold Wedding Necklace",
            desc: "Women | Necklace",
            price: "₹ 104,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro2.jpg",
            title: "18KT Pure Gold Earrings",
            desc: "Women | Earrings",
            price: "₹ 10,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro8.jpg",
            title: "24kT Yellow Gold Earrings",
            desc: "Women | Earrings",
            price: "₹ 34,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro4.jpg",
            title: "Pure Diamond Ring",
            desc: "Women | Ring",
            price: "₹ 90,550.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro5.jpg",
            title: "16KT NosePin Gold.",
            desc: "Women | Nosepin",
            price: "₹ 14,150.00"
          },
          {
            imgSrc: "images/image for gridproducts/pro7.jpg",
            title: "24KT Gold/Diamond Ring",
            desc: "Women | Rings",
            price: "₹ 86,786.00"
          },
        ].map(({ imgSrc, title, desc, price }) => (
          <div key={title} className='border-4 w-full max-w-xs p-4 m-2 hover:scale-110 bg-black text-white rounded-lg transition-transform duration-300'>
            <img className='w-full rounded-4xl object-cover p-2' src={imgSrc} alt={title} />
            <h1 className='mt-2'>{title}</h1>
            <p>{desc}</p>
            <p className='text-red-700'>{price}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home;
