<template>
  <v-layout row wrap>
    <v-flex xs8>
      <v-text-field
        autofocus
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      ></v-text-field>
    </v-flex>
    <v-flex
      xs4
      class="pt-1 text-xs-right"
      >
      <v-btn
        color="green"
        style="color: white"
        @click="$emit('create')"
      ><v-icon
      >add_circle</v-icon>
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style>

</style>
