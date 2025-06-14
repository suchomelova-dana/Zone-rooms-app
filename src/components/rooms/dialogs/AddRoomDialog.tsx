import { useRef, useState } from "react";
import { Button } from "../../shadcn/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shadcn/dialog";
import { AddRoomForm } from "../forms/AddRoomForm";

export function AddRoomDialog() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const onDialogCancel = () => {
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>
                    <Button onClick={() => setIsOpen(true)}>Přidat místnost</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Přidání nové místnosti</DialogTitle>
                    </DialogHeader>

                    <AddRoomForm buttonRef={buttonRef} setIsOpen={setIsOpen}/>

                    <DialogFooter>
                        <Button onClick={onDialogCancel} >Zrušit</Button>
                        <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
    )
}