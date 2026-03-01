import React from 'react';
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
              <li><a href="/weddings" className="hover:text-primary transition-colors">Wedding Photography</a></li>
              <li><a href="/proposals" className="hover:text-primary transition-colors">Engagement Shoots</a></li>
              <li><a href="/birthdays" className="hover:text-primary transition-colors">Event Videography</a></li>
              <li><a href="/corporate" className="hover:text-primary transition-colors">Corporate Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>1209 Mountain Road PL NE STE R, Albuquerque, NM 87110</span>
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
            {/* Payment Card Logos */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <span className="text-muted-foreground text-xs tracking-wide uppercase w-full mb-1">Accepted Payments</span>
              {/* Visa */}
              <div className="bg-white rounded-md flex items-center justify-center border border-white/10" style={{ width: '48px', height: '30px' }}>
                <svg viewBox="0 0 48 30" width="44" height="26" aria-label="Visa"><rect width="48" height="30" rx="4" fill="#1A1F71" /><text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="13" fill="#FFFFFF">VISA</text></svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded-md flex items-center justify-center border border-white/10" style={{ width: '48px', height: '30px' }}>
                <svg viewBox="0 0 48 30" width="44" height="26" aria-label="Mastercard"><rect width="48" height="30" rx="4" fill="#252525" /><circle cx="18" cy="15" r="9" fill="#EB001B" /><circle cx="30" cy="15" r="9" fill="#F79E1B" /><path d="M24 8.27a9 9 0 010 13.46A9 9 0 0124 8.27z" fill="#FF5F00" /></svg>
              </div>
              {/* Amex */}
              <div className="bg-white rounded-md flex items-center justify-center border border-white/10" style={{ width: '48px', height: '30px' }}>
                <svg viewBox="0 0 48 30" width="44" height="26" aria-label="American Express"><rect width="48" height="30" rx="4" fill="#2E77BC" /><text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="8.5" fill="#FFFFFF">AMEX</text></svg>
              </div>
              {/* Discover */}
              <div className="bg-white rounded-md flex items-center justify-center border border-white/10" style={{ width: '48px', height: '30px' }}>
                <svg viewBox="0 0 48 30" width="44" height="26" aria-label="Discover"><rect width="48" height="30" rx="4" fill="#FFFFFF" stroke="#e5e7eb" /><text x="24" y="12" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="7" fill="#231F20">DISCOVER</text><circle cx="32" cy="19" r="7" fill="#F76F20" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Memoria Production LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

