
export enum AppScreen {
  WELCOME = 'welcome',
  MAIN_SELECTION = 'main-selection',
  FEATURES = 'features',
  PRODUCT_OPTIONS = 'product-options',
  PRODUCT_DETAILS = 'product-details',
  PAYMENT_FORM = 'payment-form',
  ABOUT = 'about',
  REFUND = 'refund',
  DISTRIBUTION = 'distribution',
  PRIVACY = 'privacy',
  TERMS = 'terms',
  CONTACT = 'contact',
  SHIPPING = 'shipping'
}

export enum Platform {
  NOVA = 'nova',
  MJ = 'mj',
  COMBO = 'combo'
}

export type Variant = 'windows' | 'macos' | 'custom';

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  features: Feature[];
  videoUrl: string;
  downloadUrl?: string;
  platform: Platform;
  variantName?: string;
  isCustom?: boolean;
}

export interface UserDetails {
  name: string;
  email: string;
  desiredAiName?: string;
}
