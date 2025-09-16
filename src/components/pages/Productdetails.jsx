import { useParams } from 'react-router-dom';
import Header from '../../reusablecomponents/Header';
import Footer from '../../reusablecomponents/Footer';

const productsData = [
 { id: 1, name: "Everyday Charm Diamond Stud Earrings", price: 40721, img: "/images/product-page-image/pro1.webp", description:"Transcend the ordinary with these diamond stud earrings in 18 karat rose gold, a stunning upgrade to your go-to looks. Stone Clarity: I1-I2.,,Experience the enchantment of simplicity, adorned with a touch of refined elegance and luxury in these diamond stud earrings. Their dainty style speaks volumes, transforming every moment into a radiant celebration. ", Metalsdetail:" 18K : Karatage, Rose : Material, Colour ,2.136g : Gross Weight ,Gold : Metal ,2.4 cm : Earring Height ,1.5 cm : Earring Width", related1:"/images/related-images/pd11.webp",related2:"/images/related-images/pd12.jpg"},

  { id: 2, name: "Contemporary solitaire Look Diamond", price: 32712, img: "/images/product-page-image/pro2.webp",Metalsdetail:"18K:Karatage,Yellow:Material Colour,1.672g:Gross Weight,Gold : Metal,9mm : Height,10mm : Width.", description:"Solitaire Look Geometric Diamond Stud Earrings crafted in 18 Karat High Polish Yellow Gold and studded with Diamonds. Stone clarity SI2.If you're looking for a sophisticated, lovely addition to your earring collection, pick these sublime geometric diamond stud earrings. This pair is the perfect add-on to your sharp work wear.",related1:"/images/related-images/pd21.jpg",related2:"/images/related-images/pd22.jpg" },

  { id: 3, name: "Trefle Drop Earings", price: 80375, img: "/images/product-page-image/pro3.webp",Metalsdetail:"22K : Karatage,Yellow : Material Colour,6.233g : Gross Weight,Gold : Metal,3.9 cm : Earring Height,1 cm : Earring Width." ,description:"Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold. Adorn yourself with these gold drop earrings, where the mirthful design and minimalist elegance creates an everlasting radiance. Crafted for the women who revel in modern elegance.", related1:"/images/related-images/pd31.webp",related2:"/images/related-images/pd32.webp" },

  { id: 4, name: "Charming Paisley Pendant", price: 40412, img: "/images/product-page-image/pro4.webp" , Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.059g : Gross Weight,Gold : Metal,4.3 cm :  Pendant Height,1.5 cm : Pendant Width"  , description:"The charm of nature is captured beautifully in this paisley pendant crafted in 22 karat yellow gold, in rhodium finish Spruce up your daily wear with this paisley pendant and flaunt it everywhere you go. The chain in the image is for representative purpose only and the actual product comes without a chain.",related1:"/images/related-images/pd42.webp",related2:"/images/related-images/pd41.webp" },

  { id: 5, name: "Glorious 22 karat yellow gold Ring", price: 22096, img: "/images/product-page-image/pro5.webp" , Metalsdetail:"22K : Karatage,Yellow : Material Colour,1.864g : Gross Weight,Gold : Metal,16.40 MM : Size,16.8 mm : Width" ,description:"This ornate 22 Karat yellow gold ring shows a 4 petaled gold hibiscus nestled in 4 exquisitely carved leaves, held by 2 polished prongs on either side Keep your happy face on everyday with this marvellous ring, as its charming design is bound to bring you endless joy! It can be worn daily and is suitable for all outfits.",related1:"/images/related-images/pd52.webp",related2:"/images/related-images/pd51.webp" },

  { id: 6, name: "Breathtaking 22 karat Yellow Gold Ring", price: 48160, img: "/images/product-page-image/pro6.webp", Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.631g : Gross Weight,Gold : Metal,16.40 MM : Size" ,description:"This eye-pleasing 22 Karat ring features a glossy yellow gold finish, enveloping blooming floral motif accented with leaf cutouts",related1:"/images/related-images/pd61.webp",related2:"/images/related-images/pd62.webp" },

  { id: 7, name: "Brilliant 22 Karat Gold And Ruby Ring..", price: 32286, img: "/images/product-page-image/pro7.webp",Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.631g : Gross Weight,Gold : Metal,16.40 MM : Size" ,description:"This arresting 22 Karat gold ring features 2 superimposed marquise-cut ruby flowers of 5 and 10 petals each, with a delicate gold bead at the center Wear this ring's elegant ruby-studded floral design for any occasion and cast an alluring spell upon onlookers.",related1:"/images/related-images/pd71.webp",related2:"/images/related-images/pd72.webp" },

  { id: 8, name: "Floral Diamond Nose Pin", price: 13924, img: "/images/product-page-image/pro8.webp" , Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.631g : Gross Weight,Gold : Metal,16.40 MM : Size"   ,description:"Five Diamonds precisely set to give this nose pin an edgy style. Crafted in 18 Karat Yellow Gold for your everyday styles. Stone Clarity I1I2 , For an over the top casual style statement here is a nose pin for your everyday wear with five sparkling diamonds." , related1:"/images/related-images/pd82.webp",related2:"/images/related-images/pd81.webp" },

  { id: 9, name: "Dazzling Diamond Mangalsutra", price: 80823, img: "/images/product-page-image/pro9.webp" , Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.631g : Gross Weight,Gold : Metal,16.40 MM : Size", description:"Bedazzle everyone with the shine of this mangalsutra, crafted in 18 karat rose gold, studded with diamonds. Stone Clarity: SI2 All eyes will be on you as you show off the beauty and strength of your love and companionship on your special day with this mangalsutra.",related1:"/images/related-images/pd91.webp", related2:"/images/related-images/pd92.jpg" },

  { id: 10, name: "Graceful Beaded Mangalsutra", price: 138313, img: "/images/product-page-image/pro10.webp", Metalsdetail:"22K : Karatage,Yellow : Material Colour,3.631g : Gross Weight,Gold : Metal,16.40 MM : Size",description:"Cherish your vows with your partner with this graceful, beaded mangalsutra, crafted in 22 karat yellow gold There is nothing more precious than a token that represents the promise of love. This mangalsutra will make for a stunning symbol of your love." ,related1:"/images/related-images/pd10.webp" ,related2:"/images/related-images/pd101.webp" }
];

const Productdetails = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
//   const navigate = useNavigate();

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    
    const Cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    
    const ProductIndex = Cart.findIndex(item => item.id === product.id);

    if (ProductIndex !== -1) {
      
      Cart[ProductIndex].quantity += 1;
    } else {
      
      Cart.push({...product, quantity: 1});
    }

    
    localStorage.setItem('cartItems', JSON.stringify(Cart));

    
    // navigate('/cart');
  };

  return (
    <>
      <Header />
        <section className="relative bg-[url('https://whitegold.money/content/cms/image-68-compressed-scaled.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
        Products
        </h1>
      </section>
      <div className='bg-rose-100 mt-0.5'>
      <div className="p-8 rounded-4xl shadow-2xl bg-gray-300 w-full max-w-screen-xl mx-auto">
        <img src={product.img} alt={product.name} className="mb-6 w-full md:w-1/2 mx-auto" />
        <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>
        <p className="mb-2 text-center">₹ {product.price}</p>
         <div className="flex justify-center mt-6">
          <button 
            onClick={handleAddToCart}
            className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
            aria-label="Add to Cart"
          >
            + Add to Cart
          </button>
        </div>
        <p className="mb-2"><span className="font-bold text-xl">Metal Details:</span><br />{product.Metalsdetail}</p>
        <p className="mb-2 text-xl"><span className="font-bold text-3xl">Description:</span><br />{product.description}</p>

       

        <h1 className="mt-20 font-semibold italic text-3xl text-center">Related Items</h1>
        <div className="flex flex-wrap gap-10 justify-center w-full">
          <img className="hover:scale-90 rounded-4xl w-40 md:w-48" src={product.related1} alt={`Related to ${product.name}`} />
          <img className="hover:scale-90 rounded-4xl w-40 md:w-48" src={product.related2} alt={`Related to ${product.name}`} />
        </div>
      </div>
      <p className="w-full border-2"></p>
      </div>
      <Footer />
    </>
  );
};

export default Productdetails;
