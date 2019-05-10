<template>
  <div class="home">
    <v-container>
      <v-layout>
        <v-flex xs4>
          <Projects></Projects>
        </v-flex>
        <v-flex xs8 class="pl-4">
          <Tasks></Tasks>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
import Tasks from '@/components/Tasks.vue';

export default {
  name: 'projects',
  components: {
    Projects,
    Tasks,
  },

};
</script>
