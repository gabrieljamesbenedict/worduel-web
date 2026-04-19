"use client"

import { breeSerif } from "@/app/fonts"
import { useState } from "react"

type GameCellProps = {
  letter: string
}

const GameCell = ({ letter }:GameCellProps) => {

  const borderColor = (letter === undefined || letter.length === 0) ? "border-gray-500" : "border-2 border-gray-700"

  return (
    <div className={`w-16 h-16 border ${borderColor} flex-none text-4xl flex justify-center items-center`} title={"Letter: " + letter}>
      <h1 className={`${breeSerif.className} text-5xl`}>{letter}</h1>
    </div>
  )
}

export default GameCell