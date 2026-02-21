import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface Service {
  service: string;
  name: string;
  price: number;
}

interface Addon {
  addon: string;
  name: string;
  price: number;
}

const SERVICES: Array<{ service: string; name: string; price: number; description: string; features: string[] }> = [
  {
    service: 'wedding',
    name: 'Wedding Photography',
    price: 2500,
    description: 'Full day coverage, 500+ edited photos, online gallery, print release',
    features: ['8-10 hours coverage', 'Engagement session included', 'Second photographer available']
  },
  {
    service: 'proposal',
    name: 'Proposal Photography',
    price: 800,
    description: 'Discreet coverage of your proposal moment, 50+ edited photos',
    features: ['2 hours coverage', 'Location scouting', 'Same-day preview']
  },
  {
    service: 'birthday',
    name: 'Birthday Events',
    price: 1200,
    description: 'Party coverage, candid moments, 200+ edited photos',
    features: ['4-6 hours coverage', 'Candid & posed shots', 'Digital gallery']
  },
  {
    service: 'corporate',
    name: 'Corporate Events',
    price: 1500,
    description: 'Professional event coverage, headshots, branding photography',
    features: ['Full day coverage', 'Professional editing', 'Commercial usage rights']
  }
];

const ADDONS: Array<{ addon: string; name: string; price: number; description: string }> = [
  { addon: 'engagement', name: 'Engagement Session (+$500)', price: 500, description: '1-hour couple\'s shoot' },
  { addon: 'album', name: 'Wedding Album (+$300)', price: 300, description: 'Premium printed album' },
  { addon: 'videography', name: 'Videography (+$800)', price: 800, description: 'Highlight reel video' },
  { addon: 'prints', name: 'Print Package (+$400)', price: 400, description: '25 professional prints' }
];

const FAQ_DATA: Array<{ question: string; answer: string }> = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 6-12 months in advance for weddings, especially for peak season dates (May-October). For other events, 2-3 months advance notice is typically sufficient.'
  },
  {
    question: 'What\'s included in your packages?',
    answer: 'All packages include professional photography coverage, edited high-resolution images, online gallery, and print release. Specific inclusions vary by package type - see individual service cards for details.'
  },
  {
    question: 'How long until I receive my photos?',
    answer: 'Standard delivery time is 2-3 weeks for full galleries. We provide sneak peeks within 48-72 hours for weddings and major events. Rush delivery is available for an additional fee.'
  },
  {
    question: 'Do you travel for events?',
    answer: 'Yes! We love destination weddings and events. Travel fees apply for locations outside the Albuquerque area. Contact us for a custom quote based on your event location.'
  },
  {
    question: 'What\'s your payment policy?',
    answer: 'We require a 50% retainer to secure your date, with the remaining balance due 30 days before your event. We accept credit cards, bank transfers, and cash payments.'
  }
];

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: 'success' | 'error' } | null>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const baseTotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const addonTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const totalPrice = baseTotal + addonTotal;

  const handleServiceClick = (service: typeof SERVICES[0]) => {
    if (selectedServices.some(s => s.service === service.service)) {
      setSelectedServices([]);
    } else {
      setSelectedServices([{ service: service.service, name: service.name, price: service.price }]);
    }
  };

  const handleAddonChange = (addon: typeof ADDONS[0], checked: boolean) => {
    if (checked) {
      if (!selectedAddons.some(a => a.addon === addon.addon)) {
        setSelectedAddons([...selectedAddons, { addon: addon.addon, name: addon.name, price: addon.price }]);
      }
    } else {
      setSelectedAddons(selectedAddons.filter(a => a.addon !== addon.addon));
    }
  };

  const scrollToForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const days: Array<{ day: number; unavailable: boolean; dateStr: string } | null> = [];

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(year, month, i).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isBooked = i % 7 === 0 || i === 15 || i === 22;
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      days.push({ day: i, unavailable: isWeekend || isBooked, dateStr });
    }

    return days;
  };

  const handleDateClick = (day: number, unavailable: boolean) => {
    if (unavailable) return;
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const showNotificationMessage = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set('selected_services', [...selectedServices, ...selectedAddons].map(s => s.name).join(', '));
    formData.set('estimated_total', totalPrice.toString());

    try {
      const response = await fetch('https://formspree.io/f/xzdvpkkb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showNotificationMessage('Thank you! Your inquiry has been sent successfully.', 'success');
        form.reset();
        setSelectedServices([]);
        setSelectedAddons([]);
        setSelectedDate(null);
      } else {
        showNotificationMessage('Oops! Something went wrong. Please try again.', 'error');
      }
    } catch {
      showNotificationMessage('Oops! Something went wrong. Please try again.', 'error');
    }
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="bg-warm-white text-charcoal">
      <Navbar />

      <div className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'} fixed inset-0 z-40 bg-warm-white pt-24 px-6`}>
        <div className="flex flex-col space-y-6 text-center">
          <a href="/" className="text-2xl text-charcoal hover:text-warm-gold">Home</a>
          <a href="/services" className="text-2xl text-charcoal hover:text-warm-gold">Services</a>
          <a href="/about" className="text-2xl text-charcoal hover:text-warm-gold">About</a>
          <a href="/contact" className="text-2xl text-warm-gold font-bold">Quote</a>
          <button
            onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1TDKt_HrwsDEel_E-aDzTZt_Pe2UIiJpuZGDF4Q6bbQgB8pKK6rxQ0SV_nObzC4w5hklH5Paz1?gv=true', '_blank')}
            className="bg-warm-gold text-white px-8 py-3 rounded-full text-xl"
          >
            Book Now
          </button>
        </div>
      </div>

      <section className="hero-bg-contact h-96 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Let's Create Magic Together
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ready to capture your special moments? Get in touch for a personalized consultation and instant
              quote.
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
            <span className="text-warm-gold font-semibold">Contact</span>
          </nav>
        </div>
      </section>

      <section id="booking-section" className="py-20 bg-sage/5 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Book Your Session</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Select your services, choose your date, and get an instant quote. It's that simple!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-taupe/20 rounded-2xl p-8 shadow-lg border border-white/5">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-8">Select Your Services</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {SERVICES.map((service) => (
                      <div
                        key={service.service}
                        className={`service-card border-2 rounded-xl p-6 ${selectedServices.some(s => s.service === service.service) ? 'selected' : ''}`}
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-charcoal">{service.name}</h4>
                          <div className="service-price text-warm-gold font-bold text-lg">${service.price.toLocaleString()}</div>
                        </div>
                        <p className="text-charcoal/70 mb-4">{service.description}</p>
                        <ul className="text-sm text-charcoal/60 space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-xl font-semibold text-charcoal mb-4">Add-On Services</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {ADDONS.map((addon) => (
                        <label key={addon.addon} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="addon-checkbox form-checkbox text-warm-gold rounded bg-white/10 border-white/20"
                            checked={selectedAddons.some(a => a.addon === addon.addon)}
                            onChange={(e) => handleAddonChange(addon, e.target.checked)}
                          />
                          <div>
                            <div className="font-semibold text-charcoal group-hover:text-warm-gold transition-colors">
                              {addon.name}</div>
                            <div className="text-sm text-charcoal/70">{addon.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="quote-calculator rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold mb-6">Instant Quote</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Base Package:</span>
                      <span className="font-bold text-xl">${baseTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Add-ons:</span>
                      <span className="font-semibold">${addonTotal.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-black/10 pt-4">
                      <div className="flex justify-between items-center text-2xl font-bold">
                        <span>Total:</span>
                        <span>${totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/10 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold mb-2">Selected Services:</h4>
                    <div className="text-sm space-y-1">
                      {selectedServices.length === 0 && selectedAddons.length === 0 ? (
                        <div className="opacity-70">No services selected</div>
                      ) : (
                        <>
                          {selectedServices.map((s) => (
                            <div key={s.service} className="flex justify-between">
                              <span>{s.name}</span>
                              <span>${s.price.toLocaleString()}</span>
                            </div>
                          ))}
                          {selectedAddons.map((a) => (
                            <div key={a.addon} className="flex justify-between text-warm-gold">
                              <span>+ {a.name}</span>
                              <span>${a.price.toLocaleString()}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="w-full bg-warm-white text-warm-gold px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Continue to Booking
                  </button>
                </div>

                <div className="bg-taupe/20 border border-white/5 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Select Date</h3>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <button onClick={prevMonth} className="p-2 hover:bg-white/5 rounded text-charcoal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <h4 className="text-lg font-semibold text-charcoal">{MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
                      <button onClick={nextMonth} className="p-2 hover:bg-white/5 rounded text-charcoal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="calendar-grid">
                      {calendarDays.map((day, i) => {
                        if (!day) {
                          return <div key={`empty-${i}`} className="calendar-day bg-transparent cursor-default"></div>;
                        }
                        const isSelected = selectedDate &&
                          selectedDate.getDate() === day.day &&
                          selectedDate.getMonth() === currentDate.getMonth() &&
                          selectedDate.getFullYear() === currentDate.getFullYear();
                        return (
                          <div
                            key={day.day}
                            className={`calendar-day ${day.unavailable ? 'unavailable' : 'available'} ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleDateClick(day.day, day.unavailable)}
                            title={day.unavailable ? 'Unavailable' : ''}
                          >
                            {day.day}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-900/40 rounded"></div>
                      <span className="text-charcoal/70">Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-warm-gold rounded"></div>
                      <span className="text-charcoal/70">Selected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form-section" ref={contactFormRef} className="py-20 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Tell Us About Your Event</h2>
              <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                Share the details of your special day, and we'll get back to you within 24 hours with a
                personalized proposal.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-taupe/20 rounded-2xl p-8 shadow-lg border border-white/5">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">First Name *</label>
                  <input type="text" name="firstName" required className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Last Name *</label>
                  <input type="text" name="lastName" required className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Email *</label>
                  <input type="email" name="email" required className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                  <input type="tel" name="phone" className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Event Date</label>
                  <input type="date" name="eventDate" className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Event Location</label>
                  <input type="text" name="location" placeholder="Venue name or address" className="form-input w-full px-4 py-3 rounded-lg focus:outline-none" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">Event Details</label>
                <textarea name="details" rows={5} placeholder="Tell us about your event, special requests, or any questions you have..." className="form-input w-full px-4 py-3 rounded-lg focus:outline-none resize-none"></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">How did you hear about us?</label>
                <select name="referral" className="form-input w-full px-4 py-3 rounded-lg focus:outline-none">
                  <option value="" className="bg-warm-white text-charcoal">Select an option</option>
                  <option value="google" className="bg-warm-white text-charcoal">Google Search</option>
                  <option value="social" className="bg-warm-white text-charcoal">Social Media</option>
                  <option value="referral" className="bg-warm-white text-charcoal">Friend/Family Referral</option>
                  <option value="vendor" className="bg-warm-white text-charcoal">Wedding Vendor</option>
                  <option value="other" className="bg-warm-white text-charcoal">Other</option>
                </select>
              </div>

              <input type="hidden" name="selected_services" value={[...selectedServices, ...selectedAddons].map(s => s.name).join(', ')} />
              <input type="hidden" name="estimated_total" value={totalPrice} />

              <div className="text-center">
                <button type="submit" className="bg-warm-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-taupe/10 scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Everything you need to know about booking with Memoria Production.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className={`faq-item rounded-xl shadow-lg ${activeFaq === index ? 'active' : ''}`}>
                <button
                  className="faq-toggle w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-charcoal">{faq.question}</span>
                  <svg className="w-6 h-6 text-warm-gold transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="faq-content px-6">
                  <p className="text-charcoal/70 pb-6 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {notification && (
        <div className={`notification ${notification.show ? 'show' : ''} ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`}>
          <span>{notification.message}</span>
        </div>
      )}
    </div>
  );
}
