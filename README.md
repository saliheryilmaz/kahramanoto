# Kahraman Oto Lastik

Next.js website starter for Vercel, written in Turkish and designed for mobile-first local service leads.

## Business details already added

- Phone and WhatsApp: `0543 894 55 60`
- Service area: all 39 Istanbul districts, both sides (confirmed by the owner); surrounding provinces excluded
- Hours: 7/24
- Vehicle types: passenger cars, SUVs and heavy vehicles
- No physical customer address; the business is mobile
- Wheel alignment and balancing are not offered

## Before launch

1. The service area is Istanbul’s 39 districts only; surrounding provinces are excluded.
2. The gallery now uses the service photos supplied by the business under `public/images/gallery/servis/`. Confirm that all photos are approved for public use.
3. The PNG brand logo is in `public/brand/kahraman-oto-lastik-logo.png`.
4. Deploy this project to Vercel, assign `kahramanotolastik.com.tr` and choose whether `www` redirects to the root domain. The canonical URL defaults to `https://kahramanotolastik.com.tr`.
5. Verify Search Console ownership and submit `/sitemap.xml` after the domain is live.
6. Create/update the Google Business Profile as a service-area business. Match its business name, phone, hours and website to this site; don't add a home address publicly if the business doesn't receive customers there.
7. Add Google Ads conversion IDs and consent-aware phone/WhatsApp click measurement before campaigns go live. Tracking IDs are not available yet, so no advertising tag is included.

The structured data describes the mobile service and area served without inventing a street address. The `/hizmetler`, `/galeri`, and `/iletisim` pages and four service-detail URLs are included in the sitemap alongside all 39 statically generated district pages. Gallery images and descriptive alternative text are configured in `src/app/galeri/page.tsx`. Review district-specific arrival notes with the owner before deployment. Do not expand into neighborhood-by-neighborhood URLs without genuinely distinct service information.

## Local development

```bash
pnpm install
pnpm dev
```
