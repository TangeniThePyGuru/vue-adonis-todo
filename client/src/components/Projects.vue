<template>
  <Panel
    title="Projects">
    <div
      v-for="project in projects"
      :key="project.key"
      class="mb-2 project mt-2"
    >
      <EditableRecord
        :isEditMode="project.isEditMode"
        :name="project.name"
        @onClick="projectClicked(project)"
        @onInput="setProjectName({ project, name: $event, })"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
        @onEditMode="setEditMode(project)"
      />
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
import EditableRecord from './EditableRecord.vue';
export default {
  components: {
    CreateRecord,
    EditableRecord,
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
    projectClicked(project){
      this.setCurrentProject(project);
      this.fetchTasksForCurrentProject(project);
    },
    ...mapMutations('projects', [
      'setNewProjectName',
      'appendProject',
      'setEditMode',
      'unSetEditMode',
      'setProjectName',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'fetchTasksForCurrentProject'
    ])
  },
};
</script>

<style>

.project {font-size: 24px;}

.icon {cursor: pointer;}

.icon:hover {color: #333;}

</style>
