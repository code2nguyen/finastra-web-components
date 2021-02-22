import { devIndex, esjRender } from './tools/middlewares.mjs';
export default {
  port: 8080,
  watch: true,
  open: true,
  nodeResolve: {
    exportConditions: ['development'],
    moduleDirectories: ['./node_modules'],
  },
  plugins: [],
  middleware: [esjRender, devIndex],
  preserveSymlinks: true,
  compatibility: 'none',
  rootDir: '.',
  debug: true,
};
