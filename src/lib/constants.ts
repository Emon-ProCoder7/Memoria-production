import { Github, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export const IMAGES = {
  hero: {
    proposal: "https://images.unsplash.com/photo-1622604061314-28cfb3ac2544?q=80&w=2000&auto=format&fit=crop",
    wedding: "https://images.unsplash.com/photo-1617725479587-fe85eeb7306e?q=80&w=2000&auto=format&fit=crop",
    birthday: "https://images.unsplash.com/photo-1533294160622-d5fece3e080d?q=80&w=2000&auto=format&fit=crop",
  },
  gallery: [
    "https://images.unsplash.com/photo-1696238230265-6f4708cb4755?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561749747-8eada3d8ad5c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1721747994983-96d23e197487?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1765854638659-aa17a6b00543?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1689455613365-39fa7720e841?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626319529413-244216b73a53?q=80&w=800&auto=format&fit=crop",
  ],
  cutouts: {
    // Simulated cutout URLs (in reality we would use real PNGs)
    bride: "https://images.unsplash.com/photo-1617725479587-fe85eeb7306e?q=80&w=800&auto=format&fit=crop", 
  }
};

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
];

export const SOCIALS = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
];
