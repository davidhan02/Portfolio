switch (process.env.NODE_ENV) {
  case 'production':
    return (module.exports = require('./prod'));
  case 'test':
    return (module.exports = require('./test'));
  default:
    return (module.exports = require('./dev'));
}
