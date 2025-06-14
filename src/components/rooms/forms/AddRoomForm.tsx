import { type Dispatch, type RefObject, type SetStateAction } from "react";
import { useAppStore } from "../../../store/useAppStore"
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../shadcn/form";
import { Input } from "../../shadcn/input";
import type { Room } from "../../../types/Room";

type Props = {
    buttonRef: RefObject<HTMLButtonElement | null>,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}
export function AddRoomForm({buttonRef, setIsOpen}: Props) {
     const addRoom = useAppStore((state) => state.addRoom);

    const form = useForm<Room>();

    const onDialogSave: SubmitHandler<Room> = (data) => {
        addRoom(data);
        setIsOpen(false);
        form.reset();
    }

    return (
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
    )
}