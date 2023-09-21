import mongoose from "mongoose";

// define a new schema
const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
