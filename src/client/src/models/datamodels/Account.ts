import {AccountProfile} from "./AccountProfile.ts";

export type Account= {
    id: string,
    profile: AccountProfile,
    email: string,
    password: string
}