<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Medrano's Landscaping, LLC Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/medranoLogo.jpg')"
        transition="scale-transition"
        width="80"
      />
      <div><span class="text-h4">Medrano's Landscaping, LLC</span></div>
    </div>
    <v-spacer />
    <v-btn
      href=""
      target="_blank"
      text
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn
      href=""
      target="_blank"
      text
    >
      <span class="mr-2">Latest Projects</span>
      <v-icon>mdi-post</v-icon>
    </v-btn>
    <v-btn
      href=""
      target="_blank"
      text
    >
      <span class="mr-2">Testmonials</span>
      <v-icon>mdi-account-voice</v-icon>
    </v-btn>
    <v-btn
      href=""
      target="_blank"
      text
    >
      <span class="mr-2">About Us</span>
      <v-icon>mdi-information-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {}
</script>

<style>
</style>
