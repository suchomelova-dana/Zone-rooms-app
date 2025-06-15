import { useAppStore } from "../../store/useAppStore"
import type { Zone } from "../../types/Zone"
import { getRoomsByZoneName } from "../../utils/getRoomsByZoneName";

type Props = {
    zoneName: Zone["name"]
}

export function ZoneRoomsList({zoneName}: Props) {
    const rooms = useAppStore(state => state.rooms);
    const zoneRooms = getRoomsByZoneName(zoneName, rooms);

    return (
        <>
            <span className="font-bold">{`Místnosti: `}</span>
            {
                zoneRooms && zoneRooms.length > 0 ? (
                    <span>
                        { 
                            zoneRooms?.map((room, index) => 
                                <span key={room.name}>
                                    {index === zoneRooms.length - 1 ? room.name : `${room.name}, `}
                                </span>)
                        }
                    </span>
                ) : (
                    <span>Tato zóna nemá žádné místnosti</span>
                )
            }
        </>  
    )
}