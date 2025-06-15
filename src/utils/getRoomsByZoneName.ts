import type { Room } from "../types/Room";
import type { Zone } from "../types/Zone";

export function getRoomsByZoneName(name: Zone["name"], rooms: Room[]) {
    return rooms.filter(r => r.zoneName === name);
}