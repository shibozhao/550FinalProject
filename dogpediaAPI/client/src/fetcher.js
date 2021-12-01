import config from './config.json'

// use LIKE statement to find all the breeds containing the name. 
// Please select all the records with "Breed" and "Country"
const getBreedSearch = async (name, page, pagesize) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/home?name=${name}`, {
        method: 'GET',
    })
    return res.json()
}


const getAllInfo = async (breed) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/breed?name=${breed}`, {
        method: 'GET',
    })
    return res.json()
}
const getRandomBreed = async () => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/random`, {
        method: 'GET',
    })
    return res.json()
}

const getBreedCriteria = async (country, group, heightLow, heightHigh, weightLow, weightHigh, lifespanLow, lifespanHigh, friendlinessLow, friendlinessHigh, intelligenceLow, intelligenceHigh, adaptbilityLow, adaptbilityHigh, page, pagesize) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/search?country=${country}&group=${group}&heightLow=${heightLow}&heightHigh=${heightHigh}&weightLow=${weightLow}&weightHigh=${weightHigh}&lifespanLow=${lifespanLow}&lifespanHigh=${lifespanHigh}&friendlinessLow=${friendlinessLow}&friendlinessHigh=${friendlinessHigh}&intelligenceLow=${intelligenceLow}&intelligenceHigh=${intelligenceHigh}&adaptbilityLow=${adaptbilityLow}&adaptbilityHigh=${adaptbilityHigh}&page=${page}&pagesize=${pagesize}`, {
        method: 'GET',
    })
    return res.json()
}


const getAllImage = async (breed) => {
    let breedname = breed.replace(" ", "%")
    var res = await fetch(`http://${config.server_host}:${config.server_port}/image?name=${breedname}`, {
        method: 'GET',
    })
    return res.json()
}

const getPlayer = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/player?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}


const getPlayerSearch = async (name, nationality, club, rating_high, rating_low, pot_high, pot_low, page, pagesize) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/search/players?Name=${name}&Nationality=${nationality}&Club=${club}&RatingLow=${rating_low}&RatingHigh=${rating_high}&PotentialHigh=${pot_high}&PotentialLow=${pot_low}&page=${page}&pagesize=${pagesize}`, {
        method: 'GET',
    })
    return res.json()
}








export {
    getAllInfo,
    getBreedSearch,
    getRandomBreed,
    getBreedCriteria,
    getAllImage
}