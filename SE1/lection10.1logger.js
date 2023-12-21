'use strict'

const logger = level => {
  const color = logger.color[level] || logger.color.info
  return s => {
    const date = new Date().toISOString()
    console.log(color + date + '\t' + s)
  }
}

logger.color = {
  warning: '\x1b[1;33m',
  error: '\x1b[1;31m',
  info: '\x1b[1;37m',
}

const warning = logger('warning')
const error = logger('error')
const debug = logger('debug')
const slow = logger('slow')

warning('Hello')
error('World')
debug('lo')
slow('Po')
