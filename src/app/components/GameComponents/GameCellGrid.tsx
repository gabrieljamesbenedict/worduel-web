"use client"

import { useState } from "react"
import GameCellRow from "./GameCellRow"

type GameCellGridProps = {
  words: string[]
}

const GameCellGrid = ({ words }:GameCellGridProps) => {

  return (
    <div className="flex flex-col gap-1 w-fit">
        <GameCellRow word={words[0]}/>
        <GameCellRow word={words[1]}/>
        <GameCellRow word={words[2]}/>
        <GameCellRow word={words[3]}/>
        <GameCellRow word={words[4]}/>
        <GameCellRow word={words[5]}/>
    </div>
  )
}

export default GameCellGrid