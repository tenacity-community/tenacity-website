/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoCarousel from "@/components/ui/logocarousel";
import React from "react";
// import { css, jsx } from "@emotion/core";
import Navigation from "react-sticky-nav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from "@/components/ui/navbar-menu";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <section className="relative grid grid-rows-[1fr_20px_1fr] items-center justify-items-center min-h-50px p-8 pb-16 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto">
        <div className="pb-1" style={{ padding: "55px" }}>
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing Tenacity Learn
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
        <span
          className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal text-center"
          style={{ fontSize: "70px", fontWeight: "normal" }}
        >
          Turning <span style={{ color: "#005af0" }}>Passion</span> <br></br>{" "}
          Into <span style={{ color: "#005af0" }}>Obsession</span>
        </span>

        <div className="flex flex-col justify-center items-center">
          <div className="min-w-[500px] pb-5" style={{ width: "700px" }}>
            <p
              className="font-light leading-tight"
              style={{
                fontSize: "20px",
                color: "#78909C",
                textAlign: "center",
              }}
            >
              Tenacity is a student driven community that{" "}
            </p>
            <p
              className="font-light leading-tight"
              style={{
                fontSize: "20px",
                color: "#78909C",
                textAlign: "center",
              }}
            >
              provides an inclusive and collaborative space to all
            </p>
          </div>
          <Button className="items-center justify-center">
            Join the Community
          </Button>
        </div>
      </section>

      <div className="flex justify-center items-center rounded-lg w-[1500px]">
        <div className="relative w-[1200px] h-[600px] rounded-lg overflow-visible shadow-[0_0px_100px_50px_rgba(0,90,240,0.5)] min-w-screen">
          <div
            className="absolute inset-0 border-2 rounded-lg"
            style={{
              borderImage: "linear-gradient(to bottom, #1E293B, #000000) 1",
              borderImageSlice: 1,
              borderRadius: "10px", // Ensure the border radius is applied
            }}
          ></div>
          <div className="absolute inset-0 bg-black rounded-lg m-1"></div>
        </div>
      </div>

      <section className="relative grid grid-rows-[1fr_20px_1fr] items-center justify-items-center min-h-50px p-8 pb-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto">
        <div className="min-w-[500px] pb-5" style={{ width: "700px" }}>
          <div style={{ padding: "100px" }}></div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p
            className="font-light leading-tight"
            style={{
              fontSize: "20px",
              color: "#78909C",
              textAlign: "center",
            }}
          >
            Companies of all sizes trust Resend to{" "}
          </p>
          <p
            className="font-light leading-tight"
            style={{
              fontSize: "20px",
              color: "#78909C",
              textAlign: "center",
            }}
          >
            deliver their most important emails
          </p>
          <div className="p-3"></div>
          <LogoCarousel></LogoCarousel>
          <div className="pb-5"></div>
          <LogoCarousel></LogoCarousel>
        </div>

        <div className="" style={{ padding: "" }}></div>

        <div
          className="flex flex-col items-center justify-center min-h-screen"
          style={{ paddingTop: "-50px" }}
        >
          <div>
            <span
              className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal text-center"
              style={{ fontSize: "70px", fontWeight: "normal" }}
            >
              Introducing{" "}
              <span style={{ color: "#005af0" }}>Tenacity Learn</span>
            </span>
          </div>
          <div className="p-3"></div>

          <div>
            <Card>
              <CardHeader style={{ padding: "0px" }}>
                <img
                  src="https://media.discordapp.net/attachments/847153213996400660/1282276740521267240/image.png?ex=66dec4c6&is=66dd7346&hm=348b9a3cac82bc316e443c21640abbe45cd6da89bb6193248777a29317e24f2c&=&format=webp&quality=lossless&width=1043&height=701"
                  alt=""
                />
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* <div className="flex justify-center items-center rounded-lg">
        <div className="relative w-[1200px] h-[600px] rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <div
            className="absolute inset-0 border-2 rounded-lg"
            style={{
              borderImage: "linear-gradient(to bottom, #1E293B, #000000) 1",
              borderRadius: "10px", // Ensure the border radius is applied
            }}
          ></div>
          <div className="absolute inset-0 bg-black rounded-lg m-1"></div>
        </div>
      </div> */}

      {/* <div id="navbar" className="relative  w-full"></div> */}

      <div className="absolute inset-0 -z-10">
        <Particles quantity={500} ease={80} color={color} refresh />
      </div>
    </>
  );
}
