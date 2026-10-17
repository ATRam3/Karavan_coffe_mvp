import type {
  BusinessHours,
  Category,
  CompanyInfo,
  GalleryItem,
  Highlight,
  MenuItem,
  MessageType,
  ValuePillar,
} from '../types';
import { assets } from './assets';

export const companyInfo: CompanyInfo = {
  name: 'Karavan Coffee',
  tagline: 'Specialty Ethiopian coffee, baked fresh, served slow.',
  phone: '+251 91 123 4567',
  phoneHref: 'tel:+251911234567',
  email: 'hello@karavancoffee.et',
  address: 'Bole Road, next to Edna Mall, Addis Ababa',
  neighborhood: 'Bole, Addis Ababa',
  landmark:
    'Two minutes on foot from Edna Mall. Look for the caravan sign above the green door.',
  parking:
    'Free street parking on the side road, plus a small lot behind the building (about 8 cars).',
  wifi: 'Free fibre Wi-Fi for every guest — ask any barista for the password.',
  // Replace with your real Google Maps embed URL (Share → Embed a map → copy the src).
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Bole+Road+Addis+Ababa&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Bole+Road+Addis+Ababa',
  socials: [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@karavan.coffee',
      url: 'https://instagram.com/karavan.coffee',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      handle: '@karavancoffee',
      url: 'https://t.me/karavancoffee',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@karavan.coffee',
      url: 'https://www.tiktok.com/@karavan.coffee',
    },
  ],
};

export const categories: Category[] = [
  { id: 'espresso-hot', label: 'Espresso & Hot Brews' },
  { id: 'cold-iced', label: 'Cold Drinks & Iced Teas' },
  { id: 'pastries', label: 'Fresh Pastries' },
  { id: 'breakfast', label: 'Breakfast & Light Bites' },
];

export const businessHours: BusinessHours[] = [
  { day: 'mon', label: 'Monday', open: '07:00', close: '21:00' },
  { day: 'tue', label: 'Tuesday', open: '07:00', close: '21:00' },
  { day: 'wed', label: 'Wednesday', open: '07:00', close: '21:00' },
  { day: 'thu', label: 'Thursday', open: '07:00', close: '21:00' },
  { day: 'fri', label: 'Friday', open: '07:00', close: '22:00' },
  { day: 'sat', label: 'Saturday', open: '08:00', close: '22:00' },
  { day: 'sun', label: 'Sunday', open: '08:00', close: '20:00' },
];

export const highlights: Highlight[] = [
  {
    id: 'beans',
    title: '100% Specialty Ethiopian Beans',
    detail: 'Yirgacheffe, Sidamo & Guji',
    icon: 'coffee',
  },
  {
    id: 'pastries',
    title: 'Freshly Baked Pastries Daily',
    detail: 'Out of the oven by 7 AM',
    icon: 'croissant',
  },
  {
    id: 'wifi',
    title: 'Free Wi-Fi & Cozy Workspace',
    detail: 'Plugs at every table',
    icon: 'wifi',
  },
];

export const valuePillars: ValuePillar[] = [
  {
    id: 'sourcing',
    title: 'Local Sourcing & Fresh Roasts',
    description:
      'We buy directly from cooperatives in Yirgacheffe, Sidamo and Guji, and roast in small batches every week so every cup tastes alive.',
    icon: 'sprout',
  },
  {
    id: 'community',
    title: 'Crafted Community Space',
    description:
      'A warm room built for long conversations, quiet work sessions and the traditional coffee ceremony on Saturday afternoons.',
    icon: 'users',
  },
  {
    id: 'barista',
    title: 'Barista Mastery',
    description:
      'Our baristas train for months on extraction, milk texture and pour-over technique before they ever serve a guest.',
    icon: 'award',
  },
];

export const messageTypeOptions: { value: MessageType; label: string }[] = [
  { value: 'general', label: 'General enquiry' },
  { value: 'catering', label: 'Catering / Private event' },
  { value: 'feedback', label: 'Feedback' },
];

export const menuItems: MenuItem[] = [
  // ---- Espresso & Hot Brews ----
  {
    id: 'pour-over',
    name: 'Signature Ethiopian Pour-Over',
    description:
      'Single-origin Yirgacheffe, hand-poured to order. Bright, floral, with notes of jasmine and bergamot.',
    price: 140,
    category: 'espresso-hot',
    tags: ['Vegan', 'Gluten-Free', 'House Special'],
    featured: true,
  },
  {
    id: 'spiced-latte',
    name: 'Spiced Latte & Honey Foam',
    description:
      'Double espresso, steamed milk and our house blend of cardamom, cinnamon and a touch of clove.',
    price: 130,
    category: 'espresso-hot',
    tags: ['Vegetarian', 'Gluten-Free', 'House Special'],
    featured: true,
    image: assets.yellowCakeWithMacchiato,
  },
  {
    id: 'macchiato',
    name: 'Traditional Addis Macchiato',
    description:
      'A classic Addis macchiato: rich espresso marked with a spoonful of silky milk foam, served with a sweet bite.',
    price: 70,
    category: 'espresso-hot',
    tags: ['Vegetarian', 'Gluten-Free'],
    image: assets.cakeWithMacchiato,
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Short, dense and syrupy with a long chocolatey finish. Double shot.',
    price: 60,
    category: 'espresso-hot',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description:
      'Equal parts espresso, steamed milk and velvety foam, finished with latte art.',
    price: 110,
    category: 'espresso-hot',
    tags: ['Vegetarian', 'Gluten-Free'],
  },
  {
    id: 'buna',
    name: 'Buna Ceremony Pot',
    description:
      'Freshly roasted beans brewed in a traditional jebena, served with popcorn. Serves two.',
    price: 180,
    category: 'espresso-hot',
    tags: ['Vegan', 'Gluten-Free', 'House Special'],
  },
  {
    id: 'spris',
    name: 'Spris',
    description: 'Half coffee, half tea — the Ethiopian café favourite, sweet and aromatic.',
    price: 65,
    category: 'espresso-hot',
    tags: ['Vegan', 'Gluten-Free'],
  },

  // ---- Cold Drinks & Iced Teas ----
  {
    id: 'cold-brew',
    name: 'Guji Cold Brew',
    description:
      'Steeped for 18 hours for a smooth, low-acid brew with blueberry and cocoa notes. Over ice.',
    price: 150,
    category: 'cold-iced',
    tags: ['Vegan', 'Gluten-Free', 'House Special'],
    featured: false,
  },
  {
    id: 'iced-latte',
    name: 'Iced Caramel Latte',
    description: 'Double espresso over milk and ice, finished with house-made caramel.',
    price: 140,
    category: 'cold-iced',
    tags: ['Vegetarian', 'Gluten-Free'],
  },
  {
    id: 'hibiscus-tea',
    name: 'Iced Hibiscus Tea',
    description:
      'Deep-red hibiscus steeped with ginger and a squeeze of lime. Tart, refreshing and caffeine-free.',
    price: 95,
    category: 'cold-iced',
    tags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
  },
  {
    id: 'mango-juice',
    name: 'Fresh Mango & Avocado Juice',
    description: 'The layered Addis classic — thick, fresh and made to order.',
    price: 120,
    category: 'cold-iced',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'lemon-mint',
    name: 'Lemon & Mint Cooler',
    description: 'Fresh lemon, crushed mint and sparkling water. Light and bright.',
    price: 85,
    category: 'cold-iced',
    tags: ['Vegan', 'Gluten-Free'],
  },

  // ---- Fresh Pastries & Cakes ----
  {
    id: 'house-pastry',
    name: 'Strawberry Cake & Macchiato Set',
    description:
      'Our house specialty: moist strawberry sponge cake with rich cream, paired with a freshly pulled macchiato.',
    price: 135,
    category: 'pastries',
    tags: ['Vegetarian', 'House Special'],
    featured: true,
    image: assets.strawberryCakeWithMacchiato,
  },
  {
    id: 'chocolate-cake',
    name: 'Dark Chocolate Cake with Macchiato',
    description: 'Dense, fudgy slice made with 70% cocoa and espresso, accompanied by a double-shot macchiato.',
    price: 130,
    category: 'pastries',
    tags: ['Vegetarian'],
    image: assets.chocolateCakeWithMacchiato,
  },
  {
    id: 'strawberry-cake',
    name: 'Artisan Strawberry Cake',
    description: 'Fresh sponge cake layered with strawberries and whipped vanilla frosting.',
    price: 120,
    category: 'pastries',
    tags: ['Vegetarian'],
    image: assets.strawberryCake,
  },
  {
    id: 'wedding-event-cake',
    name: 'Wedding & Celebration Event Cake',
    description: 'Custom handcrafted multi-tier cake for weddings, anniversaries and special celebrations.',
    price: 1400,
    category: 'pastries',
    tags: ['Vegetarian', 'House Special'],
    image: assets.weddingCake1,
  },
  {
    id: 'couple-red-cake',
    name: 'Red Velvet Couple Cake',
    description: 'Signature red velvet celebration cake baked fresh for couples and milestone anniversaries.',
    price: 450,
    category: 'pastries',
    tags: ['Vegetarian'],
    image: assets.coupleRedCakes,
  },
  {
    id: 'cake-selection-flight',
    name: 'Karavan Cake Platter Selection',
    description: 'An assortment flight of our finest daily artisanal cakes and pastries for sharing.',
    price: 360,
    category: 'pastries',
    tags: ['Vegetarian'],
    image: assets.cakeCollection1,
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Laminated by hand, golden and flaky with a honeycomb crumb. (Sample placeholder)',
    price: 90,
    category: 'pastries',
    tags: ['Vegetarian'],
  },
  {
    id: 'banana-bread',
    name: 'Banana Walnut Bread',
    description: 'Moist, lightly spiced banana bread with toasted walnuts. Baked every morning.',
    price: 80,
    category: 'pastries',
    tags: ['Vegetarian'],
  },
  {
    id: 'almond-cookie',
    name: 'Almond Flour Cookie',
    description: 'Chewy, gluten-free and naturally sweet with a crisp edge.',
    price: 55,
    category: 'pastries',
    tags: ['Vegan', 'Gluten-Free'],
  },

  // ---- Breakfast, Cultural Bites & Catering ----
  {
    id: 'firfir',
    name: 'Firfir Breakfast Bowl',
    description:
      'Shredded injera tossed in spiced butter and berbere, served hot and garnished to perfection.',
    price: 220,
    category: 'breakfast',
    tags: ['Vegetarian', 'House Special'],
    image: assets.eventDish1,
  },
  {
    id: 'fasting-plate',
    name: 'Fasting Plate (Ethiopian Cultural Buffet)',
    description: 'Shiro, gomen, miser and cultural dishes on fresh teff injera. Fully vegan, rich and hearty.',
    price: 240,
    category: 'breakfast',
    tags: ['Vegan', 'Dairy-Free', 'House Special'],
    image: assets.cateringEthiopianFood,
  },
  {
    id: 'cultural-catering-feast',
    name: 'Traditional Ethiopian Cultural Catering',
    description: 'Authentic grand banquet spread with traditional wots, fresh injera and cultural sides.',
    price: 350,
    category: 'breakfast',
    tags: ['House Special'],
    image: assets.cateringEthiopianFoodEvent,
  },
  {
    id: 'event-dishes-buffet',
    name: 'Graduation & Wedding Event Dishes',
    description: 'Full multi-dish buffet curated specifically for graduation celebrations, weddings and banquets.',
    price: 420,
    category: 'breakfast',
    tags: ['House Special'],
    image: assets.eventGraduationWeedingDishes,
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description:
      'Sourdough, smashed avocado, chili flakes, lemon and a drizzle of olive oil.',
    price: 190,
    category: 'breakfast',
    tags: ['Vegan', 'Dairy-Free'],
  },
  {
    id: 'egg-sandwich',
    name: 'Egg & Cheese Sandwich',
    description: 'Soft scrambled eggs, melted cheddar and fresh tomato on a toasted brioche bun.',
    price: 170,
    category: 'breakfast',
    tags: ['Vegetarian'],
  },
  {
    id: 'granola',
    name: 'Honey Granola Bowl',
    description: 'Yoghurt, house granola, seasonal fruit and local Ethiopian honey.',
    price: 160,
    category: 'breakfast',
    tags: ['Vegetarian'],
  },
];

export const galleryItems: GalleryItem[] = [
  // Atmosphere
  {
    id: 'g-cafe-inside',
    title: 'Inside Karavan Cafe',
    category: 'ambiance',
    categoryLabel: 'Ambiance',
    image: assets.insideCafe,
    description: 'Warm lighting, aromatic roasts, and comfortable seating.',
  },
  {
    id: 'g-cafe-tables',
    title: 'Cozy Workspace & Tables',
    category: 'ambiance',
    categoryLabel: 'Ambiance',
    image: assets.goodEnvTables,
    description: 'Designed for quiet work, relaxed meetings, and great coffee.',
  },

  // Wedding & Custom Celebration Cakes
  {
    id: 'g-wedding-cake-1',
    title: 'Wedding & Celebration Cake',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.weddingCake1,
    description: 'Tiered artisan cake customized for weddings and grand receptions.',
  },
  {
    id: 'g-wedding-cake-2',
    title: 'Grand Event Cake',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.weddingCake2,
    description: 'Delicately crafted celebration cake for momentous occasions.',
  },
  {
    id: 'g-couple-cakes',
    title: 'Couples Red Velvet Cake',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.coupleRedCakes,
    description: 'Romantic cake artistry crafted for couples and anniversaries.',
  },
  {
    id: 'g-cake-collection-1',
    title: 'Artisan Pastry & Cake Flight',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollection1,
    description: 'An assortment of our fresh daily bakes and signature sponge cakes.',
  },
  {
    id: 'g-cake-collection-2',
    title: 'Gourmet Cake Collection',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollection2,
    description: 'Handcrafted cakes ready for birthdays, family parties and office celebrations.',
  },
  {
    id: 'g-cake-collection-3',
    title: 'Signature Celebration Slices',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollection3,
    description: 'Fresh cream, fruit glazes, and decadent chocolate layers.',
  },
  {
    id: 'g-cake-trio-1',
    title: 'Pastry Showcase Selection',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollectionTriple1,
    description: 'Daily fresh bakery goods displayed at our counter.',
  },
  {
    id: 'g-cake-trio-2',
    title: 'Deluxe Cake Trio',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollectionTriple2,
    description: 'A celebration of texture and flavour.',
  },
  {
    id: 'g-cake-trio-3',
    title: 'Specialty Cake Trio',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.cakeCollectionTriple3,
    description: 'Sweet treats paired perfectly with freshly brewed macchiatos.',
  },
  {
    id: 'g-strawberry-cake',
    title: 'Fresh Strawberry Cream Cake',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.strawberryCake,
    description: 'Topped with real strawberries and whipped cream.',
  },
  {
    id: 'g-strawberry-macchiato',
    title: 'Strawberry Cake & Macchiato Pair',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.strawberryCakeWithMacchiato,
    description: 'A favourite sweet pairing for afternoon coffee lovers.',
  },
  {
    id: 'g-chocolate-macchiato',
    title: 'Chocolate Cake with Macchiato',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.chocolateCakeWithMacchiato,
    description: 'Rich dark chocolate cake paired with double-shot macchiato.',
  },
  {
    id: 'g-yellow-macchiato',
    title: 'Golden Sponge with Macchiato',
    category: 'cakes',
    categoryLabel: 'Custom Cakes',
    image: assets.yellowCakeWithMacchiato,
    description: 'Fluffy citrus vanilla sponge with velvety foam.',
  },

  // Ethiopian Cultural Catering & Event Dishes
  {
    id: 'g-catering-ethiopian',
    title: 'Ethiopian Cultural Catering Buffet',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.cateringEthiopianFood,
    description: 'Authentic Ethiopian wots, sides, and fresh teff injera for events.',
  },
  {
    id: 'g-catering-cultural-event',
    title: 'Traditional Feast Catering',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.cateringEthiopianFoodEvent,
    description: 'Full-service catering for wedding banquets, family ceremonies and corporate lunches.',
  },
  {
    id: 'g-catering-event-dishes',
    title: 'Graduation & Wedding Feast Dishes',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.eventGraduationWeedingDishes,
    description: 'Generous multi-dish catering spread for graduation parties and receptions.',
  },
  {
    id: 'g-event-dish-1',
    title: 'Special Event Gourmet Dish',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.eventDish1,
    description: 'Carefully seasoned traditional dish prepared by our catering chefs.',
  },
  {
    id: 'g-event-dish-2',
    title: 'Catering Banquet Entrée',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.eventDish2,
    description: 'Slow-cooked traditional flavours with rich Ethiopian spices.',
  },
  {
    id: 'g-event-dish-3',
    title: 'Celebration Platter Dish',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.eventDish3,
    description: 'Prepared fresh for private dining and large gatherings.',
  },
  {
    id: 'g-event-dish-4',
    title: 'Savory Cultural Dish',
    category: 'catering',
    categoryLabel: 'Event Catering',
    image: assets.eventDish4,
    description: 'Traditional recipe made with authentic highland ingredients.',
  },
];

