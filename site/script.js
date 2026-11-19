const floating = document.querySelector('.floating-cta');
const hero = document.querySelector('.hero');
const contact = document.querySelector('#contact');
let heroVisible = true, contactVisible = false;
const update = () => floating.classList.toggle('visible', !heroVisible && !contactVisible);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === hero) heroVisible = entry.isIntersecting;
      if (entry.target === contact) contactVisible = entry.isIntersecting;
    }
    update();
  });
  observer.observe(hero); observer.observe(contact);
}
