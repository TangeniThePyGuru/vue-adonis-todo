<template>
  <Panel title="Tasks">

    <div
      v-for="task in tasks"
      :key="task.key"
      class="mb-2 project mt-2"
    >
      <EditableRecord
          :class="'elevation-2 pa-2 headline'"
          :isEditMode="task.isEditMode"
          :name="task.description"
          @onInput="setTaskDescription({
            task,
            description: $event,
          })"
          @onSave="saveTask(task)"
          @onDelete="deleteTask(task)"
          @onEditMode="setEditMode(task)"
      >
        <v-icon
          v-ripple
          @click="checkCompleted(task)">
          {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
        </v-icon>
      </EditableRecord>
    </div>

    <v-flex class="pt-4 pb-4" v-if="tasks.length < 1">
        You dont have any tasks for this project!
    </v-flex>

    <CreateRecord
      placeholder="My task name...."
      @onInput="setNewTaskDescription"
      :value="newTaskDescription"
      @create="createTask"
    />

  </Panel>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  name: 'create-record',
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskDescription',
    ]),
  },
  methods: {
    ...mapMutations('tasks', [
      'setNewTaskDescription',
      'setTaskDescription',
      'setEditMode',
      'toggleCompleted',
    ]),
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
      'deleteTask',
    ]),
    checkCompleted(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>

</style>
