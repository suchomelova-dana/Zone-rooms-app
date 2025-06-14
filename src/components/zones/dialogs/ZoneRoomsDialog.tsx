import { Eye } from "lucide-react"
import type { Zone } from "../../../types/Zone"
import { Button } from "../../shadcn/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog"

type Props = {
    zone: Zone,
}

export function ZoneRoomsDialog({zone}: Props) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="rounded-full w-10 h-10 shadow-md">
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{`Zóna ${zone.name} - místnosti`}</DialogTitle>
                </DialogHeader>
                <div>
                   
                </div>
                {/* <DialogFooter>
                    <Button onClick={onDialogCancel} >Zrušit</Button>
                    <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}