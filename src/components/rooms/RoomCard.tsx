import { Trash } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import type { Room } from "../../types/Room";
import { Button } from "../ui/button";
import { useAppStore } from "../../store/useAppStore";

type Props = {
    room: Room,
}

export function RoomCard({room}: Props) {
    const removeRoom = useAppStore(state => state.removeRoom);

    const onRemoveRoom = () => {
        removeRoom(room.name);
    }

    return (
        <Card className="relative">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle>{room.name}</CardTitle>
            </CardHeader>
            <div className="absolute h-full -right-5 top-0 flex items-center">
                <Button className="rounded-full w-10 h-10 bg-red-400 shadow-md" onClick={onRemoveRoom}>
                    <Trash />
                </Button>
            </div>
            
        </Card>
       
    )
}