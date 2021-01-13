module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    test: {
      plugins: [
        'istanbul'
      ]
    }
  },
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
