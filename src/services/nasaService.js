import {NASA_API_KEY} from "../shared/utils/constants.js";

const getNasa = async () => {

    try {
        const nasa = await fetch(`https://api.nasa.gov/planetary/apod?api_key=hLktH8UpeowGZVWmuQ8GqBbSL7sp2HjV6Ev6qalh`)
        return nasa.json()
    } catch (e) {
        console.log(e)
    }
}

export default {
    getNasa
}