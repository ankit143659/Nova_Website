import { Platform, ProductData } from './types';
import { ELITE_FEATURES } from './featuresData';

const GLOBAL_VIDEO_URL = "https://www.youtube.com/embed/uQo_LHobvCM?si=3MEx7Ug12pUIrsOO";

export const winProducts: ProductData[] = [
  {
    id: 'mj-windows',
    title: 'MJ v5',
    subtitle: 'HEART EDITION',
    desc: 'Advanced Cognitive Intelligence. A sentient companion that understands context and emotion.',
    price: 1399,
    platform: Platform.MJ,
    variantName: 'WINDOWS APP',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  },
  {
    id: 'vash-windows',
    title: 'Nova 7.0',
    subtitle: 'SYSTEM MASTER',
    desc: 'The Ultimate Autonomous Engine. Deep level system control and extreme automation protocols.',
    price: 1099,
    platform: Platform.VASH,
    variantName: 'WINDOWS APP',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  },
  {
    id: 'combo-windows',
    title: 'UNIFIED COMBO',
    subtitle: 'DUAL CORE',
    desc: 'Elite Performance & Human Empathy Combined. Run both Nova and MJ simultaneously.',
    price: 1999,
    platform: Platform.COMBO,
    variantName: 'UNIFIED',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  },
  {
    id: 'combo-custom-unified',
    title: 'CUSTOM UNIFIED COMBO',
    subtitle: 'CUSTOM MJ + CUSTOM NOVA',
    desc: 'Fully customized identities for both MJ and Nova engines in one powerful package.',
    price: 3299,
    platform: Platform.COMBO,
    variantName: 'CUSTOM UNIFIED',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
    isCustom: true
  },
  {
    id: 'custom-windows',
    title: 'CUSTOM BRANDED AI',
    subtitle: 'YOUR NAME. YOUR VOICE.',
    desc: 'White-label architecture. Choose your base engine (MJ or Nova) and customize its core identity.',
    price: 2499,
    platform: Platform.CUSTOM,
    variantName: 'CUSTOM',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
    isCustom: true
  }
];

export const androidProducts: ProductData[] = [
  {
    id: 'max-android',
    title: 'MAX 2.0 Assistant',
    subtitle: 'PORTABLE INTELLIGENCE',
    desc: 'Your on-the-go cognitive assistant optimized for Android architecture and mobile workflows.',
    price: 1199,
    platform: Platform.MAX,
    variantName: 'ANDROID APP',
    videoUrl: GLOBAL_VIDEO_URL,
    features: [
      { icon: 'Zap', title: 'Mobile Autonomy', desc: 'Deep Android integration' },
      { icon: 'Shield', title: 'On-device Processing', desc: 'Secure local compute' },
      { icon: 'Target', title: 'Task Execution', desc: 'Automates regular workflows' }
    ],
  }
];

export const macProducts: ProductData[] = [
  {
    id: 'mj-macos',
    title: 'MJ v5',
    subtitle: 'MACOS EDITION',
    desc: 'Advanced Cognitive Intelligence natively compiled for Apple Silicon and macOS environments.',
    price: 1599,
    platform: Platform.MJ,
    variantName: 'MACOS APP',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  }
];

export const comboWinAndProducts: ProductData[] = [
  {
    id: 'combo-max-vash',
    title: 'MAX 2.0 + Nova',
    subtitle: 'WINDOWS + ANDROID COMBO',
    desc: 'Ultimate control anywhere. Get Nova for Windows desktop and MAX 2.0 for your Android device in one unified package.',
    price: 2699,
    platform: Platform.COMBO,
    variantName: 'WIN + ANDROID',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  },
  {
    id: 'combo-max-mj',
    title: 'MAX 2.0 + MJ',
    subtitle: 'WINDOWS + ANDROID COMBO',
    desc: 'Creative intelligence meets portable autonomy. Get MJ for Windows desktop and MAX 2.0 for your Android device.',
    price: 2699,
    platform: Platform.COMBO,
    variantName: 'WIN + ANDROID',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
  },
  {
    id: 'combo-max-custom-nova',
    title: 'CUSTOM NOVA + MAX 2.0',
    subtitle: 'WINDOWS + ANDROID COMBO',
    desc: 'Get a custom branded Nova engine for Windows desktop and MAX 2.0 for your Android device.',
    price: 3299,
    platform: Platform.COMBO,
    variantName: 'CUSTOM + ANDROID',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
    isCustom: true
  },
  {
    id: 'combo-max-custom-mj',
    title: 'CUSTOM MJ + MAX 2.0',
    subtitle: 'WINDOWS + ANDROID COMBO',
    desc: 'Get a custom branded MJ companion for Windows desktop and MAX 2.0 for your Android device.',
    price: 3299,
    platform: Platform.COMBO,
    variantName: 'CUSTOM + ANDROID',
    videoUrl: GLOBAL_VIDEO_URL,
    features: ELITE_FEATURES,
    isCustom: true
  }
];

export const allProducts = [...winProducts, ...androidProducts, ...macProducts, ...comboWinAndProducts];
