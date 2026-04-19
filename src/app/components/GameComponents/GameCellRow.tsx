"use client"

import { useState } from "react"
import GameCell from "./GameCell"

type GameCellRowProps = {
  word: string
}

const GameCellRow = ({ word }:GameCellRowProps) => {

  return (
    <div className="flex gap-1">
        <GameCell letter={word[0]}/>
        <GameCell letter={word[1]}/>
        <GameCell letter={word[2]}/>
        <GameCell letter={word[3]}/>
        <GameCell letter={word[4]}/>
    </div>
  )
}

export default GameCellRow