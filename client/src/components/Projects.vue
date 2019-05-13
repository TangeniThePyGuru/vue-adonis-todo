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
              :value="project.name"
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
            @click="unSetEditMode(project)"
            v-if="project.isEditMode"
            >check</v-icon>
          <!-- TODO: Add delete icon -->
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap>
        <v-flex xs8>
          <v-text-field
            placeholder="My project name.."
            @input="setNewProjectName"
            :value="newProjectName"
          ></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn
            color="green"
            @click="createProject"
          ><v-icon
            class="mr-2"
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
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
    ]),
  },
};
</script>

<style>

.project {font-size: 24px;}

.icon {cursor: pointer;}

.icon:hover {color: #333;}

</style>
