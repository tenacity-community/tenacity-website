"use client";
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

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

      <div className="flex justify-center items-center rounded-lg">
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
      </div>

      <section className="relative grid grid-rows-[1fr_20px_1fr] items-center justify-items-center min-h-50px p-8 pb-16 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto">
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
      </section>

      <div className="absolute inset-0 -z-10">
        <Particles quantity={500} ease={80} color={color} refresh />
      </div>
    </>
  );
}
