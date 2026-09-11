import HeroHeading from "./heroComponents/HeroHeading";
import Button from "./Buttons/Button";
import {useNavigate} from "react-router-dom"
function Hero() {
  const navigate=useNavigate()
  return (
    <div
      className="
        relative
        z-10
        flex
        min-h-screen
        w-full
        flex-col
        justify-center

        px-5
        sm:px-8
        md:px-12
        lg:px-16
      "
    >
      <HeroHeading />

      <div className="mt-8">
        <Button ButtonName="Show Property" onClick={()=>{navigate("/property")}} name="hello" />
      </div>
    </div>
  );
}

export default Hero;