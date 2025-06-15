import { useRef, useState } from "react";
import { Button } from "../../shadcn/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog";
import { AddZoneForm } from "../forms/AddZoneForm";

export function AddZoneDialog() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild={true}>
                <Button onClick={() => setIsOpen(true)} type="button">Přidat zónu</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Přidání nové zóny</DialogTitle>
                    <DialogDescription className="sr-only">Vytvoření nové zóny</DialogDescription>
                </DialogHeader>

                <AddZoneForm buttonRef={buttonRef} setIsOpen={setIsOpen} />

                <DialogFooter>
                    <DialogClose asChild={true} onClick={() => setIsOpen(false)} >Zrušit</DialogClose>
                    <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}