import actions from './transaction.actions.js'
import getters from './transaction.getters.js'
import mutations from './transaction.mutations.js'

const state = () => {
    return {
        categories: [],
        error: false,
        message: '',
        category: null,
        loading: false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}