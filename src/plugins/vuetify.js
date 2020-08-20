import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const options = {
    theme: {
        themes: {
            light: {
                primary: '#388e3c',
            },
            dark: {
            },
        },
    },
}

export default new Vuetify(options)
