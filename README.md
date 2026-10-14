# Karavan Coffee

React + TypeScript + Tailwind CSS (Vite) single-page site for a local cafe in Addis Ababa.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
```

## Edit content

Everything editable lives in `src/data/mockData.ts`:

- `companyInfo` — phone, email, address, landmark, parking, Wi-Fi, social links, Google Maps URLs
- `menuItems` — name, description, price (ETB), category, dietary tags, optional `image`
- `businessHours` — per-day open/close times (the "Open Now" badge uses Addis Ababa time)
- `highlights`, `valuePillars`, `messageTypeOptions`

Add photos by setting `image` on a menu item, or passing `imageUrl` to `<Hero />` and `<About />` in `App.tsx`.
Replace `mapsEmbedUrl` with the embed `src` from Google Maps (Share → Embed a map).

## Structure

```
src/
  types/index.ts        MenuItem, Category, BusinessHours, ContactFormData, ...
  data/mockData.ts      all content
  hooks/useOpenStatus.ts
  components/           Navbar, Hero, Featured, Menu, MenuItemCard, About,
                        Location, Contact, Footer, Toast, Logo
```

The contact form validates on the client and simulates a send (see `onSubmit` in `Contact.tsx`);
swap the `setTimeout` for a real `fetch()` when you have an endpoint.
