import React from "react";
import Footer from "../../reusablecomponents/Footer";
import Header from "../../reusablecomponents/Header";

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="bg-rose-50 text-gray-800">
      
      <section className="relative bg-[url('https://whitegold.money/content/cms/image-68-compressed-scaled.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
          <p className="text-gray-600">
             Jewels<br />123 Sparkle Street<br />Uttar Pradesh, India
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Call Us</h3>
          <p className="text-gray-600">+91 9628192156</p>
          <p className="text-gray-600">Mon - Sat: 10am - 7pm</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Email Us</h3>
          <p className="text-gray-600">support@jewels.com</p>
        </div>
      </section>
      <p className="w-full border border-red-900"></p>

    
      <section className="bg-rose-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="grid gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-2 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-2 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border-2 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              onClick={() => alert('Submiited')}
              type="submit"
              className="bg-yellow-600 text-white px-6 py-3 rounded-md shadow hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    
    </div>
    <Footer/>
    </>
  );
};

export default Contact;

