/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630648247495_4279';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: '1.15.90.134',
      // port
      port: '3307',
      // username
      user: 'root',
      // password
      password: '123',
      // database
      database: 'myBlog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ '*' ]
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // config.security = {
  //   csrf: {enable: false},
  //   domainWhiteList: [ '*' ]
  // };
  // config.cors = {
  //   origin: 'http://localhost:3000', //只允许这个域进行访问接口
  //   credentials: true,   // 开启认证
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  // };
  return {
    ...config,
    ...userConfig,
  };
};

