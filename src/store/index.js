import {createStore, createLogger} from 'vuex'
import category from "./category";
import transaction from "./transaction";
import nasa from "./nasa";
import {NODE_ENV} from "../shared/utils/constants.js";


const debug = NODE_ENV !== 'production'
console.log(NODE_ENV)
export default createStore({
    modules: {
        nasa,
        category,
        transaction
    },
    strict: debug ? [createLogger()] : [],
    plugins: debug ? [createLogger()] : []
})