const loglevel = require('loglevel')
const R = require('ramda')
const moment = require('moment')
require('colors')

const dateFormat = process.env.LOG_DATE_FORMAT ? process.env.LOG_DATE_FORMAT : 'YYYY-MM-DD'
const timeFormat = process.env.LOG_TIME_FORMAT ? process.env.LOG_TIME_FORMAT : 'H:mm:ss.SSS'
const logLevel = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'debug'
const logFormat = process.env.LOG_FORMAT ? process.env.LOG_FORMAT : 'console'

loglevel.setDefaultLevel(logLevel)

const formatMessage = message => {
  const date = moment()
  const formattedDate = date.format(dateFormat)
  const formattedTime = date.format(timeFormat)

  switch (logFormat) {
    case 'raw':
      return message
    case 'json':
      const data = { date: date.format('X'), message }
      return JSON.stringify(data)
    default:
      return `${formattedDate.yellow} ${formattedTime.green}: ${message}`
  }
}

const write = R.curry((formatter, message) => {
  R.pipe(
    formatMessage,
    formatter
  )(message)
})

const logger = {
  trace: write(loglevel.trace),
  debug: write(loglevel.debug),
  info: write(loglevel.info),
  warn: write(loglevel.warn),
  error: write(loglevel.error)
}

module.exports = logger
