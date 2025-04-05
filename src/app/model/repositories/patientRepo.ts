import {Schema} from 'mongoose';
import { Patient } from '../patientModel';

const PatientRepo = new Schema<Patient>({
    id: {type: Number},
    fullName: {type:String},
    age: {type: Number},
    gender: {type: String},
    location: {type: String},
    appointments: {

    }
})