import mongoose from "mongoose";

// define a new schema
const Schema = mongoose.Schema

// create a flight schema of type Schema
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 0,
    max: 9999
    // validation: required between 10 and 9999
  },
  departs: {
    type: Date,
    default: function() {
      // return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      return new Date()
    }
  }
})

// compile schema into a model
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}