import CMS from 'decap-cms-app';
import netlifyIdentity from 'netlify-identity-widget';

// Initialize Netlify Identity
netlifyIdentity.init();

// Initialize the CMS
CMS.init();

// Inject Inter font for a better match with your site
const style = document.createElement('style');
style.textContent = `body { font-family: 'Inter', sans-serif; }`;
document.head.appendChild(style);