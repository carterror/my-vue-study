const message = ({message}) => {
    return message.split('').reverse().join('')
}

const category = ({category}) => {
    return category
}
const categories = ({categories}) => {
    return categories
}
const error = ({error}) => {
    return error
}

const loading = ({loading}) => {
    return loading
}

export default {
    message, error, category, loading, categories
}