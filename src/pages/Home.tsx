import { Button } from "@mui/material"
import analitic from '../assets/analitic.svg'
import { useNavigate } from "react-router-dom"
const ColorText = ({ text }: { text: string }) => <span className="text-violet-300">{text}</span>
export default function Home() {
  const navigateTo = useNavigate()
  return (
    <div className="mx-20 flex justify-evenly ">
      <div>
        <h1 className="text-6xl mt-40">
          Manag<ColorText text="e your" /> <br /> invento<ColorText text="ry with our" />  <br />specia<ColorText text="lized system" />.
        </h1>
        <p>We invite you to explore our services. <br />Join and be part of our community.</p>
        <div className="flex gap-6 mt-7">
          <Button onClick={()=>navigateTo('/login')} variant="contained" sx={{ borderRadius: "50px" }}>Get Started</Button>
          <Button onClick={()=>navigateTo('/products')} variant="outlined" sx={{ borderRadius: "50px" }}>Explore</Button>
        </div>
      </div>
      <img src={analitic} alt="Img analitic" />
    </div>
  )
}
