import { useRef, useState } from "react";
import { useAppStore } from "../../store/useAppStore"
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import type { Room } from "../../types/Room";

export function AddRoomDialog() {

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
     const addRoom = useAppStore((state) => state.addRoom);

    const form = useForm<Room>();

    const onDialogCancel = () => {
        setIsOpen(false);
        form.reset();
    }

    const onDialogSave: SubmitHandler<Room> = (data) => {
        addRoom(data);
        setIsOpen(false);
        form.reset();
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
                    <div>
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

                                <FormField
                                    control={form.control}
                                    name="area"
                                    render={({ field }) => (
						                <FormItem>
                                            <FormLabel >Obsah v m<sup>2</sup> </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Obsah" type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
					                )}
                                />

                                <FormField
                                    control={form.control}
                                    name="volume"
                                    render={({ field }) => (
						                <FormItem>
                                            <FormLabel >Objem v  m<sup>3</sup></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Objem" type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
					                )}
                                />

                                <button ref={buttonRef} type="submit" hidden={true} />
                            </FormProvider>
                        </form>
                    </div>
                    <DialogFooter>
                        <Button onClick={onDialogCancel} >Zrušit</Button>
                        <Button onClick={() => buttonRef.current?.click()} >Uložit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
    )
}