'use client';

import Link from 'next/link';
import { Github, Twitter, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white text-sm">
                TD
              </div>
              <h3 className="text-2xl font-bold text-foreground">Tandoori Delights</h3>
            </div>
            <p className="text-muted-foreground text-sm">Authentic Indian cuisine, crafted with passion and tradition.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#menu" className="text-muted-foreground hover:text-primary transition text-sm block">Menu</Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition text-sm block">About Us</Link>
              <Link href="#reviews" className="text-muted-foreground hover:text-primary transition text-sm block">Reviews</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition text-sm block">Contact</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919891113214" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hours</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mon-Sun: 11 AM - 11 PM<br />
              Always open for orders
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; 2024 Tandoori Delights. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
