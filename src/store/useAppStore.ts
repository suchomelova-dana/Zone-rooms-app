import { create } from 'zustand'
import type { Zone } from '../types/Zone'
import type { Room } from '../types/Room';

type AppStoreType = {
    zones: Zone[],
    rooms: Room[],
    addZone: (newZone: Zone) => void;
    addRoom: (newRoom: Room) => void;
    removeRoom: (name: Room["name"]) => void;
    removeZone: (name: Zone["name"]) => void;
    assignRoomToZone: (roomName: Room["name"], zoneName: Zone["name"]) => void;
    removeRoomFromZone: (roomName: Room["name"], zoneName: Zone["name"]) => void;
}

export const useAppStore = create<AppStoreType>((set) => ({
    zones: [],
    rooms: [],
    addZone: (newZone: Zone) => set(state => ({zones: [...state.zones, newZone]})),
    addRoom: (newRoom: Room) => set(state => ({rooms: [...state.rooms, newRoom]})),
    removeRoom: (name: Room["name"]) => set(state => ({rooms: state.rooms.filter(r => r.name !== name)})),
    removeZone: (name: Zone["name"]) => set(state => ({zones: state.zones.filter(z => z.name !== name)})),
    assignRoomToZone: 
        (roomName: Room["name"], zoneName: Zone["name"]) => 
            set(state => ({ 
                zones: state.zones.map(z => z.name === zoneName ? {...z, rooms: z.rooms ? [...z.rooms, roomName] : [roomName]} : z),
                rooms: state.rooms.map(r => r.name === roomName ? {...r, zoneName} : r)

            })),
    removeRoomFromZone: 
        (roomName: Room["name"], zoneName: Zone["name"]) => 
            set(state => ({ 
                zones: state.zones.map(z => z.name === zoneName ? {...z, rooms: z.rooms?.filter(r => r !== roomName)} : z),
                rooms: state.rooms.map(r => r.name === roomName ? {...r, zoneName: undefined} : r)
            })),
}))