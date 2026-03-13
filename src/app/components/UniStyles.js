// ============================================
// UNISTYLES - Unified Minimalist Theme System
// Using Urbanist font family
// ============================================

// Color palette
const colors = {
  primary: '#0B0D38',
  primaryLight: '#1A1F4F',
  secondary: '#98713E',
  secondaryLight: '#D8C099',
  accent: '#22C55E',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
};

// Typography
const fontFamily = 'var(--font-urbanist), sans-serif';

// Button styles - minimalist and consistent
export const btn = {
  primary: `bg-[${colors.primary}] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[${colors.primaryLight}] transition-all duration-300 border-0`,
  secondary: `bg-white text-[${colors.primary}] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200`,
  outline: `bg-transparent text-[${colors.primary}] px-6 py-3 rounded-lg font-semibold hover:bg-[${colors.primary}]/5 transition-all duration-300 border border-[${colors.primary}]`,
  accent: `bg-[${colors.secondary}] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[${colors.secondaryLight}] hover:text-[${colors.primary}] transition-all duration-300 border-0`,
  ghost: `bg-transparent text-[${colors.primary}] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300`,
  small: `bg-[${colors.primary}] text-white px-4 py-2 rounded-lg font-medium hover:bg-[${colors.primaryLight}] transition-all duration-300 text-sm`,
};

// Input styles - clean and minimalist
export const input = {
  default: `w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[${colors.primary}] focus:ring-2 focus:ring-[${colors.primary}]/10 transition-all duration-200 font-family: ${fontFamily}`,
  small: `w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[${colors.primary}] focus:ring-2 focus:ring-[${colors.primary}]/10 transition-all duration-200`,
  search: `w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colors.primary}]/20 transition-all duration-200`,
};

// Card styles - minimalist with subtle interactions
export const card = {
  default: `bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-300`,
  elevated: 'bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300',
  flat: 'bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200',
  interactive: 'bg-white border border-gray-100 rounded-xl p-6 hover:border-[#0B0D38]/20 hover:shadow-lg transition-all duration-300 cursor-pointer',
};

// Badge styles - clean and minimal
export const badge = {
  primary: `bg-[${colors.primary}] text-white text-xs font-semibold px-3 py-1 rounded-full`,
  secondary: `bg-[${colors.secondary}] text-white text-xs font-semibold px-3 py-1 rounded-full`,
  success: 'bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full',
  outline: `border border-[${colors.primary}] text-[${colors.primary}] text-xs font-medium px-3 py-1 rounded-full`,
};

// Text heading styles
export const heading = {
  h1: `text-4xl md:text-5xl lg:text-6xl font-bold text-[${colors.primary}] leading-tight`,
  h2: `text-3xl md:text-4xl font-bold text-[${colors.primary}] leading-tight`,
  h3: `text-xl md:text-2xl font-semibold text-[${colors.primary}]`,
  h4: `text-lg md:text-xl font-semibold text-[${colors.primary}]`,
};

// Text body styles
export const text = {
  large: 'text-lg text-gray-600 leading-relaxed',
  default: 'text-base text-gray-600 leading-relaxed',
  small: 'text-sm text-gray-500',
  link: `text-[${colors.primary}] underline-offset-4 hover:underline transition-colors duration-200`,
};

// Container widths
export const container = {
  sm: 'max-w-4xl mx-auto px-4',
  md: 'max-w-6xl mx-auto px-4',
  lg: 'max-w-7xl mx-auto px-4',
  xl: 'max-w-[1400px] mx-auto px-4',
};

// Spacing utilities
export const spacing = {
  section: 'py-16 md:py-24',
  subsection: 'py-12 md:py-16',
};

// Divider
export const divider = 'border-t border-gray-100 my-8';

// Section backgrounds
export const bg = {
  white: 'bg-white',
  light: 'bg-gray-50',
  primary: `bg-[${colors.primary}]`,
  gradient: `bg-gradient-to-br from-[${colors.primary}] to-[${colors.primaryLight}]`,
};

// Animation classes
export const animations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  slideIn: 'animate-slide-in-left',
};

// Export all styles as default
export default { 
  btn, 
  input, 
  card, 
  badge, 
  heading, 
  text, 
  container, 
  spacing, 
  divider, 
  bg, 
  animations,
  colors,
  fontFamily 
};
