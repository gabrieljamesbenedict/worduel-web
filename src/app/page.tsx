
import Image from 'next/image'
import TitleHeader from './components/TitleHeader'
import SubtitleHeader from './components/SubtitleHeader'
import PrimaryButton from './components/PrimaryButton'
import HomePageButtons from './components/HomePageButtons'
import TitleLogo from './components/TitleLogo'

const RootPage = () => {

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-12 text-align'>

        <TitleLogo/>

        <SubtitleHeader>A competitive word-guessing game inspired from Wordle</SubtitleHeader>
          
        <HomePageButtons/>

      </div>  
    </div>
  )
}

export default RootPage
