/* eslint-disable */
import Vue from 'vue';
import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    newProjectName: null,
    projects: [],
    currentProject: null,
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
    },
    saveProject({ commit }, project) {
      return HTTP().put(`projects/${project.id}`, project)
      .then(() => {
        commit('unSetEditMode', project)
      });
    },
    deleteProject({ commit }, project) {
      return HTTP().delete(`projects/${project.id}`)
        .then(() => {
          commit('removeProject', project)
        });
    }

  },
  getters: {

  },
  mutations: {
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    setProjectName({project, name}) {
      project.name = name;
    },
    appendProject(state, project) {
      state.projects.push(project)
    },
    setProjects(state, projects) {
      state.projects = projects
    },
    setEditMode(state, project) {
            Vue.set(project, 'isEditMode', true);
    },
    unSetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1)
    }
  },
};
