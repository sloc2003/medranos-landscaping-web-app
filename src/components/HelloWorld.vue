<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/medranoLogo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to our future home on the web
        </h1>
        <p class="subheading font-weight-regular">
          We can't wait to showcase our projects hope to continue
          <br>to add to the long list of satisfied customers!
          <br>Contact us on Facebook
          <br>
          <a
            href=""
            target=""
          >Facebook Profile</a>
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>
        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target=""
          > {{ next.text }} </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      whatsNext: [
        {
          text: 'Develop Latest Project pages',
          href: '',
        },
        {
          text: 'Develop Testimonials section',
          href: '',
        },
        {
          text: 'Devlop About Us section',
          href: '',
        },
      ],
    }),
  }
</script>
