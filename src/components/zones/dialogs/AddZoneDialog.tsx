import { useRef, useState } from "react";
import { Button } from "../../shadcn/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog";
import { AddZoneForm } from "../forms/AddZoneForm";

export function AddZoneDialog() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const onDialogCancel = () => {
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <Button onClick={() => setIsOpen(true)}>Přidat zónu</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Přidání nové zóny</DialogTitle>
                </DialogHeader>

                <AddZoneForm buttonRef={buttonRef} setIsOpen={setIsOpen} />

                <DialogFooter>
                    <Button onClick={onDialogCancel} >Zrušit</Button>
                    <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}