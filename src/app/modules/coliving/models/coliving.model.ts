export interface ColivingResponseDto {
    id: string;
    name: string;
    description: string;
    email: string;
    address: string;
    userId: string;
}

export interface ColivingCreateDto {
    name: string;
    description: string;
    email: string;
    address: string;
    userId: string;
}

export interface ColivingUpdateDto extends ColivingCreateDto {
    id: string;
}