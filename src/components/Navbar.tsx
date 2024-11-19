import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Tent, Search } from 'lucide-react';
import { useCart } from '../context/ CartContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();
    const [activeSection, setActiveSection] = useState('home');

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 flex items-center cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        >
                            <Tent className="h-8 w-8 text-emerald-600" />
                            <span className="ml-2 text-2xl font-bold text-gray-800 font-montserrat">
                Zen Outfitters
              </span>
                        </motion.div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`text-gray-700 hover:text-emerald-600 font-medium ${activeSection === 'home' ? 'text-emerald-600' : ''}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('products')}
                            className={`text-gray-700 hover:text-emerald-600 font-medium ${activeSection === 'products' ? 'text-emerald-600' : ''}`}
                        >
                            Shop
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className={`text-gray-700 hover:text-emerald-600 font-medium ${activeSection === 'gallery' ? 'text-emerald-600' : ''}`}
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`text-gray-700 hover:text-emerald-600 font-medium ${activeSection === 'about' ? 'text-emerald-600' : ''}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`text-gray-700 hover:text-emerald-600 font-medium ${activeSection === 'contact' ? 'text-emerald-600' : ''}`}
                        >
                            Contact
                        </button>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative cursor-pointer"
                        >
                            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-emerald-600" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
                            )}
                        </motion.div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-emerald-600"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 rounded-lg bg-gray-100 mb-2"
                            />
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">Home</button>
                            <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">Shop</button>
                            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">Gallery</button>
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">About</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}