import actions from './nasa.actions.js'
import getters from './nasa.getters.js'
import mutations from './nasa.mutations.js'

const state = () => {
    return {
        copyright: '',
        date: '',
        explanation: '',
        hdurl: '',
        media_type: '',
        service_version: '',
        title: '',
        url: ''
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}