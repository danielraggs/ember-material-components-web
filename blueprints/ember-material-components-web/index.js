module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  afterInstall: function() {
    return this.addPackagesToProject([
      { name: '@material/base', target: '^0.1.0' },
      { name: '@material/animation', target: '^0.1.0' },
      { name: '@material/theme', target: '^0.1.0' },
      { name: '@material/checkbox', target: '^0.1.0' },
    ]);
  }
};