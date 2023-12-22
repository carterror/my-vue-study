import CategoryService from "../../services/categoryService.js";
import { CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_ERROR, CREATE_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS } from './category.types.js'
const setMessage = ({commit}, msg) => {
    commit('setMessage', msg)
    commit('setError', true)
}

const addCategory = async ({commit}, {title, description, gasto}) => {
    try {
        commit(CREATE_CATEGORY_REQUEST)
        let categoryID = await CategoryService.addCategory({title, description, gasto})
        commit(CREATE_CATEGORY_SUCCESS, categoryID)
    }
    catch (e) {
        commit(CREATE_CATEGORY_ERROR, e)
        console.log(e)
    }
}

const getCategory = async ({commit}) => {
    try {
        commit(GET_CATEGORY_REQUEST)
        let categories = await CategoryService.getCategory()
        commit(GET_CATEGORY_SUCCESS, categories)
    }
    catch (e) {
        console.log('errerer'+e)
        commit(GET_CATEGORY_ERROR, e)
    }
}

export default {
    setMessage,
    addCategory,
    getCategory
}