const getNasa = (state, {date,hdurl,title,media_type,url}) => {
    state.date = date
    state.hdurl = hdurl
    state.title = title
    state.media_type = media_type
    state.url = url
}

export default {
    getNasa
}