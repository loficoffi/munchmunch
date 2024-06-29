import {ObjectId} from 'mongodb';
import {AccountProfile} from "./AccountProfile.ts";

export type Account= {
    id: ObjectId,
    profile: AccountProfile,
    email: string,
    password: string
}