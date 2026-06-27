import { IntroSection } from "@/components/home/IntroSection";
import { Experience } from "@/components/home/Experience";
import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Navigation />
        <IntroSection />
        <Experience />
        <section>Work</section>
        <section>Writing</section>
        <Footer />
      </main>
    </div>
  );
}
