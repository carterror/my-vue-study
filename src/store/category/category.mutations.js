const setMessage = (state, message) => {
    state.message = message
}
const setError = (state, tag) => {
    state.error = tag
}

const CREATE_CATEGORY_REQUEST = (state) => {
    console.log('CREATE_CATEGORY_REQUEST')
    state.loading = true
    state.error = false
    state.message = ''
}
const CREATE_CATEGORY_SUCCESS = (state, category) => {
    state.loading = false
    state.error = false
    state.message = ''
    state.category = category

}
const CREATE_CATEGORY_ERROR = (state, error) => {
    console.log('CREATE_CATEGORY_ERROR')
    state.loading = false
    state.error = false
    state.message = error
    state.category = null
}

const GET_CATEGORY_REQUEST = (state) => {
    console.log('GET_CATEGORY_REQUEST')
    state.loading = true
    state.error = false
    state.message = null
    state.categories = []
}

const GET_CATEGORY_SUCCESS = (state, categories) => {
    console.log('GET_CATEGORY_SUCCESS')
    state.loading = false
    state.error = false
    state.message = null
    state.categories = categories
}


const GET_CATEGORY_ERROR = (state, error) => {
    console.log('GET_CATEGORY_ERROR')
    state.loading = false
    state.error = true
    state.message = error
    state.categories = []
}

export default {
    setMessage,
    setError,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_REQUEST,
    GET_CATEGORY_ERROR,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_REQUEST,

}