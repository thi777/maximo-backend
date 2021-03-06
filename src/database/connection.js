const knex = require('knex')

const configuration = require('../../knexfile')
const env = process.env.DB_ENV || 'development'
const connection = knex(configuration[env])

module.exports = connection
