import { ColivingResponseDto } from "../../coliving/models/coliving.model";

export interface RoomResponseDto {
    id: string;
    number: number;
    description: string;
    size: number;
    floorNumber: number;
    price: number;
    coliving: ColivingResponseDto;
}

export interface RoomCreateDto {
    number: number;
    description: string;
    size: number;
    floorNumber: number;
    price: number;
    colivingId: string;
}

export interface RoomUpdateDto extends RoomCreateDto {
    id: string;
}