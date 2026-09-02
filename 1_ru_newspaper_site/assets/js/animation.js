(() => {
  const array = [...document.querySelectorAll('h3, p:not(.main p, .steps__item-text, .faq__item-text)')]

  const work = () => {
    array.forEach(item => item.style.opacity = '0')
    array.forEach(item => observer.observe(item))
  }

  const animationSimple = (entries) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('animation-fadeIn');
        entries[i].target.style.opacity = '1';
      }
    }
  }

  const observer = new IntersectionObserver(animationSimple, { root: null, rootMargin: '0px', threshold: 0.1, })

  document.addEventListener("DOMContentLoaded", work);
})()