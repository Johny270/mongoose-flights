import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/flights/${flight._id}`)
  })
}

function create(req, res) {
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/flights/${flight._id}`)
  })
}


export {
  newMeal as new,
  create
}