const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
                '@primary-color': '#00b894',
                "@secondary-color": '#00B894',
                '@link-color': '#52DF9A',
                '@success-color' : '#00b894',
                '@link-hover-color': '#00B894',
                '@border-radius-base': '2px',
                '@input-icon-color':'#52DF9A',
                '@menu-bg':'#f2f2f2',
                '@menu-item-active-bg': '#f2f2f2',
                '@menu-item-color': "#00B894",
                '@menu-item-hover-bg': '#f2f2f2',
                '@btn-primary-bg': '#52DF9A',
                '@slider-track-background-color': '#f2f2f2',
                '@layout-header-background': '#f2f2f2',
                '@input-icon-hover-color': '#00B894',
                '@drawer-bg': '#f2f2f2',
                '@error': '#FF7675'
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  }