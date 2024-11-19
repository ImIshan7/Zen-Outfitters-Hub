import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ChevronDown, Compass, Shield, Wind } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const backgroundImages = [
    {
        url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        subtitle: ""
    },
    {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        subtitle: ""
    },
    {
        url: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        subtitle: ""
    }
];

const features = [
    {
        icon: Compass,
        title: "Expert Guidance",
        description: "Professional advice for your adventures"
    },
    {
        icon: Shield,
        title: "Quality Gear",
        description: "Premium equipment you can trust"
    },
    {
        icon: Wind,
        title: "Nature First",
        description: "Sustainable outdoor solutions"
    }
];

export default function Hero() {
    return (
        <div id="home" className="relative min-h-screen">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className} !w-2 !h-2 !bg-white/50 hover:!bg-white"></span>`;
                    },
                }}

                loop={true}
                className="absolute inset-0"
            >
                {backgroundImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative h-screen"
                        >
                            <img
                                src={image.url}
                                alt={image.subtitle}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="absolute bottom-16 left-8 sm:left-16 text-white"
                            >
                                <h2 className="text-xl sm:text-3xl font-bold leading-tight">
                                    {image.subtitle}
                                </h2>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
                >
                    Premium Camping Gear
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-lg sm:text-2xl text-gray-300"
                >
                    Experience the perfect blend of comfort and wilderness.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-8 flex flex-wrap gap-4 justify-center"
                >
                    <button
                        className="px-6 py-3 text-lg font-semibold bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition"
                        onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Collection
                    </button>
                    <button
                        className="px-6 py-3 text-lg font-semibold bg-gray-100 text-emerald-600 rounded-full shadow-lg hover:bg-gray-200 transition"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Learn More
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 w-full flex justify-center"
            >
                <button
                    className="text-gray-300 hover:text-white"
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <ChevronDown className="h-6 w-6 animate-bounce" />
                </button>
            </motion.div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-20 custom-pagination" />
        </div>
    );
}
