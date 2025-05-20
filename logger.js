const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log' })
  ]
});

module.exports = logger;
