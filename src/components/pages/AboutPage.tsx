import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sliderRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const sliders = sliderRefs.current.filter(Boolean);

    const cleanupFns: Array<() => void> = [];

    sliders.forEach((slider) => {
      if (!slider) return;

      const handle = slider.querySelector('.slider-handle') as HTMLElement;
      const afterImg = slider.querySelector('.after-img') as HTMLElement;

      if (!handle || !afterImg) return;

      let isDragging = false;

      const startDrag = (e: MouseEvent | TouchEvent) => {
        isDragging = true;
        e.preventDefault();
      };

      const drag = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;

        const rect = slider.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

        handle.style.left = percentage + '%';
        afterImg.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
      };

      const stopDrag = () => {
        isDragging = false;
      };

      handle.addEventListener('mousedown', startDrag);
      handle.addEventListener('touchstart', startDrag);
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);

      cleanupFns.push(() => {
        handle.removeEventListener('mousedown', startDrag);
        handle.removeEventListener('touchstart', startDrag);
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="bg-warm-white text-charcoal">
      <Navbar />

      <div className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'} fixed inset-0 z-40 bg-warm-white pt-24 px-6`}>
        <div className="flex flex-col space-y-6 text-center">
          <a href="/" className="text-2xl text-charcoal hover:text-warm-gold">Home</a>
          <a href="/services" className="text-2xl text-charcoal hover:text-warm-gold">Services</a>
          <a href="/about" className="text-2xl text-warm-gold">About</a>
          <a href="/contact" className="text-2xl text-charcoal hover:text-warm-gold">Quote</a>
          <button
            onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1TDKt_HrwsDEel_E-aDzTZt_Pe2UIiJpuZGDF4Q6bbQgB8pKK6rxQ0SV_nObzC4w5hklH5Paz1?gv=true', '_blank')}
            className="bg-warm-gold text-white px-8 py-3 rounded-full text-xl"
          >
            Book Now
          </button>
        </div>
      </div>

      <section className="hero-bg-about h-96 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        <div className="absolute top-20 right-20 floating-element opacity-20">
          <div className="w-20 h-20 border-2 border-warm-gold rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-16 floating-element opacity-15" style={{ animationDelay: '-2s' }}>
          <div className="w-16 h-16 bg-warm-gold rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              The Memoria Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Passionate artists dedicated to capturing life's most precious moments with cinematic elegance and
              timeless style.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-taupe/30">
        <div className="container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-charcoal/70">
            <a href="/" className="hover:text-warm-gold transition-colors">Home</a>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-warm-gold font-semibold">About</span>
          </nav>
        </div>
      </section>

      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">The Memoria Difference</h2>
            <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
              We don't just take photos; we create art. Our signature style involves isolating your most precious
              moments,
              creating stunning, clean visuals that focus entirely on the emotion and connection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Our Philosophy</h3>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                Founded in 2018, Memoria Production was born from a simple belief: every moment deserves to be
                captured with
                the same artistic excellence you'd see in a luxury magazine. We combine technical mastery with
                emotional
                intelligence to create images that don't just document events, but tell stories.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                Our approach is rooted in the understanding that the best photographs happen when people forget
                the camera
                is there. We blend into your celebration, capturing authentic moments as they unfold naturally.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-warm-gold">500+</div>
                  <div className="text-charcoal/70">Weddings Captured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-warm-gold">98%</div>
                  <div className="text-charcoal/70">5-Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-warm-gold">6</div>
                  <div className="text-charcoal/70">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/memoria/resources/memoria-watermark.jpg"
                alt="Professional photographer at work" className="w-full rounded-2xl shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-warm-gold text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-serif font-bold">Artistry</div>
                <div className="text-warm-gold/90">Meets Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Our Process</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure every step of your journey with us is
              seamless and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="process-step text-center">
              <div className="w-20 h-20 bg-warm-gold rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We begin with a detailed consultation to understand your vision, preferences, and specific
                requirements for your special day.
              </p>
            </div>

            <div className="process-step text-center">
              <div className="w-20 h-20 bg-sage rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Planning</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Detailed timeline creation, shot list development, and coordination with other vendors to ensure
                flawless execution.
              </p>
            </div>

            <div className="process-step text-center">
              <div className="w-20 h-20 bg-sage rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Capture</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Professional coverage of your event with artistic vision, technical excellence, and discrete
                presence.
              </p>
            </div>

            <div className="process-step text-center">
              <div className="w-20 h-20 bg-warm-gold rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Delivery</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Carefully curated and professionally edited images delivered in a beautiful online gallery
                within 2-3 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage/10 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">The Art of Editing</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              See how we transform raw captures into artistic masterpieces through professional editing and color
              grading.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-6">Golden Hour Enhancement</h3>
              <div className="comparison-slider h-80 mb-4" ref={(el) => { sliderRefs.current[0] = el; }}>
                <img src="https://kimi-web-img.moonshot.cn/img/files.worldsbestweddingphotos.com/83c78583606faafd7b06f24df94cb69d05fc557b.jpg"
                  alt="Before editing" className="before-img" />
                <img src="https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/4f9243c62d679dc54ea34437a3d99688cfddd8ea.jpeg"
                  alt="After editing" className="after-img" />
                <div className="slider-handle"></div>
              </div>
              <p className="text-charcoal/70">Drag the slider to see the transformation. We enhance natural light,
                adjust colors, and create cinematic mood.</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-6">Color Grading Magic</h3>
              <div className="comparison-slider h-80 mb-4" ref={(el) => { sliderRefs.current[1] = el; }}>
                <img src="https://kimi-web-img.moonshot.cn/img/www.brides.com/94700a9cb8694df61f91cfb411ba5322d496d413.jpg"
                  alt="Before editing" className="before-img" />
                <img src="https://kimi-web-img.moonshot.cn/img/isaidyesfl.com/8ab2103e1023a8866b18a1367b5df410356b7742.jpg"
                  alt="After editing" className="after-img" />
                <div className="slider-handle"></div>
              </div>
              <p className="text-charcoal/70">Professional color grading brings warmth and emotion to every frame,
                creating timeless memories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Awards &amp; Recognition</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="award-badge text-center rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Best Wedding Photographer</h3>
              <p className="text-charcoal/70 text-sm">Albuquerque Wedding Awards 2024</p>
            </div>

            <div className="award-badge text-center rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Rising Star Award</h3>
              <p className="text-charcoal/70 text-sm">Professional Photographers of America 2023</p>
            </div>

            <div className="award-badge text-center rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Featured Artist</h3>
              <p className="text-charcoal/70 text-sm">Wedding Style Magazine 2024</p>
            </div>

            <div className="award-badge text-center rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Luxury Service Award</h3>
              <p className="text-charcoal/70 text-sm">New Mexico Business Excellence 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-white bg-opacity-50 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Professional Equipment</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              We invest in the best tools to ensure every image meets our exacting standards of quality and
              artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-taupe rounded-2xl p-8 shadow-lg text-center border border-white/5 hover:border-warm-gold/50 transition-colors">
              <img src="https://kimi-web-img.moonshot.cn/img/media.dcrainmaker.com/f3a419d7d9c7e21f3c983e992e01629bd8d674db.jpg"
                alt="Professional camera equipment" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Camera Systems</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Canon EOS R5 and Sony A7R IV cameras for exceptional image quality and low-light performance.
              </p>
            </div>

            <div className="bg-taupe rounded-2xl p-8 shadow-lg text-center border border-white/5 hover:border-warm-gold/50 transition-colors">
              <img src="https://kimi-web-img.moonshot.cn/img/cdn-wp.photoup.net/5455091d873b824ec195820be8cef8da3e4dfdde.jpg"
                alt="Professional lenses" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Premium Lenses</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Canon L-series and Sony G Master lenses for sharp, beautiful bokeh and exceptional optical
                quality.
              </p>
            </div>

            <div className="bg-taupe rounded-2xl p-8 shadow-lg text-center border border-white/5 hover:border-warm-gold/50 transition-colors">
              <img src="https://kimi-web-img.moonshot.cn/img/www.thimble.com/bdce5d66e609cd4975d692c757715108edebace3.jpg"
                alt="Lighting equipment" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Lighting &amp; Audio</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Professional LED panels, wireless microphones, and stabilizers for perfect lighting and smooth
                video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-taupe text-charcoal scroll-reveal border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
              Let's discuss your vision and create timeless memories that you'll treasure forever.
              Every love story deserves to be told by passionate artists who understand its beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1TDKt_HrwsDEel_E-aDzTZt_Pe2UIiJpuZGDF4Q6bbQgB8pKK6rxQ0SV_nObzC4w5hklH5Paz1?gv=true', '_blank')}
                className="bg-warm-gold text-warm-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </button>
              <button onClick={() => window.location.href = 'https://memoriaproduction.com/services'}
                className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-charcoal hover:text-white transition-all transform hover:scale-105"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
