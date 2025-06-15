import { Eye, Unlink } from "lucide-react"
import type { Zone } from "../../../types/Zone"
import { Button } from "../../shadcn/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog"
import { useAppStore } from "../../../store/useAppStore"
import { getRoomsByZoneName } from "../../../utils/getRoomsByZoneName"

type Props = {
    zone: Zone,
}

export function ZoneRoomsDialog({zone}: Props) {
    const rooms = useAppStore(state => state.rooms);
    const zoneRooms = getRoomsByZoneName(zone.name, rooms);
    const removeRoomFromZone = useAppStore(state => state.removeRoomFromZone)

    if (zoneRooms.length <= 0) {
        return null;
    }

    return (
        <Dialog>
            <DialogTrigger asChild={true} >
                <Button
                    variant="outline"
                    className="rounded-full w-10 h-10 shadow-md"
                    tooltipText="Detailní seznam místností"
                >
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{`Zóna ${zone.name} - místnosti`}</DialogTitle>
                    <DialogDescription className="sr-only">Detailní seznam místností k zóně</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col ml-4">
                   {
                        zoneRooms.map(r => 
                            <div key={r.name} className="flex flex-row gap-2 items-center">
                                {r.name}
                                <Button
                                    className="rounded-full"
                                    size="icon"
                                    variant="outline"
                                    onClick={() => removeRoomFromZone(r.name, zone.name)}
                                    tooltipText="Odtranit místnost ze zóny"
                                >
                                    <Unlink />
                                </Button>
                            </div>)
                   }
                </div>
            </DialogContent>
        </Dialog>
    )
}