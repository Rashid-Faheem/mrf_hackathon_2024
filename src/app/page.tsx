import Image from "next/image";
import HeroSection from "./components/hero";
import BestOfAirMax from "./components/airMax";
import Featured from "./components/featured";
import GearUp from "./components/gearup";

export default function Home() {
  return (
<div>

<div className="flex flex-col gap-2 sm:gap-4 lg:gap-12  ">
  < HeroSection />
  < BestOfAirMax />
  < Featured />
  <GearUp />
  
</div>
</div>
  );
}
