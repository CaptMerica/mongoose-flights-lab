import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET locahost:3000/flights
router.get('/', flightsCtrl.index)
// POST localhost:3000/flights
router.post("/", flightsCtrl.create)




export {
  router
}
