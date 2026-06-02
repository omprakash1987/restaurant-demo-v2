'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Food Blogger',
    content:
      'Tandoori Delights serves the most authentic Indian cuisine I have tasted in years. Every spice is perfectly balanced and the flavors are incredible!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Chef & Culinary Expert',
    content:
      'The biryani here is exceptional - aromatic, flavorful, and prepared with traditional techniques. I am impressed by their dedication to authenticity.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Regular Customer',
    content:
      'The butter chicken is absolutely divine! Fresh ingredients, quick delivery on WhatsApp, and consistently excellent service. My new favorite restaurant!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            Customer Reviews
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Loved by Our Customers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying authentic Indian cuisine
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur border border-border/50 p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed italic flex-grow">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-border/30 pt-6">
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
