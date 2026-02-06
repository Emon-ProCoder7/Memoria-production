import ScrollExpandMedia from './scroll-expansion-hero';

const PortfolioHeroWrapper = () => {
    const content = {
        src: 'https://res.cloudinary.com/dsy8akinb/video/upload/v1770414997/webpconvert_video_1_qb0j95.mp4',
        poster: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
        background: 'https://raw.githubusercontent.com/Emon-ProCoder7/Memoria-production/refs/heads/main/public/portfolio_thumbnail.png',
        title: 'Visual Storytelling Redefined',
        date: 'Memoria Production LLC.',
        scrollToExpand: 'Experience the Collection',
    };

    return (
        <ScrollExpandMedia
            mediaType="video"
            mediaSrc={content.src}
            posterSrc={content.poster}
            bgImageSrc={content.background}
            title={content.title}
            date={content.date}
            scrollToExpand={content.scrollToExpand}
            textBlend
        >
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-charcoal">
                    Captured with passion, delivered with cinematic excellence.
                    Discover our curated collection of moments that matter.
                </p>
            </div>
        </ScrollExpandMedia>
    );
};

export default PortfolioHeroWrapper;
