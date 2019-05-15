/* eslint-disable */
import Vue from 'vue';
import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    tasks: [],
    newTaskDescription: null,
  },
  actions: {
    fetchTasksForCurrentProject({ commit }, project) {
      return HTTP().get(`projects/${project.id}/tasks`)
      .then(({ data }) => {
        commit('setTasks', data.data);
      });
    },
    createTask({commit, state, rootState}) {
      return HTTP().post(`projects/${rootState.projects.currentProject.id}/tasks`, {
        description: state.newTaskDescription
      })
      .then(({ data }) => {
        commit('appendTask', data.data);
        commit('setNewTaskDescription', null);
      });
    },
    saveTask({ commit, rootState }, task) {
      return HTTP().put(`projects/${rootState.projects.currentProject.id}/tasks/${task.id}`, task)
        .then(() => {
          commit('unSetEditMode', task)
        });
    },
    deleteTask({ commit, rootState }, task) {
      console.log(task);
      return HTTP().delete(`projects/${rootState.projects.currentProject.id}/tasks/${task.id}`)
        .then(() => {
          commit('removeProject', task)
        });
    },
  },
  getters: {

  },
  mutations: {
    setTasks(state, tasks){
      state.tasks = tasks;
    },
    setNewTaskDescription( state , description) {
      state.newTaskDescription = description;
    },
    setTaskDescription(state, { task, description }) {
      task.description = description;
    },
    appendTask(state, task) {
      state.tasks[state.tasks.length] = task;
    },
    unSetEditMode(state, task) {
      Vue.set(task, 'isEditMode', false);
    },
    setEditMode(state, task) {
      console.log(task);
      Vue.set(task, 'isEditMode', true);
    },
    removeProject(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    toggleCompleted(state, task) {
      task.completed = !task.completed;
    }
  },
};
