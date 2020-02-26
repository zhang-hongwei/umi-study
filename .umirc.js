// ref: https://umijs.org/config/
export default {
  treeShaking: true,
<<<<<<< HEAD
  //   routes: [
  //     {
  //       path: '/',
  //       component: '../layouts/index',
  //       routes: [
  //         { path: '/', component: '../pages/index' }
  //       ]
  //     }
  //   ],
=======

>>>>>>> b8d29db46279ae60bc4750d38fac27480a99ada5
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'umi-study',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
<<<<<<< HEAD

  proxy: {
    '/api/': {
      target: 'http://localhost:9000',
      changeOrigin: true,
      secure: false,
    },
  },
=======
>>>>>>> b8d29db46279ae60bc4750d38fac27480a99ada5
};
