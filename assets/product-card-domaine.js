// Product card swatches:
// - click swatch -> change primary/hover images, price/compare-at, sale badge
// - update selected swatch styling (border)

(() => {
  // Classes toggled for selected/unselected swatches
  const SELECTED_CLASSES = ['border-[#0A4874]'];
  const UNSELECTED_CLASSES = ['border-transparent'];

  // Price color classes
  const SALE_PRICE_CLASS = 'text-[#FF0000]';
  const REGULAR_PRICE_CLASS = 'text-[#111111]';

  function setSelectedSwatch(swatchesEl, selectedBtn) {
    swatchesEl.querySelectorAll('[data-swatch]').forEach((btn) => {
      btn.classList.remove(...SELECTED_CLASSES);
      btn.classList.add(...UNSELECTED_CLASSES);
      btn.setAttribute('aria-pressed', 'false');
    });

    selectedBtn.classList.remove(...UNSELECTED_CLASSES);
    selectedBtn.classList.add(...SELECTED_CLASSES);
    selectedBtn.setAttribute('aria-pressed', 'true');
  }

  function updateCard(cardEl, btn) {
    const primaryImg = cardEl.querySelector('[data-primary-image]');
    const hoverImg = cardEl.querySelector('[data-hover-image]');
    const priceEl = cardEl.querySelector('[data-price-display]');
    const compareEl = cardEl.querySelector('[data-compare-at-display]');
    const badgeEl = cardEl.querySelector('[data-sale-badge]');

    const imgUrl = btn.dataset.image || '';
    const hoverUrl = btn.dataset.hoverImage || '';
    const priceText = btn.dataset.price || '';
    const compareText = btn.dataset.compareAt || '';
    const onSale = btn.dataset.onSale === 'true';

    if (primaryImg && imgUrl) primaryImg.src = imgUrl;

    if (hoverImg) {
      if (hoverUrl) {
        hoverImg.src = hoverUrl;
        hoverImg.classList.remove('hidden');
      } else {
        hoverImg.src = '';
        hoverImg.classList.add('hidden');
      }
    }

    if (priceEl && priceText) {
      priceEl.textContent = priceText;
      priceEl.classList.remove(SALE_PRICE_CLASS, REGULAR_PRICE_CLASS);
      priceEl.classList.add(onSale ? SALE_PRICE_CLASS : REGULAR_PRICE_CLASS);
    }

    if (compareEl) {
      if (onSale && compareText) {
        compareEl.textContent = compareText;
        compareEl.classList.remove('hidden');
      } else {
        compareEl.textContent = '';
        compareEl.classList.add('hidden');
      }
    }

    if (badgeEl) {
      badgeEl.classList.toggle('hidden', !onSale);
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-swatch]');
    if (!btn) return;

    const cardEl = btn.closest('[data-product-card]');
    if (!cardEl) return;

    const swatchesEl = btn.closest('[data-product-card-swatches]');
    if (!swatchesEl) return;

    setSelectedSwatch(swatchesEl, btn);
    updateCard(cardEl, btn);
  });
})();
