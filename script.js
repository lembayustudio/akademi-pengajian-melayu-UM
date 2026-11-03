(() => {
  document.documentElement.classList.add('js-ready');
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');

  if (button && navigation) {
    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Buka navigasi');
      navigation.classList.remove('is-open');
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
      navigation.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        button.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !button.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991) closeMenu();
    });
  }

  // Portfolio concept: keep demonstration links on the same page.
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      if (navigation && navigation.contains(link)) {
        button?.setAttribute('aria-expanded', 'false');
        button?.setAttribute('aria-label', 'Buka navigasi');
        navigation.classList.remove('is-open');
      }
    });
  });

  // V2: restrained feedback for longer editorial pages.
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');
  const updateScrollState = () => {
    const position = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle('is-scrolled', position > 20);
    backToTop?.classList.toggle('is-visible', position > 520);
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
  backToTop?.addEventListener('click', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  });

  const targets = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  targets.forEach((target) => observer.observe(target));
})();