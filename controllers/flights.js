import { Flight } from "../models/flight.js";

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'ADD FLIGHT'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'FLIGHTS LIST'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}
  




export {
  newFlight as new, 
  create,
  index,
}