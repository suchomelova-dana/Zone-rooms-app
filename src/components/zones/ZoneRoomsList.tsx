import { useAppStore } from "../../store/useAppStore"
import type { Room } from "../../types/Room";
import type { Zone } from "../../types/Zone"

type Props = {
    zoneName: Zone["name"]
}

const getRoomsByZoneName = (name: Zone["name"], rooms: Room[]) => {
    return rooms.filter(r => r.zoneName === name);
}

export function ZoneRoomsList({zoneName}: Props) {
    const rooms = useAppStore(state => state.rooms);
    const zoneRooms = getRoomsByZoneName(zoneName, rooms);

    return (
        <>
        {
            zoneRooms && zoneRooms.length > 0 ? (
                <ul>
                    {
                        zoneRooms?.map(room => <h1>{room.name}</h1>)
                    }
                </ul>
            ) : (
                <span>Tato zóna nemá žádné místnosti</span>
            )
        }
        </>  
    )
}