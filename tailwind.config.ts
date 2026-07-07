import type { Config } from 'tailwindcss'

/**
 * Klam marketing design system.
 *
 * Mirrors the "Klam" React Native app: cream is the canvas, sage is the only
 * saturated hero color, honey + terracotta are rare accents. Never pure white,
 * never blue/purple/violet (except the functional `info` semantic), no gradients,
 * no neon, no harsh drop shadows.
 */
const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- sage: the one saturated brand color (CTAs, hero) ---
        sage: {
          50: '#F2F8F1',
          100: '#E4F0E2',
          200: '#C7E0C3',
          300: '#9ECB98',
          400: '#72B46B',
          500: '#4F9D46', // primary / CTAs
          600: '#3F7D38', // pressed
          700: '#2F5E2A',
          800: '#1F3E1C',
          900: '#0F1F0E',
        },
        // --- cream: the canvas. 100 is the page background — never pure white ---
        cream: {
          50: '#FAF7F0', // card surfaces
          100: '#F5F1E8', // page background (always)
          200: '#E8E4DB', // dividers
          300: '#D6D1C4',
          400: '#B8B2A3',
          500: '#8F8A7D',
        },
        // --- accents: use sparingly ---
        honey: {
          500: '#E8A92B', // reward / XP accent
        },
        terracotta: {
          500: '#D97852', // warmth accent
        },
        // --- ink: text + neutrals. 800 is primary text.
        //     400–700 interpolated between the given 300 and 800 anchors. ---
        ink: {
          300: '#A3A3A3',
          400: '#8A8A8A',
          500: '#6E6E6E',
          600: '#545454',
          700: '#3D3D3D',
          800: '#2B2B2B', // primary text
          900: '#1A1A1A',
        },
        // --- semantic (functional state colors only, not decoration) ---
        success: '#4F9D46', // = sage.500
        warning: '#E8A92B', // = honey.500
        error: '#C65444',
        info: '#5B7DB1', // the ONLY sanctioned blue; state messaging only

        // Convenience aliases for surfaces so intent reads in markup.
        canvas: '#F5F1E8', // = cream.100, page background
        surface: '#FAF7F0', // = cream.50, card surfaces
        divider: '#E8E4DB', // = cream.200
      },

      fontFamily: {
        // Fraunces for display/headlines; Inter for body + UI (the default sans).
        display: ['var(--font-fraunces)', 'Fraunces', 'ui-serif', 'Georgia', 'serif'],
        fraunces: ['var(--font-fraunces)', 'Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // Type scale — [size, { lineHeight, letterSpacing }]. Sizes in px for parity
      // with the app spec. Display sizes get slightly tight tracking (Fraunces).
      fontSize: {
        hero: ['96px', { lineHeight: '104px', letterSpacing: '-0.02em' }],
        display: ['72px', { lineHeight: '80px', letterSpacing: '-0.02em' }],
        headline: ['32px', { lineHeight: '40px', letterSpacing: '-0.01em' }],
        title: ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        subtitle: ['20px', { lineHeight: '28px' }],
        body: ['16px', { lineHeight: '24px' }],
        small: ['14px', { lineHeight: '20px' }],
        caption: ['13px', { lineHeight: '18px' }],
      },

      // 8-point grid. Tailwind's numeric scale (1=4px … 24=96px) already covers
      // these; these named tokens make the allowed steps explicit and greppable.
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
      },

      // lg (16px) is the default card radius; `rounded` == `rounded-lg`.
      borderRadius: {
        sm: '8px', // chips
        md: '12px', // inputs
        DEFAULT: '16px',
        lg: '16px', // cards (default)
        xl: '20px', // modals / featured
        '2xl': '28px', // hero cards
        full: '9999px', // buttons / pills
      },

      // Motion is restrained: one shared easing, a calm default duration. The
      // slower ~1200ms count-up (score reveal) is applied inline where used.
      transitionTimingFunction: {
        klam: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },

      // Soft, neutral elevation. Shadow color is ink (#2B2B2B), never black.
      boxShadow: {
        none: 'none',
        DEFAULT: '0 1px 3px rgba(43, 43, 43, 0.04)',
        sm: '0 1px 3px rgba(43, 43, 43, 0.04)',
        card: '0 1px 3px rgba(43, 43, 43, 0.04)', // resting cards
        md: '0 4px 12px rgba(43, 43, 43, 0.06)', // hover / raised
        lg: '0 8px 24px rgba(43, 43, 43, 0.08)', // elevated / hero
        elevated: '0 8px 24px rgba(43, 43, 43, 0.08)',
        hero: '0 8px 24px rgba(43, 43, 43, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
