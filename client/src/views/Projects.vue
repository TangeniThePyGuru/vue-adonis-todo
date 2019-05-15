<template>
  <div class="home">
    <v-container>
      <v-layout>
        <v-flex xs4>
          <Projects></Projects>
        </v-flex>
        <v-flex xs8 class="pl-4" v-if="currentProject">
          <Tasks></Tasks>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Projects from '@/components/Projects.vue';
import Tasks from '@/components/Tasks.vue';
import router from '../router';


export default {
  name: 'projects',
  components: {
    Projects,
    Tasks,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
    ...mapState('projects', [
      'currentProject',
    ]),
  },
};
</script>
