import mongoose, {Schema} from 'mongoose';
import { Issue } from '../issueModel';
import { Priority, Status } from '../enums/Enums';

const IssueRepo = new Schema<Issue>({
    id:{type: Number, required: true},
    message:{type: String, required: true},
    images:{type: [String], default: []},
    specialization:{type: String, required: true},
    priority:{type: String, enum: Object.values(Priority), required: true},
    status: {type: String, enum: Object.values(Status), required: true}
});


const issueModel = mongoose.model<Issue>('Issue', IssueRepo);

export default issueModel;