import mongoose, { Schema } from "mongoose";
import { Patient } from "../patientModel";

const PatientRepo = new Schema<Patient>(
  {
    id: { type: Number },
    fullName: { type: String },
    age: { type: Number },
    gender: { type: String },
    location: { type: String },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true,
        default: [],
      },
    ],
    activeIssues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
        required: true,
        default: [],
      },
    ],
    completedIssues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
        required: true,
        default: [],
      },
    ],
    subscriptionDetails: {
      subscriptionId: { type: String, required: true },
      planName: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const patientModel = mongoose.model<Patient>("Patient", PatientRepo);

export default patientModel;
