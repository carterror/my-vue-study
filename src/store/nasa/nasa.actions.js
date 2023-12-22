import nasaService from "../../services/nasaService.js";

const getNasa = async ({commit}) => {
    try {
        let nasa = await nasaService.getNasa()
        console.log(nasa)
        commit('getNasa', nasa)
    }
    catch (e) {
        console.log(e)
    }
}

export default {
    getNasa,
}