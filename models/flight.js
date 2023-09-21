import mongoose from "mongoose";

// define a new schema
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  }
}, {
  timestamps: true
})

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
      const date = new Date()
      let dateYear = date.setFullYear(date.getFullYear() + 1)
      return dateYear
    },
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

// compile schema into a model
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}