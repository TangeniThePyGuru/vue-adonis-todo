/* eslint-disable */

import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    newProjectName: null,
    projects: [],
  },
  actions: {
    fetchProjects({ commit }) {
      return HTTP().get('projects')
      .then(({ data }) => {
        commit('setProjects', data)
      });
    },
    createProject({commit, state}){
      return HTTP().post('projects', {
        name: state.newProjectName,
      }).then(({ data }) => {
        commit('appendProject', data)
        // reset the new project name to null
        commit('setNewProjectName', null)
      });
    }
  },
  getters: {

  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project)
    },
    setProjects(state, projects) {
      state.projects = projects
    },
  },
};
