module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: './env/demo.env',
      allowUndefined: true,
      safe: false,
    }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@redux': './src/redux',
          '@api': './src/api',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
