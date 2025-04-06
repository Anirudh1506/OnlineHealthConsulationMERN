import mongoose, { Schema } from "mongoose";
import { DoctorLeaves } from "../DoctorLeaves";
import { LeaveStatus } from "../enums/Enums";

const doctorLeaves = new Schema<DoctorLeaves>(
  {
    id: { type: Number, required: true },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    leaveDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(LeaveStatus), required: true },
  },
  {
    timestamps: true,
  }
);

const DoctorLeaves = mongoose.model<DoctorLeaves>("DoctorLeaves", doctorLeaves);

export default DoctorLeaves;
