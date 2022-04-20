
module.exports = {
  './src/**/*.{ts,tsx,js,jsx}': "sh -c 'yarn type-check'",
  './src/**/*.{ts,tsx,js,jsx}': 'yarn lint-fix'
};
