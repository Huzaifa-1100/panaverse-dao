import { CoreTracks } from "@/components/widgets/coreTracks";
import Hero from "@/components/widgets/hero";
import Outcome from "@/components/widgets/outcome";
import SpecializedTracks from "@/components/widgets/specializedTracks";

export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <Hero/>
    {/* Core Tracks Section */}
    <CoreTracks/>
    {/* Specialize Tracks */}
    <SpecializedTracks/>
    
    {/* outcome section */}
    <Outcome/>
    
    </>
  );
}
