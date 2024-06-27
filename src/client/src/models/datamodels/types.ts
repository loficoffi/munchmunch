import { Account } from "./Account";

export type AuthResponse = {
    token: string;
    user: Account;
};
