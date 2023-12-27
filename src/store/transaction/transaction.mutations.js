const GET_TRANSACTION_REQUEST = (state) => {
    state.loading = true
    state.error = false
    state.message = ''
    state.transaction = ''
}

const GET_TRANSACTION_SUCCESS = (state, transactions) => {
    state.loading = false
    state.error = false
    state.message = null
    state.all = transactions
}

const GET_TRANSACTION_ERROR = (state, err) => {
    state.loading = false
    state.error = true
    state.message = err
    state.transaction = null
}

const CREATE_TRANSACTION_REQUEST = (state) => {
    state.loading = true
    state.error = false
    state.message = ''
    state.transaction = null
}

const CREATE_TRANSACTION_SUCCESS = (state, transaction) => {
    state.loading = false
    state.error = false
    state.message = ''
    state.transaction = transaction
}

const CREATE_TRANSACTION_ERROR = (state, err) => {
    state.loading = false
    state.error = true
    state.message = err
    state.transaction = null
    state.all = []
}


export default {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_ERROR,
    GET_TRANSACTION_SUCCESS,
    CREATE_TRANSACTION_REQUEST,
    CREATE_TRANSACTION_SUCCESS,
    CREATE_TRANSACTION_ERROR
}