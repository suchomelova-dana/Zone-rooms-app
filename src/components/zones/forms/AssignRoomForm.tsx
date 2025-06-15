import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import type { Room } from "../../../types/Room";
import { FormControl, FormField, FormItem, FormLabel } from "../../shadcn/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shadcn/select";
import { type Dispatch, type RefObject, type SetStateAction } from "react";
import { useAppStore } from "../../../store/useAppStore";
import type { Zone } from "../../../types/Zone";

type Props = {
    buttonRef: RefObject<HTMLButtonElement | null>
    roomsOptions: Room[],
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    zoneName: Zone["name"],
}

export function AssignRoomForm({buttonRef, roomsOptions, zoneName, setIsOpen}: Props) {
    const form = useForm<{name: string}>();
    const assignRoomToZone = useAppStore(state => state.assignRoomToZone)

    const onDialogSave: SubmitHandler<{name: string}>= (data) => {
        assignRoomToZone(data.name, zoneName);
        setIsOpen(false);
        form.reset()
    }

    return (
        <form onSubmit={form.handleSubmit(onDialogSave)} >
            <FormProvider {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Místnost</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} >
                                <FormControl className="min-w-60">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Vyber místnost" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            roomsOptions.map(room => {
                                                return <SelectItem value={room.name} key={room.name}>{room.name}</SelectItem>
                                            })
                                        }
                                    </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <button ref={buttonRef} type="submit" hidden={true} />
            </FormProvider>
        </form>
    )
}