'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919891113214?text=Hi%20Tandoori%20Delights%2C%20I%20would%20like%20to%20place%20an%20order!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
      >
        <MessageCircle size={28} />
      </motion.div>
    </motion.a>
  );
}
