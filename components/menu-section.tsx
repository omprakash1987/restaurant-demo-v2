'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const menuItems = [
  {
    id: 1,
    name: 'Hyderabadi Biryani',
    price: '₹199',
    desc: 'Aromatic basmati rice with tender meat, saffron, and authentic spices',
    image: '/biryani.png',
    spice: '★★★☆☆',
  },
  {
    id: 2,
    name: 'Butter Chicken',
    price: '₹249',
    desc: 'Creamy tomato curry with tender chicken, garnished with cilantro',
    image: '/butter-chicken.png',
    spice: '★★☆☆☆',
  },
  {
    id: 3,
    name: 'Tandoori Chicken',
    price: '₹229',
    desc: 'Spiced marinated chicken with charred grill marks and fresh lemon',
    image: '/tandoori-chicken.png',
    spice: '★★★★☆',
  },
  {
    id: 4,
    name: 'Paneer Tikka',
    price: '₹189',
    desc: 'Grilled cottage cheese with peppers, onions, and mint chutney',
    image: '/paneer-tikka.png',
    spice: '★★★☆☆',
  },
  {
    id: 5,
    name: 'Masala Dosa',
    price: '₹159',
    desc: 'Crispy crepe with spiced potato filling, served with sambar and chutney',
    image: '/masala-dosa.png',
    spice: '★★☆☆☆',
  },
];

export function MenuSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold mb-4">
            Our Specialties
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Signature Dishes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Authentic Indian flavors prepared with traditional recipes and premium ingredients
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur border border-border/50 overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>

                  {/* Spice Level */}
                  <div className="flex justify-between items-center pt-2 border-t border-border/30">
                    <span className="text-accent text-sm">{item.spice}</span>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>

                  {/* Order Button */}
                  <a
                    href={`https://wa.me/919891113214?text=Hi%20Tandoori%20Delights%2C%20I%20would%20like%20to%20order%20${item.name}%20for%20${item.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg text-center transition-all text-sm"
                  >
                    Order Now
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
