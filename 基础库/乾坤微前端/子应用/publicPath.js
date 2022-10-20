if (window.__POWERED_BY_QIANKUN__ && process.env.VUE_APP_ENV === 'development') {
    // 本地开发环境使用乾坤注入的，其他情况使用vue.config.js中配置的
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}