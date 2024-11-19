import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
// @ts-ignore
import { Product } from '../types';
import { useCart } from '../context/ CartContext';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-emerald-600">${product.price}</span>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        <span>Add to Cart</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}