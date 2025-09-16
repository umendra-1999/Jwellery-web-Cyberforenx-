import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../reusablecomponents/Footer";
import Header from "../../reusablecomponents/Header";

const About = () => {
  return (
    <>
    <Header/>
    <div className="bg-rose-50 text-gray-800">
      
      <section className="relative bg-[url('https://whitegold.money/content/cms/image-68-compressed-scaled.jpg')] bg-cover bg-center h-72 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          About Us
        </h1>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Crafting Elegance Since 1995
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Lustre Jewels</span>, where timeless tradition
          meets modern artistry. For over two decades, we have been dedicated to
          creating jewelry that celebrates life’s most precious moments. From
          delicate everyday pieces to statement collections, we believe every
          jewel tells a story.
        </p>
      </section>

      
      <section className="bg-rose-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To design jewelry that embodies elegance, quality, and trust,
              making every customer feel special and valued.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Craft</h3>
            <p className="text-gray-600">
              Every piece is handcrafted with care, blending traditional
              techniques with modern design to create unique treasures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
            <p className="text-gray-600">
              We promise certified quality, ethical sourcing, and timeless
              beauty in every creation we offer.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Discover Jewelry That Defines You
        </h2>
        <p className="text-gray-600 mb-8">
          Explore our exclusive collections and find the perfect jewel to
          celebrate your journey.
        </p>
        <Link to='/products'
          className="bg-yellow-600 text-white px-6 py-3 rounded-md shadow hover:bg-yellow-700 transition">
          Explore Collection
          </Link>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;

