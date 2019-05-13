'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService')
const BaseController = use('./BaseController')

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController extends BaseController {

  constructor(){
    super()
  }

  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth }) {
    const user = await auth.getUser();

    return await user.projects().fetch()
  }


  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const user = await auth.getUser()

    const { name } = request.all();
    const project = new Project()
    project.fill({
      name
    })

    await user.projects().save(project)

    return project;
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)
    AuthorizationService.verifyPermission(project, user)
    project.merge(request.only('name'))
    await project.save();

    return project

  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, auth }) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)

    // only the project creater can delete this project
    AuthorizationService.verifyPermission(project, user)

    await project.delete(id)

    return project
  }
}

module.exports = ProjectController
