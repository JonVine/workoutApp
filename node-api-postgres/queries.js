const Pool = require('pg').Pool
const pool = new Pool({
  user: 'jonathanvine',
  host: 'localhost',
  database: 'api',
  password: 'ggmu',
  port: 5432,
})

const getExercises = (request, response) => {
    pool.query('SELECT * FROM exercises', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const addSet = (request, response) => {
    const {workout, exercise, weight, reps, setnumber, author} = request.body

    pool.query('INSERT INTO sets (workout, exercise, weight, reps, setnumber, author) VALUES ($1, $2, $3, $4, $5, $6)',
                [workout, exercise, weight, reps, setnumber, author], (error, results) => {
                    if(error) {
                        throw error
                    }
                    response.status(201).send(`Set Recorded`)
                })
}

module.exports = {
    getExercises,
    createExercise,
    addSet,
}