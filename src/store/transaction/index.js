import actions from './transaction.actions.js'
import getters from './transaction.getters.js'
import mutations from './transaction.mutations.js'

const state = () => {
    return {
        all: [],
        error: false,
        message: '',
        transaction: null,
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