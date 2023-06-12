module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@*': '/*',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@wrappers': './src/components/wrappers',
        },
      },
    ],
  ],
};
