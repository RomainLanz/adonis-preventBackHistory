'use strict'

class PreventBackHistory {
  async handle ({ response }, next) {
    await next()

    response.header('Cache-Control', 'nocache, no-store, max-age=0, must-revalidate')
    response.header('Pragma', 'no-cache')
    response.header('Expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  }
}

module.exports = PreventBackHistory
