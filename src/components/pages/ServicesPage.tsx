import { useEffect, useMemo } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import PortfolioHeroWrapper from '@/components/ui/portfolio-hero-wrapper';
import { SERVICE_CATEGORIES, SERVICE_PATHS, SERVICE_DESCRIPTIONS, type ServiceSlug } from '@/lib/servicePortfolio';

type FilterSlug = ServiceSlug | 'all';

const FILTERS: Array<{ slug: FilterSlug; label: string }> = [
  { slug: 'all', label: 'All Work' },
  { slug: 'weddings', label: 'Weddings' },
  { slug: 'proposals', label: 'Proposals' },
  { slug: 'birthdays', label: 'Birthdays' },
  { slug: 'corporate', label: 'Corporate' },
  { slug: 'behind-scenes', label: 'Behind the Scenes' },
];

const PRIMARY_SERVICES: ServiceSlug[] = ['weddings', 'proposals', 'birthdays', 'corporate'];
const FILTER_PATHS: Record<FilterSlug, string> = {
  all: '/services',
  weddings: '/weddings',
  proposals: '/proposals',
  birthdays: '/birthdays',
  corporate: '/corporate',
  'behind-scenes': '/behind-scenes',
};

type ServicesPageProps = {
  activeFilter?: FilterSlug;
};

export default function ServicesPage({ activeFilter = 'all' }: ServicesPageProps) {
  const navigate = useNavigate();

  const visibleItems = useMemo(() => {
    const categories = activeFilter === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((category) => category.slug === activeFilter);

    return categories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categorySlug: category.slug,
        categoryTitle: category.title,
      })),
    );
  }, [activeFilter]);

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('services-scroll-y');
    if (!savedScrollY) {
      return;
    }

    const y = Number(savedScrollY);
    if (!Number.isNaN(y)) {
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    }
    sessionStorage.removeItem('services-scroll-y');
  }, [activeFilter]);

  const navigatePreservingScroll = (path: string) => {
    if (window.location.pathname === path) {
      return;
    }
    sessionStorage.setItem('services-scroll-y', String(window.scrollY));
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <PortfolioHeroWrapper />

        <section className="py-8 bg-card/30 border-y border-white/10">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">Services</span>
            </nav>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.slug;
                return (
                  <button
                    key={filter.slug}
                    type="button"
                    onClick={() => navigatePreservingScroll(FILTER_PATHS[filter.slug])}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${isActive
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-transparent text-primary border-primary/60 hover:bg-primary/10'
                      }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                {SERVICE_DESCRIPTIONS[activeFilter].title}
              </h2>
              <p className="text-lg text-primary font-medium mb-4">
                {SERVICE_DESCRIPTIONS[activeFilter].shortDescription}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {SERVICE_DESCRIPTIONS[activeFilter].fullDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {SERVICE_DESCRIPTIONS[activeFilter].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-white/10">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-white">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {visibleItems.map((item) => (
                <article key={`${item.categorySlug}-${item.image}`} className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-card/40">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs uppercase tracking-wide text-primary mb-1">{item.categoryTitle}</p>
                      <h2 className="text-white text-xl font-serif font-semibold mb-1">{item.title}</h2>
                      <p className="text-white/80 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Browse By Service</h2>
              <p className="text-muted-foreground">
                Open a dedicated page for each service type.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICE_CATEGORIES
                .filter((category) => PRIMARY_SERVICES.includes(category.slug))
                .map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => navigatePreservingScroll(SERVICE_PATHS[category.slug])}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-card/40 hover:border-primary/50 transition-colors"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={category.heroImage}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-semibold text-white mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>

                    </div>
                  </button>
                ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5">Love What You See?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s plan your project and create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity">
                Start Your Journey
              </a>
              <a href="/about" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-8 py-3 font-semibold hover:bg-white hover:text-background transition-colors">
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
