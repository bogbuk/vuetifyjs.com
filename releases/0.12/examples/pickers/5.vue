<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md12 lg4 class="ma-3">
        <v-time-picker v-model="e5" dark></v-time-picker>
      </v-flex>
      <v-flex md12 lg8 class="ma-3">
        <v-time-picker v-model="e5" landscape dark></v-time-picker>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e5: null,
      }
    }
  }
</script>
