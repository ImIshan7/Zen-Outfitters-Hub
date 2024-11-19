import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import About from './components/About';
import BestSellers from './components/BestSellers';
import PromoSection from './components/PromoSection';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Community from './components/Community';
import Contact from './components/Contact';
import LiveChat from './components/LiveChat';
import SpecialOffers from './components/SpecialOffers';
import { CartProvider } from './context/ CartContext';

function App() {
  return (
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Toaster position="top-right" />
          <Navbar />
          <Hero />
          <ProductCategories />
          <About />
          <BestSellers />
          <SpecialOffers />
          <PromoSection />
          <Testimonials />
          <Blog />
          <Gallery />
          <FAQ />
          <Community />
          <Contact />
          <LiveChat />

          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-montserrat">Zen Outfitters</h3>
                  <p className="text-gray-400">Your trusted partner for mindful outdoor adventures</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                  <p className="text-gray-400 mb-4">Subscribe for exclusive offers and outdoor tips</p>
                  <div className="flex">
                   {/* <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                    />
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700">
                      Subscribe
                    </button>*/}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2024 Zen Outfitters. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
  );
}

export default App;