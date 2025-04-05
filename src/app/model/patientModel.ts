import { Appointment } from "./appointmentModel";
import { Issue } from "./issueModel";

export interface Patient{
    id: number,
    fullName: string,
    age: number,
    gender: string,
    location: string,
    appointments: Appointment[],
    activeIssues:Issue[],
    complatedIssues: Issue[],
    subscriptionDetails:subscriptionDetails
}

export interface subscriptionDetails{
    subscriptionId: string,
    planName: string
}