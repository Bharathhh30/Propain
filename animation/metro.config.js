const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config'); 

let config = getDefaultConfig(__dirname)

config  =  withNativeWind(config, { input: './src/global.css' })
 
module.exports = wrapWithReanimatedMetroConfig(config);



// this is how the metro file looks when using native wind and reanimated