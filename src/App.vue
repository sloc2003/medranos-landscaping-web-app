<template>
  <v-app>
    <app-bar />
    <v-main>
      <v-container fluid>
        <MainParallax />
        <!-- <hello-world /> -->
        <CustomerTestimonials />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import AppBar from './components/AppBar'
  import MainParallax from './components/MainParallax'
  import CustomerTestimonials from './components/CustomerTestimonials'

  export default {
    name: 'App',

    components: {
      // HelloWorld,
      AppBar,
      MainParallax,
      CustomerTestimonials,
    },

    data: () => ({
      //
    }),
  }
</script>
