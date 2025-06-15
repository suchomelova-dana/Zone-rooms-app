import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog";
import { Button } from "../../shadcn/button";
import type { Zone } from "../../../types/Zone";
import { useRef, useState } from "react";
import { useAppStore } from "../../../store/useAppStore";
import { AssignRoomForm } from "../forms/AssignRoomForm";
import { getAllUnassignedRooms } from "../../../utils/getAllUnassignedRooms";
import { Plus } from "lucide-react";

type Props = {
    zoneName: Zone["name"]
}

export function AssignRoomDialog({zoneName}: Props) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const rooms = useAppStore(state => state.rooms);
    const unassignedRooms = getAllUnassignedRooms(rooms);
    const shouldShowFooterBtns = unassignedRooms.length > 0;

    const onDialogCancel = () => {
        setIsOpen(false);
    }

    return (
         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild={true}>
                <Button
                    className="h-6 w-6 mx-4"
                    onClick={() => setIsOpen(true)}
                    tooltipText="Přidat místnost do zóny"
                >
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{`Přiřazení místnosti do zóny ${zoneName}`}</DialogTitle>
                    <DialogDescription className="sr-only">Vyberte místnost a tím ji přiřaďte k místnosti</DialogDescription>
                </DialogHeader>
                {
                    unassignedRooms.length > 0 ? (
                       <AssignRoomForm buttonRef={buttonRef} roomsOptions={unassignedRooms} setIsOpen={setIsOpen} zoneName={zoneName}/>
                    ) : (
                        <span>Není k dispozici žádná místnost</span>
                    )
                }
                {
                    shouldShowFooterBtns &&
                        <DialogFooter>
                            <DialogClose asChild={true} onClick={onDialogCancel} >Zrušit</DialogClose>
                            <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                        </DialogFooter>
                }
            </DialogContent>
        </Dialog>
    )
}