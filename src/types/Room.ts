import type { Zone } from "./Zone";

export type Room = {
    id: number,
    name: string,
    area?: number,
    volume?: number,
    zoneName?: Zone["name"],
}