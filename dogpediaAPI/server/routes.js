const config = require('./config.json');
const mysql = require('mysql');
const e = require('express');

// TODO: fill in your connection details here
const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
});
connection.connect();


// ********************************************
//            SIMPLE ROUTE EXAMPLE
// ********************************************


async function search_breed(req, res) {
    const name = req.query.name
    connection.query(`SELECT FCI.name AS name, DBP.highlights AS hightlight, FCI.image AS imageUrl, DBE.breedGroupUKC AS subgroup, FCI.country AS country, DBP.starsAdaptability AS adaptbility,
    DBP.starsFriendliness AS friendliness, DBP.starsIntelligence AS intelligence,  DBP.starsEnergyLevel AS energy,
    DBP.starsEasyToTrain AS easyToTrain, DBE.AverageHeight AS aveHeight, DBE.AverageWeight AS aveWeight, DBE.AverageLifeSpan AS aveLifespan
    FROM FCIBreed FCI LEFT JOIN DogBreedsEnriched DBE  ON UPPER(DBE.breed) = FCI.name LEFT JOIN DogBreedParameters DBP ON UPPER(DBP.name) = FCI.name
    WHERE FCI.name = '${name}' `,
    function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({results: results})
            }
        });
}

async function search_breed_vague(req, res) {
    const name = req.query.name
    connection.query(`SELECT FCI.name AS name, FCI.country AS country
    FROM FCIBreed FCI
    WHERE FCI.name LIKE '%${name}%' `,
    function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({results: results})
            }
        });
}

async function find_image(req, res) {
    const name = req.query.name
    connection.query(`SELECT Dog_Pic.url AS src, Dog_Pic.url AS thumbnail, Dog_Pic.thumbnailW AS thumbnailWidth, Dog_Pic.thumbnailH AS thumbnailHeight
    FROM Dog_Pic
    WHERE Dog_Pic.breed LIKE '%${name}%' `,
    function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({results: results})
            }
        });
}

async function random_query(req, res) {
    connection.query(`SELECT FCI.name, FCI.country
    FROM FCIBreed FCI JOIN DogBreedsEnriched DBE ON UPPER(DBE.breed) = FCI.name JOIN DogBreedParameters DBP ON UPPER(DBP.name) = FCI.name
    ORDER BY RAND()
    LIMIT 1`,
    function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({results: results})
            }
        });
}

async function search_criteria(req, res) {
    const group = req.query.group
    const country = req.query.country
    const heightLow = req.query.heightLow
    const heightHigh = req.query.heightHigh
    const weightLow = req.query.weightLow
    const weightHigh = req.query.weightHigh
    const lifespanLow = req.query.lifespanLow
    const lifespanHigh = req.query.lifespanHigh
    const friendlinessLow = req.query.friendlinessLow
    const friendlinessHigh = req.query.friendlinessHigh
    const intelligenceLow = req.query.intelligenceLow
    const intelligenceHigh = req.query.intelligenceHigh
    const adaptbilityLow = req.query.adaptbilityLow
    const adaptbilityHigh = req.query.adaptbilityHigh
    connection.query(`SELECT FCI.name AS name, FCI.country AS country
    FROM FCIBreed FCI JOIN DogBreedParameters DBP ON FCI.name = DBP.name JOIN DogBreedsEnriched DBE ON FCI.name = DBE.breed
    WHERE FCI.country LIKE '%${country}%' AND DBE.breedGroupUKC LIKE '%${group}%' 
      AND DBE.AverageLifeSpan >= ${lifespanLow} AND DBE.AverageLifeSpan <= ${lifespanHigh} AND DBE.AverageWeight >= ${weightLow} AND DBE.AverageWeight <= ${weightHigh} 
      AND DBE.AverageHeight >= ${heightLow} AND DBE.AverageHeight <= ${heightHigh} AND DBP.starsFriendliness >= ${friendlinessLow} AND DBP.starsFriendliness <= ${friendlinessHigh}
      AND DBP.starsIntelligence >= ${intelligenceLow} AND DBP.starsIntelligence <= ${intelligenceHigh} AND DBP.starsAdaptability >= ${adaptbilityLow} AND DBP.starsAdaptability <= ${adaptbilityHigh}`,
    function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({results: results})
            }
        });
}


module.exports = {
    search_breed_vague,
    search_breed,
    find_image,
    random_query,
    search_criteria
}