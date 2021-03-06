module.exports = {
  // Autoprefixer
  autoprefixer: {
    // https://github.com/postcss/autoprefixer#browsers
    browsers: [
      'Explorer >= 10',
      'ExplorerMobile >= 10',
      'Firefox >= 30',
      'Chrome >= 34',
      'Safari >= 7',
      'Opera >= 23',
      'iOS >= 7',
      'Android >= 4.4',
      'BlackBerry >= 10'
    ]
  },
  // BrowserSync
  browserSync: {
    browser: 'default', // or ["google chrome", "firefox"]
    https: false, // Enable https for localhost development.
    notify: false, // The small pop-over notifications in the browser.
    port: 9000
  },
  // GitHub Pages
  ghPages: {
    branch: 'gh-pages',
    domain: 'polymer-starter-kit.startpolymer.org', // change it!
    origin: 'origin'
  },
  // PageSpeed Insights
  // Please feel free to use the `nokey` option to try out PageSpeed
  // Insights as part of your build process. For more frequent use,
  // we recommend registering for your own API key. For more info:
  // https://developers.google.com/speed/docs/insights/v1/getting_started
  pageSpeed: {
    key: '', // need uncomment in task
    nokey: true,
    site: 'http://polymer-starter-kit.startpolymer.org', // change it!
    strategy: 'mobile' // or desktop
  }
};
