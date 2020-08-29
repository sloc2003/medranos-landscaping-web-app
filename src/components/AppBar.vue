<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center ">
      <v-img
        alt="Medrano's Landscaping, LLC Logo"
        class="mr-2 hidden-md-and-down"
        contain
        :src="require('../assets/medranoLogo.jpg')"
        transition="scale-transition"
        width="80"
      />
      <div class="text-h6 text-md-h5">Medrano's Landscaping, LLC</div>
    </div>
    <v-spacer />
    <v-tooltip
      bottom
      :disabled="$vuetify.breakpoint.lgAndUp"
    ><template v-slot:activator="{on}">
        <v-btn
          href=""
          target="_blank"
          text
          v-on="on"
        >
          <span class="mr-2 hidden-md-and-down">Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </template>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip
      bottom
      :disabled="$vuetify.breakpoint.lgAndUp"
    >
      <template v-slot:activator="{on}">
        <v-btn
          href=""
          target="_blank"
          text
          v-on="on"
        >
          <span class="mr-2 hidden-md-and-down">Latest Projects</span>
          <v-icon>mdi-post</v-icon>
        </v-btn>
      </template><span>Latest Projects</span>
    </v-tooltip>
    <v-tooltip
      bottom
      :disabled="$vuetify.breakpoint.lgAndUp"
    >
      <template v-slot:activator="{on}">
        <v-btn
          href=""
          target="_blank"
          text
          v-on="on"
        >
          <span class="mr-2 hidden-md-and-down">Testmonials</span>
          <v-icon>mdi-account-voice</v-icon>
        </v-btn>
      </template>
      <span>Testmonials</span>
    </v-tooltip>
    <v-tooltip
      bottom
      :disabled="$vuetify.breakpoint.lgAndUp"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          href=""
          target="_blank"
          text
          v-bind="attrs"
          v-on="on"
        >
          <span class="mr-2 hidden-md-and-down">About Us</span>
          <v-icon>mdi-information-variant</v-icon>
        </v-btn>
      </template>
      <span>ToolTip</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
  export default {}
</script>

<style>
</style>
