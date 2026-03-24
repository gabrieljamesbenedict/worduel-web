import Image from "next/image"
import TitleHeader from "./TitleHeader"

const TitleLogo = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-align">
        <Image
        src={'/worduel_logo.png'} 
        alt={'Worduel Logo'} 
        width={200}
        height={200}
        />
        <TitleHeader>Worduel</TitleHeader>
    </div>
  )
}

export default TitleLogo