<template>
  <v-toolbar color="green" dark fixed>
      <v-toolbar-title class="mr-4">My Todo</v-toolbar-title>
      <v-toolbar-items v-if="isLoggedIn">
        <v-btn flat>
          <v-icon class="mr-2">playlist_add_check</v-icon>
          Projects
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/register" v-if="!isLoggedIn">
          <v-icon class="mr-2">account_box</v-icon>
          Register
        </v-btn>
        <v-btn flat to="/login"  v-if="!isLoggedIn">
          <v-icon class="mr-2">fingerprint</v-icon>
          Login
        </v-btn>
        <v-btn flat v-if="isLoggedIn" @click="logout()">
          <v-icon class="mr-2">exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
    ...mapActions('authentication', [
      'logout',
    ]),
  },
};
</script>

<style>

</style>
