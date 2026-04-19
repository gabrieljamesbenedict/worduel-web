import GameCellRow from "./GameCellRow"

const GameCellGrid = () => {
  return (
    <div className="flex flex-col gap-1">
        <GameCellRow word={"CRANE"}/>
        <GameCellRow word={"AUDIO"}/>
        <GameCellRow word={"STARE"}/>
        <GameCellRow word={"SNAKE"}/>
        <GameCellRow word={"HELLO"}/>
        <GameCellRow word={"WORLD"}/>
    </div>
  )
}

export default GameCellGrid