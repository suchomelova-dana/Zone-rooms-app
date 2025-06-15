import { useCallback, type Dispatch, type RefObject, type SetStateAction,} from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../shadcn/form";
import type { Zone } from "../../../types/Zone";
import { Input } from "../../shadcn/input";
import { useAppStore } from "../../../store/useAppStore";
import { isNameInArray } from "../../../utils/isNameInArray";
import { toast } from "sonner";

type Props = {
    buttonRef: RefObject<HTMLButtonElement | null>
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function AddZoneForm({buttonRef, setIsOpen}: Props) {
    const form = useForm<Zone>({
        defaultValues: {
            name: "",
        }
    });
    const addZone = useAppStore(state => state.addZone);
    const zones = useAppStore(state => state.zones)

     const onDialogSave: SubmitHandler<Zone> = useCallback((data) => {
        if (isNameInArray(data.name, zones)) {
            toast.error("Zóna s tímto názvem již existuje", {
                style: {
                    backgroundColor: "#ef4444",
                    color: "white",
                },
            })
            setIsOpen(false);
            form.reset();
            return;
        }
        addZone(data);
        setIsOpen(false);
        form.reset();
    }, [isNameInArray, setIsOpen, form,addZone])

    return (
        <form onSubmit={form.handleSubmit(onDialogSave)} className="flex flex-col justify-center items-center gap-4 ">
            <FormProvider {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel isRequired={true}>Jméno</FormLabel>
                            <FormControl>
                                <Input placeholder="Jméno" required={true} {...field} />
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