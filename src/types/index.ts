export type CategoryId =
  | 'espresso-hot'
  | 'cold-iced'
  | 'pastries'
  | 'breakfast';

export interface Category {
  id: CategoryId;
  label: string;
}

export type CategoryFilter = CategoryId | 'all';

export type DietaryTag = 'Vegan' | 'Gluten-Free' | 'House Special' | 'Vegetarian' | 'Dairy-Free';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Price in Ethiopian Birr */
  price: number;
  category: CategoryId;
  tags: DietaryTag[];
  /** Optional image URL. When omitted, a styled placeholder is rendered. */
  image?: string;
  featured?: boolean;
}

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface BusinessHours {
  day: DayKey;
  label: string;
  /** 24h "HH:MM". Both null means closed all day. */
  open: string | null;
  close: string | null;
}

export type MessageType = 'general' | 'catering' | 'feedback';

export interface ContactFormData {
  name: string;
  contact: string;
  messageType: MessageType;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

export interface SocialLink {
  id: 'instagram' | 'telegram' | 'tiktok';
  label: string;
  handle: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  neighborhood: string;
  landmark: string;
  parking: string;
  wifi: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  socials: SocialLink[];
}

export interface Highlight {
  id: string;
  title: string;
  detail: string;
  icon: 'coffee' | 'croissant' | 'wifi';
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  icon: 'sprout' | 'users' | 'award';
}

export interface ToastState {
  id: number;
  message: string;
}

export type GalleryCategory = 'all' | 'cakes' | 'catering' | 'ambiance';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cakes' | 'catering' | 'ambiance';
  categoryLabel: string;
  image: string;
  description: string;
}

export type BookingType = 'table' | 'catering' | 'private';

export interface BookingFormData {
  name: string;
  contact: string;
  date: string;
  time: string;
  partySize: number;
  bookingType: BookingType;
  specialRequests: string;
}

export interface BookingFormErrors {
  name?: string;
  contact?: string;
  date?: string;
  time?: string;
  partySize?: string;
  specialRequests?: string;
}
