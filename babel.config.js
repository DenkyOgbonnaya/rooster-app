module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@components': './src/components',
          '@styles': './src/styles',
          '@utils': './src/utills',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@assets': './src/assets',
          '@types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};