import { Trash } from "lucide-react";
import type { Zone } from "../../types/Zone";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useAppStore } from "../../store/useAppStore";
import { ZoneRoomsList } from "./ZoneRoomsList";

type Props = {
    zone: Zone,
}

export function ZoneCard({zone}: Props) {
    const removeZone = useAppStore(state => state.removeZone);

    const onRemoveZone = () => {
        removeZone(zone.name);
    }

    return (
        <Card className="relative">
             <CardHeader className="flex flex-row justify-between">
                <CardTitle>{zone.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-start gap-4">
                <ZoneRoomsList zoneName={zone.name} />
            </CardContent>
             <div className="absolute h-full -right-5 top-0 flex items-center">
                <Button className="rounded-full w-10 h-10 bg-red-400 shadow-md" onClick={onRemoveZone}>
                    <Trash />
                </Button>
            </div>
        </Card>
    )
}