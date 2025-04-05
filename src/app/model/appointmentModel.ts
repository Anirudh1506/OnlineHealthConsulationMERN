import { Issue } from "./issueModel";

export interface Appointment{
    id: number,
    date: Date,
    time: string,
    patientId: string,
    doctorId: string,
    issueId: Issue,
    prescription: string,
    remarks: string,
    status: string,
}