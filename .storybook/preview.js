import '../tokens/tokens.css';
import '../base.css';

// Every component stylesheet, loaded once — the same thing index.html does with <link> tags.
import.meta.glob('../components/**/*.css', { eager: true });

/** @type {import('@storybook/html-vite').Preview} */
const preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          'Actions',
          'Forms',
          'Navigation',
          'Cards and rows',
          'Dashboard',
          'Board and empty states',
          'Overlays',
          'Separators',
          'Icons',
          'Other',
        ],
      },
    },
  },

  // The Figma file is dark-first, so dark is the default here too.
  globalTypes: {
    theme: {
      description: 'Colour theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark', icon: 'circle', title: 'Dark' },
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'system', icon: 'browser', title: 'System' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (story, context) => {
      const theme = context.globals.theme;
      const root = document.documentElement;
      if (theme === 'system') root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', theme);
      // The canvas iframe has no page chrome of its own; give it the surface colour so a
      // component sitting on --color-surface-default is not judged against white.
      document.body.style.background = 'var(--color-surface-background)';
      document.body.style.color = 'var(--color-text-primary)';
      document.body.style.padding = '24px';
      return story();
    },
  ],
};

export default preview;
