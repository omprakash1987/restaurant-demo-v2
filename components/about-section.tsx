'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/tandoori-hero.png"
              alt="Tandoori Delights Restaurant"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-5xl font-bold text-foreground mb-4">Crafted with Passion</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 15 years, Tandoori Delights has been serving authentic Indian cuisine to our community. 
              Our chefs bring traditional recipes from across India, prepared with premium ingredients and 
              time-honored cooking techniques.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Every dish is a celebration of flavors, aromas, and culinary artistry. We believe in providing 
              not just food, but an experience that transports you to the vibrant streets of India.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Signature Dishes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
