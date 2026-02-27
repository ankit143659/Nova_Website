
export enum AppScreen {
  WELCOME = 'welcome',
  MAIN_SELECTION = 'main-selection',
  PRODUCT_OPTIONS = 'product-options',
  VARIANTS = 'variants', 
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
  ANDROID = 'android',
  SPECIAL_OFFER = 'special-offer'
}

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
