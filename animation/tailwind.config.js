/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: ['react-native-reanimated/plugin'],
}

// react-native-reanimated/plugin -> this plugin should be added to the end of the plugins array in your tailwind.config.js file. This is necessary for Reanimated to work correctly with Tailwind CSS in a React Native project.