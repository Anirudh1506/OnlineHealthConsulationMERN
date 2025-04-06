import { Doctor } from "./DoctorModel";
import { Issue } from "./issueModel";
import { Patient } from "./patientModel";

export interface Appointment {
  id: number;
  date: Date;
  time: string;
  patientId: Patient;
  doctorId: Doctor;
  issueId: Issue;
  prescription: string;
  remarks: string;
  status: string;
}
