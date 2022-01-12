import { StoreInterface } from "./store.interface";
import { UserInterface } from "./user.interface";

export interface WelcomeInterface {
    response: ResponseInterface;
}

export interface ResponseInterface {
    users:  UserInterface[];
    stores: StoreInterface[];
}

export interface LogginInterface {
    ok: boolean;
}