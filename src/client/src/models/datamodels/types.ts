import { Account } from "./Account";

//type that defines the token for a user, that can be used for authentication.
export type AuthResponse = {
    token: string;
    user: Account;
};
