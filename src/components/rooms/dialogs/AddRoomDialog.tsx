import { useRef, useState } from "react";
import { Button } from "../../shadcn/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog";
import { AddRoomForm } from "../forms/AddRoomForm";

export function AddRoomDialog() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const onDialogCancel = () => {
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild={true}>
                <Button onClick={() => setIsOpen(true)}>Přidat místnost</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Přidání nové místnosti</DialogTitle>
                    <DialogDescription className="sr-only">Vytvoření nové místnosti</DialogDescription>
                </DialogHeader>

                <AddRoomForm buttonRef={buttonRef} setIsOpen={setIsOpen}/>

                <DialogFooter >
                    <DialogClose asChild={true} onClick={onDialogCancel} >Zrušit</DialogClose>
                    <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}