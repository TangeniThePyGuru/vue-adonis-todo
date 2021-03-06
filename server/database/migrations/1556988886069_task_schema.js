'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.boolean('completed').notNullable().default(0)
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
