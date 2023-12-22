import actions from './category.actions'
import getters from './category.getters'
import mutations from './category.mutations'

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