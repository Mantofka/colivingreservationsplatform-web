import { Role } from "../../../shared/models/roles";

export type RegisterRequest = {
    username: string;
    password: string;
    email: string;
    role: Role
}

export type LoginRequest = {
    username: string;
    password: string;
    role: Role;
}

