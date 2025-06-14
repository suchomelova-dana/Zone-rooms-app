import { useAppStore } from "../../store/useAppStore"
import { AddRoomDialog } from "./AddRoomDialog";
import { RoomCard } from "./RoomCard";


export default function RoomsSection() {
    const rooms = useAppStore((state) => state.rooms);

    return (
        <section className="flex flex-col gap-4 w-full py-8 px-16 ">
            <h1 className="font-bold text-center">Místnosti</h1>
            {
                rooms.length > 0 ? (
                    <ul className="flex flex-col gap-2">
                        {
                            rooms.map((room) => {
                                return (
                                    <RoomCard room={room} />
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