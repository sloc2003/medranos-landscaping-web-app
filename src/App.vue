<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container fluid>
        <MainParallax />
        <!-- <hello-world /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import AppBar from './components/AppBar'
  import MainParallax from './components/MainParallax'

  export default {
    name: 'App',

    components: {
      // HelloWorld,
      AppBar,
      MainParallax,
    },

    data: () => ({
      //
    }),
  }
</script>
