import { breeSerif } from "../fonts"

const TitleHeader = ({children}: any) => {
  return (
    <h1 className={`${breeSerif.className} text-6xl`}>{children}</h1>
  )
}

export default TitleHeader