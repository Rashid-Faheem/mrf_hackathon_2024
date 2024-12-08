import Image from "next/image";
import HeroSection from "./components/hero";
import BestOfAirMax from "./components/airMax";
import Featured from "./components/featured";
import GearUp from "./components/gearup";
import Dontmiss from "./components/dontmiss";
import EssentialsSection from "./components/essentials";
import Links from "./components/links";

export default function Home() {
  return (
<div>

<div className="flex flex-col gap-2 sm:gap-4 lg:gap-12  font-helvetica ">
  < HeroSection />
  < BestOfAirMax />
  < Featured />
  <GearUp />
  <Dontmiss />
  <EssentialsSection />
  <Links />
  
</div>
</div>
  );
}
