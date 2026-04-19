"use client"

import { useEffect, useState } from "react"
import GameCellGrid from "../components/GameComponents/GameCellGrid"
import test from "node:test";

const GamePage = () => {
  
  const [testWord, setTestWord] = useState("");

  const [words, setWords] = useState([
    "CRANE",
    "HELLO",
    "WORLD",
    "TEST",
    "",
    ""
  ])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setTestWord(prev => prev.slice(0, -1))
      } else if (e.key.length === 1 && testWord.length <= 4) {
        setTestWord(prev => prev + e.key.toUpperCase())
      }
    }

    setWords(prev => {
      const updated = [...prev]
      updated[5] = testWord
      return updated
    });
    
    //console.log("Word: " + testWord);

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [testWord])

  return (
    <div>
      <GameCellGrid words={words} />
    </div>
  )
}

export default GamePage