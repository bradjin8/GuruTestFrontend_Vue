const path = require("path");

module.exports = {
  // publicPath: '/metronic/preview/vue/demo1/',
  configureWebpack: {
    resolve: {
      alias: {
        // If using the runtime only build
        vue$: "vue/dist/vue.runtime.esm.js" // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });

    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc.js");
        return options;
      });
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      },
      sass: {
        prependData: `@import "@/assets/sass/global/integration/frameworks/vue/vuetify/variables.scss"`
      },
      scss: {
        prependData: `@import "@/assets/sass/global/integration/frameworks/vue/vuetify/variables.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
