export interface Appointment{
    id: number,
    date: Date,
    time: string,
    patientId: string,
    doctorId: string,
    issueId: string,
    prescription: string,
    remarks: string,
    status: string,
}