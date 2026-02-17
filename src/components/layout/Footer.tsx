import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIALS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/my-logo.png" alt="Memoria" className="h-16" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Capturing life's most precious moments with cinematic elegance and timeless style. On-demand photography and videography services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/weddings" className="hover:text-primary transition-colors">Wedding Photography</Link></li>
              <li><Link to="/proposals" className="hover:text-primary transition-colors">Engagement Shoots</Link></li>
              <li><Link to="/birthdays" className="hover:text-primary transition-colors">Event Videography</Link></li>
              <li><Link to="/corporate" className="hover:text-primary transition-colors">Corporate Branding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>1209 Mountain Road PL NE STE R, Albuquerque</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+13239902599" className="hover:text-primary transition-colors">+1 (323) 990-2599</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@memoriaproduction.com" className="hover:text-primary transition-colors">info@memoriaproduction.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Memoria Production LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
