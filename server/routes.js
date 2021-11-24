const config = require('./config.json')
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

// Route 0 (handler)
async function test(req, res) {
    // a GET request to /test
    res.send(`Test`)
}


// ********************************************
//               GENERAL ROUTES
// ********************************************


// Route 1 (handler)
async function dog_friendly(req, res) {
    // Returns all dogs orignated in a given country, 
    // with starsDogFriendly greater or equal to starsDogFriendly
    // Examples:
    // All dogs with StarDogFriendly at least 4: http://127.0.0.1:8080/dog_friendly?minStarsDogFriendly=4
    // All dogs originated in China with StarDogFriendly at least 2: http://127.0.0.1:8080/dog_friendly?country=China&minStarsDogFriendly=2

    sql = `SELECT FCI.name, DBP.starsDogFriendly
           FROM FCIBreed FCI JOIN DogBreedParameters DBP on FCI.name = UPPER(DBP.name)
           WHERE TRUE `

    if (req.query.country){sql += `AND FCI.country = '${req.query.country}' `}
    if (req.query.minStarsDogFriendly){sql += `AND DBP.starsDogFriendly >= '${req.query.minStarsDogFriendly}' `}

    connection.query(sql, function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({ results: results })
            }
    });
    
}

// Route 2 (handler)
async function dog_height(req, res) {
    // Returns all dogs with Average Height greater or equal to a benchmark
    // Examples:
    // All dogs with minium average height of at least 20cm: http://127.0.0.1:8080/dog_height?minAverageHeight=20
    // 2. Find all breeds that have average height more than 20cm.

    sql = `SELECT DogBreedsEnriched.breed, DogBreedsEnriched.breedGroupUKC, DogBreedsEnriched.AverageHeight
           FROM DogBreedsEnriched
           WHERE TRUE `

    if (req.query.minAverageHeight){sql += `AND DogBreedsEnriched.AverageHeight >= '${req.query.minAverageHeight}' `}

    connection.query(sql, function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({ results: results })
            }
    });

}


// Route 3 (handler)
async function sort_adapatability(req, res) {
    // Returns all dogs in a given country sorted by starsAdaptability
    // Examples:
    // All dogs sorted by adaptability: http://127.0.0.1:8080/sort_adaptability
    // All dogs in Germany sorted by adaptability: http://127.0.0.1:8080/sort_adaptability?country=Germany


    sql = `SELECT DBE.breed, DBE.breedGroupUKC, FCI.country, DBP.starsAdaptability
           FROM DogBreedsEnriched DBE JOIN FCIBreed FCI ON UPPER(DBE.breed) = FCI.name JOIN DogBreedParameters DBP ON UPPER(DBP.name) = FCI.name
           Where TRUE `
    
    if (req.query.country){sql += `AND FCI.country = '${req.query.country}' `}
    sql += ` ORDER BY DBP.starsAdaptability`

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}


// Route 4 (handler)
async function dog_count(req, res) {
    // Returns the count of dog breeds in a certain breed group, with friendly ranking greater than a certain criteria
    // Examples:
    // Total breeds count: http://127.0.0.1:8080/dog_count
    // Total breeds count of Terrier: http://127.0.0.1:8080/dog_count?breedGroup=Terrier
    // Total breeds count of Terriers with friendly stars at least 4: http://127.0.0.1:8080/dog_count?breedGroup=Terrier&minStarsDogFriendly=4

    sql = `SELECT DBE.breedGroupUKC, COUNT(*) AS BreedCount
           FROM DogBreedsEnriched DBE JOIN DogBreedParameters DBP ON DBE.breed = DBP.name
           Where TRUE `
    
    if (req.query.breedGroup){sql += `AND DBE.breedGroupUKC = '${req.query.breedGroup}' `}
    if (req.query.minStarsDogFriendly){sql += `AND DBP.starsDogFriendly >= '${req.query.minStarsDogFriendly}' `}

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

// Route 5 (handler)
async function stars(req, res) {
    // Returns the stars for friendly rankings, energy level and affectionate with family, with friendly ranking >= a given input
    // Examples:
    // Stars for dogs: http://127.0.0.1:8080/stars
    // Stars for dogs with friendly ranking at least 3: http://127.0.0.1:8080/stars?minStarsDogFriendly=3

    sql = `SELECT DBP.name, DBP.starsDogFriendly, DBP.starsEnergyLevel, DBP.starsAffectionateWithFamily
           FROM DogBreedParameters DBP
           Where TRUE `
    
    if (req.query.minStarsDogFriendly){sql += `AND DBP.starsDogFriendly >= '${req.query.minStarsDogFriendly}' `}
    sql += ` ORDER BY DBP.starsDogFriendly DESC, DBP.starsEnergyLevel DESC, DBP.starsAffectionateWithFamily DESC`

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

// Route 6 (handler)
async function sort_lifespan(req, res) {
    // Returns all breeds from a given country, with results sorted by average life span
    // Examples:
    // All breeds sorted by lifespan: http://127.0.0.1:8080/sort_lifespan
    // All breeds from Germany sorted by lifespan: http://127.0.0.1:8080/sort_lifespan?country=Germany

    sql = `SELECT FCI.name, DBE.breedGroupUKC ,DBE.AverageLifeSpan
           FROM DogBreedsEnriched DBE JOIN FCIBreed FCI ON UPPER(DBE.breed) = FCI.name
           Where TRUE `
    
    if (req.query.country){sql += `AND FCI.country = '${req.query.country}' `}
    sql += ` ORDER BY DBE.AverageLifeSpan DESC`

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

// Route 7 (handler)
async function sort_avgheight(req, res) {
    // Sort all breeds by average height
    // http://127.0.0.1:8080/sort_avgheight

    sql = `SELECT DBE.breed, DBE.AverageHeight, DBE.breedGroupUKC ,DBE.AverageLifeSpan
           FROM DogBreedsEnriched DBE
           ORDER BY DBE.AverageHeight DESC `

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

// Route 8 (handler)
async function lifespan(req, res) {
    // Returns all breeds from a given country, with results given a minmimum life span
    // Examples:
    // All breeds with lifespan at least 12 years: http://127.0.0.1:8080/lifespan?min_lifespan=12
    // All breeds from Japan with lifespan at least 10 years: http://127.0.0.1:8080/lifespan?min_lifespan=10&country=Japan

    sql = `SELECT FCI.name, DBE.AverageLifeSpan, DBE.AverageWeight
           FROM DogBreedsEnriched DBE JOIN FCIBreed FCI ON UPPER(DBE.breed) = FCI.name
           Where TRUE `

    if (req.query.country){sql += `AND FCI.country = '${req.query.country}' `}
    if (req.query.min_lifespan){sql += `AND DBE.AverageLifeSpan >= '${req.query.min_lifespan}' `}

    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}



module.exports = {
    test,
    dog_friendly,
    dog_height,
    sort_adapatability,
    dog_count,
    stars,
    sort_lifespan,
    sort_avgheight,
    lifespan
}