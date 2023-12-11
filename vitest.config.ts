import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'connect',
    dir: './src',
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'istanbul',
    },
  },
});
