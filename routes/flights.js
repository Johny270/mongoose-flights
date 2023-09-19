import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET /flights/new
// AAU I want to create a flight in a 'new' view
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/:flightId', flightsCtrl.show)
router.get('/:flightId/edit', flightsCtrl.edit)
router.delete('/:flightId', flightsCtrl.delete)
router.put('/:flightId', flightsCtrl.update)



export { router }
