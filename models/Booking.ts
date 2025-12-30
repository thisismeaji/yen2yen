import mongoose, { Schema, models } from "mongoose"

const BookingSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, enum: ["rumah", "klinik"], required: true },
    therapist: { type: String, required: true },
    date: { type: String, required: true }, // YYYY-MM-DD
    time: { type: String, required: true }, // HH:mm
    notes: { type: String },
  },
  { timestamps: true }
)

export const Booking =
  models.Booking || mongoose.model("Booking", BookingSchema)
