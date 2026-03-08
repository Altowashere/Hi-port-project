import { useState } from "react";
import { ChevronDow, Section, Star } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotj,
  SiMongodb,
} from "react-icons/si";
import { Personal_info, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import fadeIn from "../animations/fadein";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="">
      <RadialGradientBackground varient="hero" />

      {/*Content container*/}
      <div className="">
        <div className="">
          {/*Left column - content*/}
          <div className="">
            <FadeIn delay={0}>
              <div className="">
                <Star className="" />
                <span className="">
                  {Personal_info.title} | Based in {Personal_info.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="">Tuff port-hero.jsx</h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas tenetur, cumque recusandae molestiae facere eveniet,
                repellat nulla maxime ducimus minus odio, nam praesentium esse
                nihil excepturi corrupti aliquid omnis repudiandae! - hero.jsx
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button onClick={() => scrollToSection("contact")} className="">
                <div className="">Contact Me</div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="">
                {STATS.map((stat, index) => (
                  <div key={index} className="">
                    <div className="">{stat.value}</div>
                    <p className="">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
