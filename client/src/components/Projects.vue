<template>
  <Panel
    title="Projects">
    <div
      v-for="project in projects"
      :key="project.key"
      class="mb-2 project mt-2"
    >
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <span
            v-if="!project.isEditMode"
          >
            {{ project.name }}
          </span>
          <span
            v-else
          >
            <v-text-field
              autofocus
              :value="project.name"
              @keyup.enter="saveProject(project)"
              @input="setProjectName({ project, name: $event, })"
            >

            </v-text-field>
          </span>
        </v-flex>
        <v-flex xs3>
          <v-icon
            @click="setEditMode(project)"
            v-if="!project.isEditMode"
            >edit</v-icon>
          <v-icon
            @click="saveProject(project)"
            v-if="project.isEditMode"
            >check</v-icon>
          <v-icon
            @click="deleteProject(project)"
            >delete</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-flex class="pt-4 pb-4" v-if="projects.length < 1">
      You dont have any projects created!
    </v-flex>

    <CreateRecord
      placeholder="My project name...."
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject"
      />

  </Panel>
</template>

<script>
/* eslint-disable */
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from './CreateRecord.vue';
export default {
  components: {
    CreateRecord
  },
  mounted() {
    this.fetchProjects()
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects'
    ])
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'appendProject',
      'setEditMode',
      'unSetEditMode',
      'setProjectName',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style>

.project {font-size: 24px;}

.icon {cursor: pointer;}

.icon:hover {color: #333;}

</style>
