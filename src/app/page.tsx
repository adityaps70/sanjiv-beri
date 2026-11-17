import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import Faq from "@/components/Faq";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bento />
        <Programs />
        <Process />
        <Insights />
        <Faq />
      </main>
      <CtaFooter />
    </>
  );
}
