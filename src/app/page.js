import Hero from "@/components/Hero/Hero";
import About from "@/components/Sections/About/About";
import Help from "@/components/Sections/Help/Help";
import WhatIbeliveIn from "@/components/Sections/WhatIbeliveIn/WhatIbeliveIn";
import Reviews from "@/components/Sections/Reviews/RevievSection";
import Classes from "@/components/Sections/Classes/Classes";



export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <WhatIbeliveIn />
        <Help />
        <Reviews />
        <Classes />
      </main>
    </>
  );
}
