import {
    CREATE_TRANSACTION_REQUEST,
    CREATE_TRANSACTION_ERROR,
    CREATE_TRANSACTION_SUCCESS,
    GET_TRANSACTION_ERROR,
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS
} from './transaction.types.js'
import {addTransaction, getTransaction} from "../../services/transactionService.js";

const createTransaction = async ({commit}, transaction) => {
    try {
        commit(CREATE_TRANSACTION_REQUEST)
        let ctransaction = addTransaction(transaction)
        commit(CREATE_TRANSACTION_SUCCESS, ctransaction)
    } catch (e) {
        commit(CREATE_TRANSACTION_ERROR, e.message)
        console.log(e)
    }

}

const fetchTransaction = async ({commit}) => {
    try {
        commit(GET_TRANSACTION_REQUEST)
        let transactions = await getTransaction()
        commit(GET_TRANSACTION_SUCCESS, transactions)
    } catch (e) {
        commit(GET_TRANSACTION_ERROR, e.message)
        console.log(e)
    }
}

export default {
    createTransaction,
    fetchTransaction
}