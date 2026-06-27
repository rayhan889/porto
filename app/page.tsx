import { IntroSection } from "@/components/home/IntroSection";
import { Experience } from "@/components/home/Experience";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TimeResolutionHeader } from "@/components/home/TimeResolutionHeader";
import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <TimeResolutionHeader />
        <Navigation />
        <IntroSection />
        <Experience />
        <SelectedWork />
        <section>Writing</section>
        <Footer />
      </main>
    </div>
  );
}
