import type { Room } from "../types/Room";

export function getAllUnassignedRooms(allRooms: Room[]) {
    return allRooms.filter(r => !r.zoneName);
}