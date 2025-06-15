import { useAppStore } from "../../store/useAppStore"
import { AddZoneDialog } from "./dialogs/AddZoneDialog";
import { ZoneCard } from "./ZoneCard";

export default function ZonesSection() {
    const zones = useAppStore((state) => state.zones);

    return (
        <section className="flex flex-col gap-4 w-full py-8 px-16 items-center">
            <h1 className="font-bold text-center">Zóny</h1>
            {
                zones.length > 0 ? (
                    <ul className="flex flex-col gap-4 w-full">
                        {
                            zones.map((zone) =>  <ZoneCard zone={zone} key={zone.name}/>)
                        }
                    </ul>
                ) : <span className="text-center py-8">Nemáte žádné zóny</span>
            }
            <AddZoneDialog /> 
        </section>
    )
}