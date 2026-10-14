import type {
  BusinessHours,
  Category,
  CompanyInfo,
  Highlight,
  MenuItem,
  MessageType,
  ValuePillar,
} from '../types';

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
    name: 'Spiced Latte',
    description:
      'Double espresso, steamed milk and our house blend of cardamom, cinnamon and a touch of clove.',
    price: 130,
    category: 'espresso-hot',
    tags: ['Vegetarian', 'Gluten-Free', 'House Special'],
    featured: true,
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description:
      'A classic Addis macchiato: rich espresso marked with a spoonful of silky milk foam.',
    price: 70,
    category: 'espresso-hot',
    tags: ['Vegetarian', 'Gluten-Free'],
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

  // ---- Fresh Pastries ----
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Laminated by hand, golden and flaky with a honeycomb crumb.',
    price: 90,
    category: 'pastries',
    tags: ['Vegetarian'],
  },
  {
    id: 'house-pastry',
    name: 'Cardamom Cinnamon Roll',
    description:
      'Our house pastry: soft rolled dough, cardamom sugar and a light cream-cheese glaze.',
    price: 110,
    category: 'pastries',
    tags: ['Vegetarian', 'House Special'],
    featured: true,
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
  {
    id: 'chocolate-cake',
    name: 'Dark Chocolate Cake',
    description: 'Dense, fudgy slice made with 70% cocoa and a little espresso.',
    price: 130,
    category: 'pastries',
    tags: ['Vegetarian'],
  },

  // ---- Breakfast & Light Bites ----
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
    id: 'firfir',
    name: 'Firfir Bowl',
    description:
      'Shredded injera tossed in spiced butter and berbere, topped with a soft egg.',
    price: 220,
    category: 'breakfast',
    tags: ['Vegetarian', 'House Special'],
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
  {
    id: 'fasting-plate',
    name: 'Fasting Plate (Vegan Light Bite)',
    description: 'Shiro, gomen and miser on a petite injera. Fully vegan, light and satisfying.',
    price: 200,
    category: 'breakfast',
    tags: ['Vegan', 'Dairy-Free'],
  },
];
