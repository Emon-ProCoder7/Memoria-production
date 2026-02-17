# Memoria Production - Project Outline

## Website Structure (4 Pages)

### 1. index.html - Homepage
**Purpose**: Create immediate impact and drive conversions
**Sections**:
- **Navigation Bar**: Fixed header with logo, menu items (Portfolio, About, Contact), and Book Now CTA
- **Hero Section**: Full-screen cinematic background with typewriter headline "Capturing Life's Masterpieces", subtext, and dual CTAs (Book Session, View Portfolio)
- **Services Preview**: Interactive cards for Weddings, Proposals, Birthdays, Corporate with hover effects
- **Statistics Animation**: Animated counters (500+ Weddings, 98% Reviews, 1000+ Happy Clients)
- **Portfolio Teaser**: Masonry grid of 6 best shots with lightbox functionality
- **Testimonials Carousel**: Auto-playing client reviews with photos and star ratings
- **Call-to-Action Section**: Service selector modal with instant quote calculator
- **Footer**: Contact info, social links, copyright

### 2. portfolio.html - Portfolio Gallery
**Purpose**: Showcase work quality and range of services
**Sections**:
- **Navigation Bar**: Same as homepage
- **Page Header**: "Our Masterpieces" with breadcrumb navigation
- **Filter Navigation**: Category buttons (All, Weddings, Proposals, Birthdays, Corporate, Behind-the-Scenes)
- **Gallery Grid**: Masonry layout with 20+ portfolio items
- **Lightbox Modal**: Full-screen image viewing with navigation
- **Project Details**: Expandable info panels for each project
- **Load More**: Infinite scroll or pagination
- **Footer**: Same as homepage

### 3. about.html - Company Story
**Purpose**: Build trust and emotional connection
**Sections**:
- **Navigation Bar**: Same as homepage
- **Hero Section**: Team photo or behind-the-scenes image
- **Company Story**: "The Memoria Difference" narrative with timeline
- **Team Showcase**: Photographer profiles with specialties and experience
- **Behind-the-Scenes**: Before/after image comparison sliders
- **Awards & Recognition**: Achievement badges and certifications
- **Process Overview**: 4-step workflow visualization
- **Equipment Showcase**: Professional gear display
- **Footer**: Same as homepage

### 4. contact.html - Booking & Contact
**Purpose**: Convert visitors into clients
**Sections**:
- **Navigation Bar**: Same as homepage
- **Page Header**: "Let's Create Magic Together"
- **Service Selector**: Interactive package builder
- **Booking Calendar**: Date picker with availability
- **Contact Form**: Integrated with service selection
- **Instant Quote**: Real-time pricing calculator
- **Location & Hours**: Embedded map and contact details
- **FAQ Section**: Common questions with expandable answers
- **Footer**: Same as homepage

## Interactive Components Implementation

### Component 1: Portfolio Gallery with Advanced Filtering
- **Technology**: Vanilla JS with CSS transitions
- **Features**: Multi-category filtering, smooth animations, lightbox viewing
- **Data**: 20+ portfolio items with categories, descriptions, client info

### Component 2: Service Selector & Booking System
- **Technology**: JavaScript with form validation
- **Features**: Package builder, date picker, instant quote, contact integration
- **Data**: Service packages, pricing tiers, add-on options

### Component 3: Testimonials Carousel
- **Technology**: Splide.js with auto-play
- **Features**: Client photos, ratings, smooth transitions, touch navigation
- **Data**: 8+ client testimonials with photos and event details

### Component 4: Before/After Comparison Sliders
- **Technology**: JavaScript drag interactions
- **Features**: Interactive reveal, multiple comparison sets, smooth animations
- **Data**: 4+ before/after image pairs showcasing editing process

## File Structure
```
/mnt/okcomputer/output/
├── index.html
├── portfolio.html
├── about.html
├── contact.html
├── main.js (shared JavaScript)
├── resources/ (images and assets)
│   ├── hero-bg.jpg
│   ├── portfolio/ (20+ images)
│   ├── team/ (team photos)
│   ├── testimonials/ (client photos)
│   └── behind-scenes/ (process images)
├── interaction.md
├── design.md
└── outline.md
```

## Content Requirements

### Text Content
- **Homepage**: ~800 words (headlines, service descriptions, testimonials)
- **Portfolio**: ~400 words (project descriptions, category explanations)
- **About**: ~1000 words (company story, team bios, process details)
- **Contact**: ~600 words (service descriptions, FAQ answers)

### Visual Content
- **Hero Images**: 4 cinematic backgrounds (one per page)
- **Portfolio Images**: 20+ high-quality wedding/event photos
- **Team Photos**: 3-4 professional photographer portraits
- **Behind-the-Scenes**: 8+ process and equipment images
- **Client Photos**: 8+ testimonial client portraits

### Interactive Data
- **Portfolio Items**: 20+ items with categories, descriptions, metadata
- **Service Packages**: 4 main services with pricing and options
- **Client Testimonials**: 8+ reviews with ratings and photos
- **Team Profiles**: 3-4 photographer bios with specialties

## Technical Implementation

### Core Libraries (7+ required)
1. **Anime.js**: Element animations and micro-interactions
2. **Splide.js**: Carousels and sliders
3. **Typed.js**: Typewriter effects for headlines
4. **ECharts.js**: Statistics visualization
5. **p5.js**: Background particle effects
6. **Splitting.js**: Text animation effects
7. **GLightbox**: Portfolio lightbox functionality

### Animation Strategy
- **Scroll Reveals**: Content appears as user scrolls (opacity 0.9 → 1.0)
- **Hover Effects**: 3D transforms, color transitions, scale effects
- **Loading States**: Smooth skeleton loading and transitions
- **Micro-interactions**: Button feedback, form validation, navigation

### Performance Optimization
- **Image Optimization**: WebP format with fallbacks, lazy loading
- **Code Splitting**: Modular JavaScript for faster loading
- **CSS Optimization**: Critical CSS inlined, non-critical deferred
- **Animation Performance**: GPU-accelerated transforms, 60fps target

This structure creates a comprehensive, professional website that showcases Memoria Production's expertise while providing multiple conversion opportunities throughout the user journey.