import type { Room } from "../types/Room";
import type { Zone } from "../types/Zone";

export function calculateZoneMetrics(zone: Zone, rooms: Room[]) {
    const totalArea = zone.rooms?.reduce((total, roomName) => {
        const room = rooms.find(r => r.name === roomName)
        return total + (Number(room?.area) || 0);
    }, 0);

    const totalVolume = zone.rooms?.reduce((total, roomName) => {
        const room = rooms.find(r => r.name === roomName)
        return total + (Number(room?.volume) || 0);
    }, 0);

    return {
        area: totalArea,
        volume: totalVolume
    }
}