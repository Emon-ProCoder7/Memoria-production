import React from 'react';
import ReactDOM from 'react-dom/client';
import PortfolioHeroWrapper from './components/ui/portfolio-hero-wrapper';
import './index.css';

const rootElement = document.getElementById('hero-root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <PortfolioHeroWrapper />
        </React.StrictMode>
    );
}
