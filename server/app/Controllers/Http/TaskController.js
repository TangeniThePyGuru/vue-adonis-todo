'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Task = use('App/Models/Task')
const Project = use('App/Models/Project')
const BaseController = use('./BaseController')
const AuthorizationService = use('App/Services/AuthorizationService')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController extends BaseController {

  constructor() {
    super()
  }

  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth, params }) {
    const user = await auth.getUser()
    const { projectId } = params
    const project = await Project.find(projectId)
    AuthorizationService.verifyPermission(project, user)

    return response.status(200).json({
      data: await project.tasks().fetch(),
      status: 200
    })
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth, params }) {
    const user = await auth.getUser()
    const project = await Project.find(params.projectId)

    AuthorizationService.verifyPermission(project, user)
    const task = new Task()
    task.fill(
      request.only('description')
    )

    await project.tasks().save(task)

    return response.status(200).json({
      data: task,
      status: 200
    })
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, auth }) {
    const user = await auth.getUser()

    const task = await Task.find(params.id)
    AuthorizationService.verifyPermission( await task.project().fetch(), user)

    await task.delete()

    return response.status(200).json({
      data: task,
      status: 200
    })

  }
}

module.exports = TaskController
