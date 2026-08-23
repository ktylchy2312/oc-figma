/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  stories: ['../components/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: ['../tokens'],
};
