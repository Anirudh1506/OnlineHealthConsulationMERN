import { Doctor } from "./DoctorModel";

export interface DoctorLeaves {
  id: number;
  doctorId: Doctor;
  leaveDate: Date;
  status: string;
}
