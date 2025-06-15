import { useAppStore } from "../../store/useAppStore"
import { AddRoomDialog } from "./dialogs/AddRoomDialog";
import { RoomCard } from "./RoomCard";

export default function RoomsSection() {
    const rooms = useAppStore((state) => state.rooms);

    return (
        <section className="flex flex-col gap-4 w-full py-8 px-16 items-center">
            <h1 className="font-bold text-center">Místnosti</h1>
            {
                rooms.length > 0 ? (
                    <ul className="flex flex-col gap-4 w-full">
                        {
                            rooms.map((room) => {
                                return (
                                    <RoomCard room={room} key={room.name}/>
                                )
                            })
                        }
                    </ul>
                ) : <span className="text-center py-8">Nemáte žádné místnosti</span>
            }
            <AddRoomDialog />
        </section>
    )
}