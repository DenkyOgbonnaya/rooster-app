/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/navigations/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#5653FC',
        onPrimary: '#FFFFFF',
        background: '#FFFFFF',
        body: '#4E5D69',
        heading: "#242424",
        muted:"#7E919F",
        disabled: '#535862',
        inactive: "#717680",
        borderLight: "#F5F5F5",
        border: '#F3F4F6',
        placeholder: '#717680',
        card: '#FFFFFF'
       
      },
      fontSize: {
         xs: [
          '0.0.625rem', //10px
        ],
        sm: [
          '0.75rem', //12px
        ],
        md: [
          '0.875rem', //14px
        ],
        base: [
          '1rem', //16px
        ],
        lg: [
          '1.125rem', // 18px
        ],
        xl: [
          '1.25rem', // 20px
        ],
     
        '2xl': [
          '1.5rem', //24px
        ],
        '3xl': [
          '1.25rem', // 28px
         
        ],
        '4xl': [
          '1.875rem', // 30px
        
        ],
        '5xl': [
          '2rem', // 32px
        
        ],
        '6xl': [
          '2.281rem', // 36.496px
          
        ],
      
      },
      fontFamily: {
        body_regular: ['Manrope-Regular'],
        body_medium: ['Manrope-Medium'],
        body_semibold: ['Manrope-SemiBold'],
        body_bold: ['Manrope-Bold'],

        heading_regular: ['Manrope-Regular'],
        heading_medium: ['Manrope-Medium'],
        heading_semibold: ['Manrope-SemiBold'],
        heading_bold: ['Manrope-Bold'],

        label_regular: ['Inter-Regular'],
        label_medium: ['Inter-Medium'],
        label_semibold: ['Inter-SemiBold'],
        label_bold: ['Inter-Bold'],
      },
      screens: {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1250px',
      },
      borderRadius: {
        xs: '0.313rem',// 5px
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '6.25rem', // 100px
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
  },
};