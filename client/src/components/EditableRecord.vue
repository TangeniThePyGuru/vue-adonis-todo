<template>
  <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <span
            id="title"
            v-if="!isEditMode"
            @click="$emit('onClick')"
          >
            {{ name }}
          </span>
          <span
            v-else
          >
            <v-text-field
              autofocus
              :value="name"
              @keyup.enter="$emit('onSave')"
              @input="$emit('onInput',$event)"
            ></v-text-field>
          </span>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
          <v-icon
            @click="$emit('onEditMode')"
            v-if="!isEditMode"
            >edit</v-icon>
          <v-icon
            @click="$emit('onSave')"
            v-if="isEditMode"
            >check</v-icon>
          <v-icon
            @click="$emit('onDelete')"
            >delete</v-icon>
        </v-flex>
      </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'name',
  ],
};
</script>

<style>

  #title {
    cursor: pointer;
  }

</style>
