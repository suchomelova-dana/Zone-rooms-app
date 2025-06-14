import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useAppStore } from "../../store/useAppStore";
import type { Zone } from "../../types/Zone";

export function AddZoneDialog() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm<Zone>();
    const addZone = useAppStore((state) => state.addZone);

    const onDialogCancel = () => {
        setIsOpen(false);
    }

    const onDialogSave: SubmitHandler<Zone> = (data) => {
            addZone(data);
            setIsOpen(false);
            form.reset();
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
                    <form onSubmit={form.handleSubmit(onDialogSave)} className="flex flex-col justify-center items-center gap-4 ">
                        <FormProvider {...form}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel >Jméno</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jméno" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <button ref={buttonRef} type="submit" hidden={true} />
                        </FormProvider>
                    </form>
                    <DialogFooter>
                        <Button onClick={onDialogCancel} >Zrušit</Button>
                        <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
    )
}