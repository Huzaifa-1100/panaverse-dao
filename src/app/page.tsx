import { CoreTracks } from "@/components/widgets/coreTracks";
import Hero from "@/components/widgets/hero";
import SpecializedTracks from "@/components/widgets/specializedTracks";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <Hero/>
    {/* Core Tracks Section */}
    <CoreTracks/>
    {/* Specialize Tracks */}
    <SpecializedTracks/>
    </>
  );
}
