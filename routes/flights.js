import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// // GET localhost:3000/users
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// GET /flights/new
// AAU I want to create a flight in a 'new' view
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.delete('/:flightId', flightsCtrl.delete)



export { router }
