import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoCarousel from "@/components/ui/logocarousel";
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import CanvasRevealEffectDemo2 from "./../StaticCanvasRevealSeparate";
import ShineBorder from "@/components/magicui/shine-border";
import InfiniteMovingCardsDemo from "./../testimonials";

import discover from "./../../public/discover.svg";
import global from "./../../public/global.svg";
import unloccpot from "./../../public/unloccpot.svg";
import TenacityLearn from "./../public/TenacityLearn.png";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

const ResponsiveSection: React.FC = () => {


  return (
    <section className="responsive-section">
      <div className="container mx-auto flex-justify-center">
        <div id="reee" className="flex flex-wrap pb-20">
          <span
            className="pointer-events-none whitespace-pre-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-none text-white font-normal text-left"
            style={{ fontSize: "75px", fontWeight: "normal" }}
          >
            <span style={{ color: "#005af0" }}>Everything</span> <br />
            you need
          </span>
          <div className="p-5 sm:p-4 md:p-3 lg:p-20 xl:p-20"></div>
          <div className="p-5"></div>
          <span>
            <div className="pb-5"></div>

            <div>
              <p
                className="font-light leading-tight text-left sm:text-center md:text-center"
                style={{
                  fontSize: "20px",
                  color: "#78909C",
                }}
              >
                At Tenacity, we create an enriching and
                <br /> valuable experience for all members. We are <br />
                committed to helping our members succeed.
              </p>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;
