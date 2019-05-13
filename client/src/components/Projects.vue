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
          <!-- TODO: Add delete icon -->
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap>
        <v-flex xs8>
          <v-text-field
            autofocus
            placeholder="My project name.."
            @input="setNewProjectName"
            :value="newProjectName"
          ></v-text-field>
        </v-flex>
        <v-flex
          xs4
          class="pt-2 pr-4"
          >
          <v-btn
            color="green"
            @click="createProject"
          ><v-icon
          >add_circle</v-icon>
            Create
          </v-btn>
        </v-flex>
      </v-layout>
  </Panel>
</template>

<script>
/* eslint-disable */
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
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
    ]),
  },
};
</script>

<style>

.project {font-size: 24px;}

.icon {cursor: pointer;}

.icon:hover {color: #333;}

</style>
