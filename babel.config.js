module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['./src'], // Optional, if all aliases point into src
          alias: {
            '@assets': './src/assets',
            '@config': './src/config',
            '@components': './src/components',
            '@screens': './src/screens',
            '@store': './src/redux/store.ts',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
            '@images': './src/assets/images',
            '@actions': './src/redux/actions.ts',
            '@redux': './src/redux',
            '@': './src', // allows importing from '@/file'
          },
        },
      ],
    ],
  };
};
