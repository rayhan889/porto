import { Experience } from "@/components/home/Experience";
import { IntroSection } from "@/components/home/IntroSection";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Stack } from "@/components/home/Stack";
import { Writing } from "@/components/home/Writing";

export default function Home() {
  return (
    <>
      <IntroSection />
      <Experience />
      <SelectedWork />
      <Stack />
      <Writing />
    </>
  );
}
