import { Flight } from "../models/flight.js"

function index (req, res) {
Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: "All Flights",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create (req, res) {
  Flight.create(req.body)
  .then(flight => {
  res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}


export {
  index,
  create,
}