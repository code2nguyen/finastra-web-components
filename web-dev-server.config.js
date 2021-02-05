module.exports = {
  port: 8080,
  watch: true,
  open: true,
  nodeResolve: {
    exportConditions: ['development'],
    moduleDirectories: ['./node_modules'],
  },
  appIndex: 'demo/index.html',
  plugins: [],
  preserveSymlinks: true,
  compatibility: 'none',
  rootDir: '.',
  debug: true,
};
