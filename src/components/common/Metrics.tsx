import { Box, Square } from "lucide-react"

type Props = {
    area?: number,
    volume?: number,
}

export function Metrics({area, volume}: Props) {
    return (
        <div className="flex flex-row gap-10 pr-10">
            <span className="flex flex-row gap-2 text-gray-400">
                <Square />
                <span>{area || "?"}m<sup>2</sup></span>
            </span>

            <span className="flex flex-row gap-2 text-gray-400">
                <Box />
                <span>{volume || "?"}m<sup>3</sup></span>
            </span>
        </div>  
    )
}