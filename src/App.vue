<template>
  <v-app>
    <app-bar />
    <v-main>
      <hello-world />
    </v-main>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import AppBar from './components/AppBar'

  export default {
    name: 'App',

    components: {
      HelloWorld,
      AppBar,
    },

    data: () => ({
      //
    }),
  }
</script>
