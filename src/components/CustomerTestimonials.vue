<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(testimony, i) in testimonials"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-card
            class="mx-auto fill-height"
            min-width="400"
          >
            <v-img
              class="white--text align-end"
              height="60%"
              :src="testimony.src"
            >
              <v-card-title> project title</v-card-title>
            </v-img>
            <v-card-text class="text-centered">{{ testimony.quote }}</v-card-text>
            <!-- <v-card-subtitle class="display-1"> - {{ testimony.custName}}</v-card-subtitle> -->
            <v-list two-line>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-right"> - {{testimony.custName}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data() {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        testimonials: [
          {
            quote: 'they are great!',
            custName: 'Jane Doe',
            src: require('../assets/testimonials/custFirst.jpg'),
          },
          {
            quote: 'they are awesome!',
            custName: 'Jane Doa',
            src: require('../assets/testimonials/custFirst600.jpg'),
          },
          {
            quote: 'they are outstanding!',
            custName: 'Jane Dou',
            src: require('../assets/testimonials/logo.png'),
          },
        ],
      }
    },
    methods: {
      getTestimonials() {},
    },
  }
</script>