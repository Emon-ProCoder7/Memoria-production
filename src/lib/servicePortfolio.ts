export type ServiceSlug = 'weddings' | 'proposals' | 'birthdays' | 'corporate' | 'behind-scenes';

export type PortfolioItem = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export type ServiceCategory = {
  slug: ServiceSlug;
  title: string;
  description: string;
  heroImage: string;
  items: PortfolioItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    description: 'Cinematic wedding storytelling with timeless, emotional frames.',
    heroImage: 'https://kimi-web-img.moonshot.cn/img/files.worldsbestweddingphotos.com/83c78583606faafd7b06f24df94cb69d05fc557b.jpg',
    items: [
      {
        title: 'Golden Hour Romance',
        subtitle: 'Sarah & James Wedding',
        image: 'https://kimi-web-img.moonshot.cn/img/files.worldsbestweddingphotos.com/83c78583606faafd7b06f24df94cb69d05fc557b.jpg',
        alt: 'Golden hour wedding couple',
      },
      {
        title: 'Joyful Celebration',
        subtitle: 'Elena & Michael Reception',
        image: 'https://kimi-web-img.moonshot.cn/img/www.brides.com/94700a9cb8694df61f91cfb411ba5322d496d413.jpg',
        alt: 'Wedding reception dancing',
      },
      {
        title: 'Sacred Moments',
        subtitle: 'Garden Ceremony',
        image: 'https://kimi-web-img.moonshot.cn/img/www.marthastewart.com/da4a358cfaa6a88018d301062e29d58db784f6fd.jpg',
        alt: 'Wedding ceremony altar flowers',
      },
      {
        title: 'Dance Floor Magic',
        subtitle: 'Reception Highlights',
        image: 'https://kimi-web-img.moonshot.cn/img/isaidyesfl.com/8ab2103e1023a8866b18a1367b5df410356b7742.jpg',
        alt: 'Wedding reception celebration',
      },
      {
        title: 'Sweet Details',
        subtitle: 'Wedding Cake Photography',
        image: 'https://kimi-web-img.moonshot.cn/img/www.brides.com/6d355148ae2c38cf684aedfd664ed64fc6443d20.JPG',
        alt: 'Elegant wedding cake',
      },
      {
        title: 'Bridal Elegance',
        subtitle: 'Dress Detail Photography',
        image: 'https://kimi-web-img.moonshot.cn/img/www.kleinfeldbridal.com/3d46fb61daafb175332af291eea77efede2bf4f9.jpg',
        alt: 'Luxury wedding dress details',
      },
      {
        title: 'Reception Elegance',
        subtitle: 'Table Setting Photography',
        image: 'https://kimi-web-img.moonshot.cn/img/amyabbottevents.com/dbc1305906ef6dcfbb2be6d838d91c835425ba80.jpg',
        alt: 'Wedding reception setup',
      },
      {
        title: 'Celebration Moments',
        subtitle: 'Dance Floor Photography',
        image: 'https://kimi-web-img.moonshot.cn/img/rusticandmain.com/76572984d516126e4c21730dd0ed10299661904a.png',
        alt: 'Wedding celebration dancing',
      },
      {
        title: 'Party Atmosphere',
        subtitle: 'Reception Highlights',
        image: 'https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/597128c31e94e30d787531c253a8efc2108bf094.jpg',
        alt: 'Wedding party celebration',
      },
    ],
  },
  {
    slug: 'proposals',
    title: 'Proposals',
    description: 'The yes moment captured with precision, feeling, and elegance.',
    heroImage: 'https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/4f9243c62d679dc54ea34437a3d99688cfddd8ea.jpeg',
    items: [
      {
        title: 'The Perfect Yes',
        subtitle: 'Central Park Proposal',
        image: 'https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/4f9243c62d679dc54ea34437a3d99688cfddd8ea.jpeg',
        alt: 'Engagement proposal moment',
      },
      {
        title: 'Romantic Setup',
        subtitle: 'Proposal Planning',
        image: 'https://kimi-web-img.moonshot.cn/img/shop.designsbyhemingway.com/e74d1476b82a8e1491afbab9a53d36a625e390bf.jpg',
        alt: 'Proposal setup with flowers',
      },
    ],
  },
  {
    slug: 'birthdays',
    title: 'Birthdays',
    description: 'Milestones and joy documented in vibrant, story-rich detail.',
    heroImage: 'https://kimi-web-img.moonshot.cn/img/media-api.xogrp.com/d063726bd5dbf8c46fd93671b1a2a23daa483daa.2022',
    items: [
      {
        title: 'Milestone Celebration',
        subtitle: '30th Birthday Party',
        image: 'https://kimi-web-img.moonshot.cn/img/media-api.xogrp.com/d063726bd5dbf8c46fd93671b1a2a23daa483daa.2022',
        alt: 'Birthday celebration cake',
      },
      {
        title: 'Elegant Details',
        subtitle: 'Birthday Cake Photography',
        image: 'https://kimi-web-img.moonshot.cn/img/www.eleganttemptations.com/ac9c80edc24f9a402e250516aafc79af3495501a.jpg',
        alt: 'Elegant birthday cake',
      },
    ],
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    description: 'Professional visuals for brands, teams, launches, and events.',
    heroImage: 'https://kimi-web-img.moonshot.cn/img/creativeeventsphotography.com.au/8164daf07e43f495655f64237a27365c5fac53de.jpg',
    items: [
      {
        title: 'Professional Excellence',
        subtitle: 'TechStart Inc. Launch',
        image: 'https://kimi-web-img.moonshot.cn/img/creativeeventsphotography.com.au/8164daf07e43f495655f64237a27365c5fac53de.jpg',
        alt: 'Corporate event photography',
      },
      {
        title: 'Conference Coverage',
        subtitle: 'Business Event Documentation',
        image: 'https://kimi-web-img.moonshot.cn/img/www.proglobalevents.com/02d99d75d84f582500e4df8c7229293e857ea46a.jpg',
        alt: 'Corporate conference photography',
      },
      {
        title: 'Team Photography',
        subtitle: 'Corporate Headshots',
        image: 'https://kimi-web-img.moonshot.cn/img/j5u8f2v8.rocketcdn.me/85775b5cf1561faf2ff3cf5bb1ffaeff9cb408a9.jpeg',
        alt: 'Corporate team photo',
      },
    ],
  },
  {
    slug: 'behind-scenes',
    title: 'Behind the Scenes',
    description: 'A look at the creative process, team, and production craft.',
    heroImage: 'https://raw.githubusercontent.com/Emon-ProCoder7/Memoria-production/refs/heads/main/memoria/resources/memoria%20watermark.jpg',
    items: [
      {
        title: 'Behind the Lens',
        subtitle: 'Professional at Work',
        image: 'https://raw.githubusercontent.com/Emon-ProCoder7/Memoria-production/refs/heads/main/memoria/resources/memoria%20watermark.jpg',
        alt: 'Photographer behind scenes',
      },
      {
        title: 'Professional Gear',
        subtitle: 'Equipment Showcase',
        image: 'https://kimi-web-img.moonshot.cn/img/media.dcrainmaker.com/f3a419d7d9c7e21f3c983e992e01629bd8d674db.jpg',
        alt: 'Professional camera equipment',
      },
      {
        title: 'Artist at Work',
        subtitle: 'Capturing the Moment',
        image: 'https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/2e6f108c934b00b345dbea9aca0bc31fc178d997.jpg',
        alt: 'Photographer with camera',
      },
    ],
  },
];

export const SERVICE_PATHS: Record<ServiceSlug, string> = {
  weddings: '/weddings',
  proposals: '/proposals',
  birthdays: '/birthdays',
  corporate: '/corporate',
  'behind-scenes': '/behind-scenes',
};

export const getServiceCategory = (slug: ServiceSlug) => SERVICE_CATEGORIES.find((category) => category.slug === slug);
