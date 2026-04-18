"use client"

import PrimaryButton from "../components/PrimaryButton"
import WorduelLogoAndTitle from "../components/WorduelLogoAndTitle"


const PlayPage = () => {

  function OnPressedPlay () {
    
  }

  return (
    <>
      <div className="w-screen h-screen border-4p-8 text-center">
        <div className="w-lg h-full mx-auto flex flex-col gap-8 justify-center items-center">
          <WorduelLogoAndTitle />
          <p className="text-2xl">
            Play against your friends in this multiplayer word-guessing game.
          </p>
          <PrimaryButton onClick={OnPressedPlay}>
            Play
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default PlayPage