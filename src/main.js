import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const store = createStore({
    state () {
        return {
            favourites: []
        }
    },
    mutations: {
        addFavourites (state, id) {
            let found = state.favourites.indexOf(id);
            if(found > -1) {
                state.favourites.splice(found, 1);
            } else {
                state.favourites.push(id);
            }
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
