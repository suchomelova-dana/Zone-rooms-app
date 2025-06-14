import { Trash, Unlink } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../shadcn/card";
import type { Room } from "../../types/Room";
import { Button } from "../shadcn/button";
import { useAppStore } from "../../store/useAppStore";
import { Metrics } from "../common/Metrics";

type Props = {
    room: Room,
}

export function RoomCard({room}: Props) {
    const removeRoom = useAppStore(state => state.removeRoom);
    const removeRoomFromZone = useAppStore(state => state.removeRoomFromZone)

    const onRemoveRoom = () => {
        removeRoom(room.name);
    }

    const onRemoveRoomFromZone = () => {
        if (!room.zoneName) {
            return;
        }

        removeRoomFromZone(room.name, room.zoneName);
    }

    return (
        <Card className="relative">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle>{room.name}</CardTitle>
                <CardDescription className="">{room.zoneName || ""}</CardDescription>
                <Metrics area={room.area} volume={room.volume} />
            </CardHeader>
            <div className="absolute h-full -right-5 top-0 flex flex flex-col gap-1 items-center justify-center">
                <Button className="rounded-full w-10 h-10 bg-red-400 shadow-md" onClick={onRemoveRoom}>
                    <Trash />
                </Button>
                {
                    room.zoneName && (
                        <Button variant="outline" className="rounded-full w-10 h-10 shadow-md" onClick={onRemoveRoomFromZone}>
                            <Unlink />
                        </Button>
                    )
                }
                
            </div>
            
        </Card>
       
    )
}