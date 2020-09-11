// 路由表
const router = {};

// const router = {
//   get: {
//     list: function() {},
//     del: function() {},
//   },
//   post: {
//     add: function() {},
//   },
// };

function addRouter(method, url, fn) {
  method = method.toLowerCase();
  url = url.toLowerCase();

  router[method] = router[method] || {};
  router[method][url] = fn;
  // console.log('router', router)
}

function findRouter(method, url) {
  method = method.toLowerCase();
  url = url.toLowerCase();

  if (!router[method] || !router[method][url]) {
    return null;
  } else {
    return router[method][url];
  }
}

module.exports = {
  addRouter, findRouter
};
