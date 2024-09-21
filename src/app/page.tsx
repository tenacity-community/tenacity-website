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
import { Card, CardHeader } from "@/components/ui/card";
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
// import favicon from "../app/favicon.ico"
// import { Avatar } from "@/components/ui/avatar";
// import CanvasRevealEffectDemo3 from "./DynamicCanvasRevealSeparate";
import CanvasRevealEffectDemo2 from "./StaticCanvasRevealSeparate";
import ShineBorder from "@/components/magicui/shine-border";
import InfiniteMovingCardsDemo from "./testimonials";

import discover from "./../public/discover.svg"
import global from "./../public/global.svg"
import unloccpot from "./../public/unloccpot.svg"
import TenacityLearn from "./../public/TenacityLearn.png"
import Image from "next/image";

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

      <div className="flex justify-center items-center min-h-screen">
        <ShineBorder
          className="flex justify-center items-center rounded-lg relative w-[1200px] h-[600px] rounded-lg overflow-visible shadow-[0_0px_100px_50px_rgba(0,90,240,0.5)] min-w-screen"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Video
        </ShineBorder>
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
                <Image
                  src={TenacityLearn}
                  alt=""
                />
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button>Learn more</Button>
        </div>
      </section>

      <section className="relative grid grid-rows-[1fr_20px_1fr] items-center justify-items-center min-h-50px p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto">
        <div id="reee" className="flex" style={{ paddingBottom: "200px" }}>
          <span
            className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal text-left"
            style={{ fontSize: "75px", fontWeight: "normal" }}
          >
            <span style={{ color: "#005af0" }}>Everything</span> <br></br>
            you need
          </span>
          <div className="p-20"></div>
          <div className="p-5"></div>
          <span>
            <div className="pb-5"></div>

            <p
              className="font-light leading-tight "
              style={{
                fontSize: "20px",
                color: "#78909C",
                textAlign: "left",
              }}
            >
              At Tenacity, we create an enriching and
              <br /> valuable experience for all members. We are <br />
              committed to helping our members succeed.
            </p>
          </span>
        </div>

        <div id="cards" className="flex">
          <div style={{ width: "325px" }}>
            <CanvasRevealEffectDemo2
              text="Discover, learn, earn and mentor"
              ikon="https://media.discordapp.net/attachments/847153213996400660/1282592894217355325/discover.png?ex=66dfeb37&is=66de99b7&hm=92546ced0e04aceb3473ba265a3644ea4e7f7e165927bff1ddaf122d95fa5e0a&=&format=webp&quality=lossless&width=147&height=162"
            />
          </div>
          <div className="p-5"></div>
          <div style={{ width: "325px" }}>
            <CanvasRevealEffectDemo2
              text="A community with a global presence"
              ikon="https://media.discordapp.net/attachments/847153213996400660/1282592894435463208/global.png?ex=66dfeb37&is=66de99b7&hm=ca32107c9ab38ff4b1a46a83a9cca7519c9d1e6ab5bbc7c2a80da9a38e5be508&=&format=webp&quality=lossless&width=158&height=158"
            />
          </div>
          <div className="p-5"></div>
          <div style={{ width: "325px" }}>
            <CanvasRevealEffectDemo2
              text="Unlock your potential with Tenacity"
              ikon="https://media.discordapp.net/attachments/847153213996400660/1282592893978022006/unloccpot.png?ex=66dfeb37&is=66de99b7&hm=81258f40a8f96586c5619d436727536c075fcd5c10f96c202c19dedfeac36113&=&format=webp&quality=lossless&width=130&height=160"
            />
          </div>
        </div>
      </section>

      <section
        id="everything is covered"
        className="relative flex flex-col items-start justify-center min-h-50px p-8 pb-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto"
      >
        <span
          className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal"
          style={{ fontSize: "75px", fontWeight: "normal" }}
        >
          <span style={{ color: "#005af0" }}>Everything</span> <br></br>
          is covered
          <p
            className="font-light leading-tight "
            style={{
              fontSize: "20px",
              color: "#78909C",
              textAlign: "left",
            }}
          >
            At Tenacity, you&apos;ll find everything you need for growth. <br />
            Discover, learn, earn, mentor, connect and make an impact
          </p>
        </span>

        <div className="flex flex-col">
          <div className="flex">
            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>

            <div style={{ padding: "15px" }}></div>

            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>

            <div style={{ padding: "15px" }}></div>

            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>
          </div>

          <div className="p-5"></div>

          <div className="flex">
            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>

            <div style={{ padding: "15px" }}></div>

            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>

            <div style={{ padding: "15px" }}></div>

            <div>
              <div className="flex">
                <p
                  className="font-light leading-tight"
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  O
                </p>
                <div className="p-1"></div>
                <p
                  className="font-light leading-tight "
                  style={{
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Network and collaborate
                </p>
              </div>
              <div className="p-1"></div>
              <p
                className="font-light leading-tight "
                style={{
                  fontSize: "15px",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Integer tempor sodales nibh, <br /> sit amet posuere neque
                dictum sed. Proin <br />
                vestibulum blandit aliquet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative flex flex-col items-center justify-center min-h-50px p-8 pb-8 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)] w-4/5 mx-auto"
      >
        <span
          className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal text-center"
          style={{ fontSize: "70px", fontWeight: "normal" }}
        >
          What <span style={{ color: "#005af0" }}>people</span> say
        </span>

        <div className="flex justify-center items-center">
          <p
            className="font-light leading-tight"
            style={{
              fontSize: "25px",
              color: "#78909C",
              textAlign: "center",
            }}
          >
            Tenacity is crafting exceptional experiences that drive success
            stories, <br /> empower businesses, and foster growth across various
            industries and for <br />individuals.
          </p>
        </div>

        {/* <div style={{ paddingTop: "0px" }} className="absolute bottom-0 left-0 right-0"> */}
          <InfiniteMovingCardsDemo />
        {/* </div> */}
      </section>

      <div className="absolute inset-0 -z-10">
        <Particles quantity={500} ease={80} color={color} refresh />
      </div>
    </>
  );
}
