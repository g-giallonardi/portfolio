'use client'
import Hero from "@/app/_components/Hero/Hero";
import Projects from "@/app/_components/Projects/Projects";
import Jobs from "@/app/_components/Jobs/Jobs";
import Stack from "@/app/_components/Stack/Stack";
import Skills from "@/app/_components/Skills/Skills";
import Contact from "@/app/_components/Contact/Contact";
import FadeInOnScroll from "@/app/_components/FadeInOnScroll/FadeInOnScroll";
export default function Home() {
  return (
      <div className="flex flex-col max-w-4xl m-auto
      "
      >

            <div className="bg-[url('./_assets/background/hero-background.svg')]">
                <Hero/>
            </div>

          <div className='flex flex-row gap-4'>
              <div className='basis-2/3'>
                  <FadeInOnScroll>
                    <Projects/>
                  </FadeInOnScroll>
              </div>
              <div className='basis-1/3 backdrop-blur-sm bg-white/30'>
                  <FadeInOnScroll>
                    <Jobs/>
                  </FadeInOnScroll>
              </div>
          </div>
          <FadeInOnScroll>
            <Skills/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Stack/>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Contact/>
          </FadeInOnScroll>
      </div>
  );
}
