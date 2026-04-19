import { breeSerif } from "@/app/fonts"

type GameCellProps = {
  letter: string
}

const GameCell = ({ letter }:GameCellProps) => {
  return (
    <div className="w-16 h-16 border border-gray-500 flex-none text-4xl flex justify-center items-center">
      <h1 className={`${breeSerif.className} text-5xl`}>{letter}</h1>
    </div>
  )
}

export default GameCell