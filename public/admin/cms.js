// Decap CMS and Netlify Identity are available globally via CDN
const { CMS } = window;
const netlifyIdentity = window.netlifyIdentity;

// Initialize Netlify Identity
netlifyIdentity.init();

// Initialize the CMS
CMS.init();

// Inject Inter font for a better match with your site
const style = document.createElement('style');
style.textContent = `body { font-family: 'Inter', sans-serif; }`;
document.head.appendChild(style);