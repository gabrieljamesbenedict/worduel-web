import React from 'react'
import Image from 'next/image'
import TitleHeader from './components/TitleHeader'

const RootPage = () => {
  return (
    <div className='m-8'>
      <div className='flex flex-col items-center gap-4'>
        <Image 
          src={'/worduel_logo.png'} 
          alt={'Worduel Logo'} 
          width={200}
          height={200}
        />
        <TitleHeader>Worduel</TitleHeader>
        <p>welcome to worduel</p>
      </div>  
    </div>
  )
}

export default RootPage
