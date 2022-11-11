const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer:{
    //   proxy: {
    //     '^/oauth': {
    //       target: 'https://www.linkedin.com',
    //       ws: true,
    //       changeOrigin: true
    //     },
    //     '^/v2': {
    //       target: 'https://api.linkedin.com',
    //       changeOrigin: true
    //     }
    //   }
    // },
    configureWebpack:{
      // css: {
      //   loaderOptions: {
      //     sass: {
      //       prependData: '@import "~@/assets/sass/plugins.scss',
      //       sassOptions: {
      //         quietDeps: true
      //       }
      //     }
      //   }
      // },
    // plugins: [
    //         new MiniCssExtractPlugin({
    //           filename: '[name].css'
    //         })
    //       ],
          optimization: {
            // splitChunks: {
            //   cacheGroups: {
            //     shared: {
            //       test: /[\\/]node_modules[\\/]/,
            //       name: 'vendor',
            //       enforce: true,
            //       chunks: 'all',
            //     }
            //   }
            // },
          //   splitChunks: {
          //       minSize: 10000,
          //       maxSize: 250000,
          //     cacheGroups: {
          //         node_vendors: {
          //             test: /[\\/]node_modules[\\/]/,
          //             chunks: "all",
          //             priority: 1
          //         },
          //         styles: {
          //           name: 'styles',
          //           test: /\.s?css$/,
          //           chunks: 'all',
          //           minChunks: 9,
          //           reuseExistingChunk: true,
          //           enforce: true,
          //         },
          //     }
          // }
          },
        //   performance: {
        //     hints: "warning", // enum
        //     maxAssetSize: 1048576, // int (in bytes),
        //     maxEntrypointSize: 1048576, // int (in bytes)
        // },
        
    // lintOnSave: true,
    // filenameHashing: false,
    // configureWebpack: {
    //   optimization: {
    //     cacheGroups: {
    //       default: false,
    //       // Merge all the CSS into one file
    //       styles: {
    //         name: 'styles',
    //         test: /\.s?css$/,
    //         chunks: 'all',
    //         minChunks: 9,
    //         reuseExistingChunk: true,
    //         enforce: true,
    //       },
    //     },
     // }
    }
})

// module.exports = {
//   configureWebpack:{
//     plugins: [
//       new MiniCssExtractPlugin({
//         filename: '[name].css'
//       })
//     ],
//     optimization: {
//       // splitChunks: {
//       //   cacheGroups: {
//       //     shared: {
//       //       test: /[\\/]node_modules[\\/]/,
//       //       name: 'vendor',
//       //       enforce: true,
//       //       chunks: 'all',
//       //     }
//       //   }
//       // }
//     //   splitChunks: {
//     //       minSize: 10000,
//     //       maxSize: 250000,
//     //     cacheGroups: {
//     //         node_vendors: {
//     //             test: /[\\/]node_modules[\\/]/,
//     //             chunks: "all",
//     //             priority: 1
//     //         },
//     //         styles: {
//     //           name: 'styles',
//     //           test: /\.s?css$/,
//     //           chunks: 'all',
//     //           minChunks: 9,
//     //           reuseExistingChunk: true,
//     //           enforce: true,
//     //         },
//     //     }
//     // }
//     },
//     performance: {
//       hints: "warning", // enum
//       maxAssetSize: 1048576, // int (in bytes),
//       maxEntrypointSize: 1048576, // int (in bytes)
//   },
//   }
// }

