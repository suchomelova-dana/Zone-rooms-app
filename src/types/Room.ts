import type { Zone } from "./Zone";

export type Room = {
    name: string,
    area?: number,
    volume?: number,
    zoneName?: Zone["name"],
}