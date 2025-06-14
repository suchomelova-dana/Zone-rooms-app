import { Trash } from "lucide-react";
import type { Zone } from "../../types/Zone";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcn/card";
import { Button } from "../shadcn/button";
import { useAppStore } from "../../store/useAppStore";
import { ZoneRoomsList } from "./ZoneRoomsList";
import { AssignRoomDialog } from "./dialogs/AssignRoomDialog";
import { ZoneRoomsDialog } from "./dialogs/ZoneRoomsDialog";
import { Metrics } from "../common/Metrics";
import { calculateZoneMetrics } from "../../utils/calculateZoneMetrics";

type Props = {
    zone: Zone,
}

export function ZoneCard({zone}: Props) {
    const removeZone = useAppStore(state => state.removeZone);
    const rooms = useAppStore(state => state.rooms);

    const onRemoveZone = () => {
        removeZone(zone.name);
    }

    const {area, volume} = calculateZoneMetrics(zone, rooms);

    return (
        <Card className="relative">
             <CardHeader className="flex flex-row justify-between">
                <CardTitle className="uppercase">{zone.name}</CardTitle>
                <Metrics area={area} volume={volume} />
            </CardHeader>
            <CardContent className="flex flex-col justify-start gap-4">
                <span>
                    <ZoneRoomsList zoneName={zone.name} />
                    <AssignRoomDialog zoneName={zone.name} />
                </span>
               
            </CardContent>
             <div className="absolute h-full -right-5 top-0 flex flex-col justify-center gap-2">
                <Button className="rounded-full w-10 h-10 bg-red-400 shadow-md" onClick={onRemoveZone}>
                    <Trash />
                </Button>
                <ZoneRoomsDialog zone={zone}/>
            </div>
        </Card>
    )
}