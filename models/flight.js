import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ["American", "Southwedt", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  fightNo: {
    type: Number,
    requied: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      const today = new Date ()
      console.log("today's date", today);
      const aYearLater = today. getFullYear() + 1
      today.setFullYear(aYearLater)
      return today
    },
  }, 
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}