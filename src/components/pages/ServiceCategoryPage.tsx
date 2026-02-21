import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { ServiceSlug } from '@/lib/servicePortfolio';
import { getServiceCategory } from '@/lib/servicePortfolio';

type ServiceCategoryPageProps = {
  slug: ServiceSlug;
};

export default function ServiceCategoryPage({ slug }: ServiceCategoryPageProps) {
  const category = getServiceCategory(slug);

  if (!category) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="relative h-[48vh] min-h-[320px] overflow-hidden border-b border-white/10">
          <img src={category.heroImage} alt={category.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-10">
            <a href="/services" className="text-sm text-primary mb-4 hover:text-primary/80">Back to all services</a>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3">{category.title}</h1>
            <p className="text-lg text-white/85 max-w-2xl">{category.description}</p>
          </div>
        </section>

        <section className="container mx-auto px-6 pt-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {category.items.map((item) => (
              <article key={`${item.title}-${item.image}`} className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-card/40">
                <img src={item.image} alt={item.alt} className="w-full h-auto object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-serif font-semibold text-white mb-1">{item.title}</h2>
                  <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
