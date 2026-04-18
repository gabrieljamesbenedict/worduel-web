"use client"

import PrimaryButton from "../components/PrimaryButton"
import WorduelLogoAndTitle from "../components/WorduelLogoAndTitle"
import { useRouter } from 'next/navigation'

const PlayPage = () => {

  const router = useRouter()

  function OnPressedPlay () {
    router.push('/game')
  }

  function onPressedLogin () {
    router.push('/login')
  }

  return (
    <>
      <div className="w-screen h-screen border-4p-8 text-center">
        <div className="w-lg h-full mx-auto flex flex-col gap-8 justify-center items-center">
          <WorduelLogoAndTitle />
          <p className="text-2xl">
            Play against your friends in this multiplayer word-guessing game.
          </p>
          <div className="flex flex-col gap-2">
            <PrimaryButton onClick={OnPressedPlay}>
              Play
            </PrimaryButton>
            <button onClick={onPressedLogin} className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              Login to your Account
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayPage