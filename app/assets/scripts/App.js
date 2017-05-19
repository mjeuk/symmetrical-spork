import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

new RevealOnScroll('.feature-item', '85%');
new RevealOnScroll('.testimonial', '60%');
