module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    "react-native-reanimated/plugin",
  ],
  };
};
// this is a test for git. you can get rid of me :)

