
import Image from 'next/image'
import TitleHeader from './components/TitleHeader'
import SubtitleHeader from './components/SubtitleHeader'
import PrimaryButton from './components/PrimaryButton'
import HomePageButtons from './components/HomePageButtons'

const RootPage = () => {

  return (
    <div className='m-16'>
      <div className='flex flex-col items-center gap-12 text-align'>

        <div className="flex flex-col items-center gap-2 text-align">
          <Image
          src={'/worduel_logo.png'} 
          alt={'Worduel Logo'} 
          width={200}
          height={200}
          />
          <TitleHeader>Worduel</TitleHeader>
        </div>

        <SubtitleHeader>A competitive word-guessing game inspired from Wordle</SubtitleHeader>
          
        <HomePageButtons/>

      </div>  
    </div>
  )
}

export default RootPage
