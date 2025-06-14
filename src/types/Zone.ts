import type { Room } from "./Room"

export type Zone = {
    name: string,
    rooms?:  Room["name"][];
    area?: number,
    volume?: number,
}