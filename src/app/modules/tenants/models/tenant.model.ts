export interface TenantResponseDto {
    id: string;
    name: string;
    surname: string;
    birthDate: Date;
    phoneNumber: string;
    email: string;
}

export interface TenantUpdateDto {
    id: string;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
}