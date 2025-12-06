import { Hero } from "@/views/sections/Hero";
import { HowWeDoIt } from "@/views/sections/HowWeDoIt";
import { WhyZemoso } from "@/views/sections/WhyZemoso";
import { Initiatives } from "@/views/sections/Initiatives";
import { Services } from "@/views/sections/Services";
import { Process } from "@/views/sections/Process";
import { Industries } from "@/views/sections/Industries";
import { Stats } from "@/views/sections/Stats";
import { Testimonials } from "@/views/sections/Testimonials";
import { Frameworks } from "@/views/sections/Frameworks";
import { MediaMentions } from "@/views/sections/MediaMentions";
import { CallToAction } from "@/views/sections/CallToAction";
import { Footer } from "@/views/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <HowWeDoIt />
      <WhyZemoso />
      <Initiatives />
      <Industries />
      <Stats />
      <Testimonials />
      <Frameworks />
      <MediaMentions />
      <CallToAction />
    </main>
  );
}
