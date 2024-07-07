import {ObjectId} from 'mongodb';
import {AccountProfile} from "./AccountProfile.ts";

//Datamodel for an Account
//More Details about the Account in AccountProfile
export type Account= {
    id: ObjectId,
    profile: AccountProfile,
    email: string,
    password: string
}