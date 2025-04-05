import mongoose, { Schema } from "mongoose";
import { Appointment } from "../appointmentModel";
import { Status } from "../enums/Enums";

const appointmentRepo = new Schema<Appointment>({
  id: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  doctorId: { type: String, required: true },
  issueId: { type: String, required: true },
  remarks: { type: String },
  status: { type: String, enum: Object.values(Status), required: true },
});

const appointmentModel = mongoose.model<Appointment>(
  "Appointment",
  appointmentRepo
);

export default appointmentModel;
