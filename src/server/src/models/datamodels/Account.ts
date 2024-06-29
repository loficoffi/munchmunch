import { ObjectId } from 'mongodb';
import {AccountProfile} from "./AccountProfile.js";

export type Account= {
    id: ObjectId,
    profile: AccountProfile,
    email: string,
    password: string
}