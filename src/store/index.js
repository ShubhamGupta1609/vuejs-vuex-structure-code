import Vue from 'vue'
import Vuex from 'vuex'

import OpeningPage from "@/store/module/OpeningPage"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        OpeningPage
    }
})

export default store