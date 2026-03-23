import React from 'react'
import Image from 'next/image'
import TitleHeader from './components/TitleHeader'
import SubtitleHeader from './components/SubtitleHeader'

const RootPage = () => {
  return (
    <div className='m-8'>
      <div className='flex flex-col items-center gap-16'>
        <div className='flex flex-col items-center gap-4'>
          <Image 
          src={'/worduel_logo.png'} 
          alt={'Worduel Logo'} 
          width={200}
          height={200}
          />
          <TitleHeader>Worduel</TitleHeader>
          <SubtitleHeader>A competitive word-guessing game inspired from Wordle</SubtitleHeader>
        </div>
        <div className='flex flex-col items-center gap-16'>
          <button>Play</button>
        </div>
      </div>  
    </div>
  )
}

export default RootPage
