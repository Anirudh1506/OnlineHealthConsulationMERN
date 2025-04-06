import { Appointment } from "./appointmentModel";
import { DoctorLeaves } from "./DoctorLeaves";
import { Specialization } from "./enums/Enums";

export interface Doctor {
  id: number;
  fullName: string;
  specialization: Specialization;
  scheduledAppointments: Appointment[];
  completedAppointments: Appointment[];
  leaves: DoctorLeaves[];
}
