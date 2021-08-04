import Vue from 'vue'
import Vuex from 'vuex'

import commonActions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import apiRequests from './actions/api-requests'

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        searchValue: '',
        isMobile: false,
        isDesktop: true,
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters
})

export default store;