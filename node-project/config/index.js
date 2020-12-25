const process = require('process');

const mode = (process.env.CLICOLOR == 1 ? 'dev' : 'prod');

module.exports = {
  mode,
  ...(mode == 'dev' ? require('./config.dev') : require('./config.prod'))
};
