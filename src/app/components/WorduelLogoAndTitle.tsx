import Image from 'next/image'
import LogoImage from "@/assets/worduel_logo.png";
import { breeSerif } from '../fonts';

const WorduelLogoAndTitle = () => {
  return (
    <div className="w-100 text-center mx-auto">
        <Image
        src={LogoImage}
        alt="Worduel Logo"
        className="w-auto h-32 mx-auto"
        />
        <h1 className={`${breeSerif.className} text-6xl`}>Worduel</h1>
    </div>  
  )
}

export default WorduelLogoAndTitle