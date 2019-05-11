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
import { mapGetters } from 'vuex';
import Projects from '@/components/Projects.vue';
import Tasks from '@/components/Tasks.vue';
import router from '../router'


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
    return;
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>
