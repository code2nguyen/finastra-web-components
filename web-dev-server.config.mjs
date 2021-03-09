import { devIndex, esjRender } from './tools/middlewares.mjs';
export default {
  port: 8080,
  watch: true,
  open: true,
  // appIndex: 'index.html',
  nodeResolve: true,
  plugins: [],
  middleware: [esjRender, devIndex],
  preserveSymlinks: true,
  compatibility: 'none',
  rootDir: '.',
  debug: true,
};
