# Domaine Shopify Technical Assessment — Product Card

Custom Shopify product card built in a headed Shopify theme environment (Dawn starter), styled with Tailwind CSS.

## Links

- **Preview (Dev theme):** https://domaine-sanaa-assessment.myshopify.com/?preview_theme_id=183878484274  

Password: meetdomaine

- **GitHub Repo:** https://github.com/sanaaN/domaine-product-card-assessment


---

## Acceptance Criteria Covered

- **Sale badge + markdown pricing**  
  Displays “On Sale!” badge and shows compare-at price (strikethrough) + sale price when `compare_at_price > price`.

- **Variant swatches**  
  Clicking a swatch updates:
  - selected swatch highlight (border)
  - primary product image
  - secondary (hover) image for the selected variant
  - price + compare-at + sale badge

- **Secondary image on hover**  
  Hovering over the product image swaps to the secondary image (CSS-only via Tailwind `group-hover`).

- **Product info**  
  Displays brand (vendor), title, and pricing.

---

## Local Development

### Requirements
- Node.js (LTS recommended)
- Shopify CLI

### Install
npm install

### Tailwind (watch)

In one terminal tab:

npm run dev:css

### Run Shopify theme (preview)

In another terminal tab:

shopify theme dev --store domaine-sanaa-assessment.myshopify.com


### Theme Files / Structure

Product card snippet: snippets/product-card-domaine.liquid
Swatch behavior JS: assets/product-card-domaine.js
Tailwind input: src/tailwind.css
Tailwind output: assets/tailwind.css
Fonts: assets/fonts.css (Roboto loaded via file_url)

### Secondary Image per Variant

Secondary image is configured per variant using a metafield:
Definition: custom.secondary_image (Variant metafield, type: File/Image)
Fallback: If unset, falls back to product.media[1] when available.

### Notes

Hover swap is a desktop enhancement (mobile devices typically do not support hover).
Swatch click works on mobile and desktop.

## Known Limitations / Future Improvements

- **Swatch deduplication:** 
The swatch loop iterates all variants, so products with multiple option types (e.g. color × size) will render duplicate color swatches. In a real-world implementation swatches would be deduplicated by tracking seen color values.
- **Responsive images:**  
Primary and hover images currently use fixed widths. Adding `srcset`/`sizes` (and updating them per selected variant) would improve performance, especially on mobile.
- **Color swatch rendering:**
Swatch fill is derived directly from the option value as a CSS color name. Non-standard names (e.g., “Forest Green”) won’t render correctly. — A metafield-based hex value (or image swatches) would be more robust.
