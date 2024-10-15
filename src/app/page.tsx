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
import CanvasRevealEffectDemo2 from "./StaticCanvasRevealSeparate";
import ShineBorder from "@/components/magicui/shine-border";
import InfiniteMovingCardsDemo from "./testimonials";

import discover from "./../public/discover.svg";
import global from "./../public/global.svg";
import unloccpot from "./../public/unloccpot.svg";
import TenacityLearn from "./../public/TenacityLearn.png";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
// import { DesktopNav, TabletNav, MobileNav } from './components';

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <section className="responsive-section">
        <div className="container " style={{ padding: "55px" }}>
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
          style={{
            fontSize: "70px",
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          Turning{" "}
          <span
            className="pointer-events-none whitespace-pre-wrap leading-none text-white font-normal text-center"
            style={{ color: "#005af0", textAlign: "center" }}
          >
            Passion
          </span>
          <br />
          Into
          <span
            className="pointer-events-none whitespace-pre-wrap leading-none text-white font-normal text-center"
            style={{ color: "#005af0", textAlign: "center" }}
          >
            {" "}
            Obsession
          </span>
        </span>

        <div className="flex flex-col justify-center items-center">
          <div className="min-w-full pb-5 flex justify-center items-center">
            <p
              className="font-light leading-tight"
              style={{
                fontSize: "20px",
                color: "#78909C",
                textAlign: "center",
              }}
            >
              Tenacity is a student driven community that <br /> provides an
              inclusive and collaborative space to all
            </p>
            <p
              className="font-light leading-tight"
              style={{
                fontSize: "20px",
                color: "#78909C",
                textAlign: "center",
              }}
            ></p>
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
          className="flex flex-col items-center justify-center min-h-screen w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
          style={{ paddingTop: "-40px" }}
        >
          <div>
            <span
              className="pointer-events-none whitespace-pre-wrap text-8xl font-semibold leading-none text-white font-normal text-center"
              style={{ fontSize: "70px", fontWeight: "normal" }}
            >
              Introducing
              <span
                className="pointer-events-none whitespace-pre-wrap leading-none text-white font-normal text-center"
                style={{ color: "#005af0" }}
              >
                Tenacity Learn
              </span>
            </span>
          </div>
          <div className="p-3"></div>

          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <Card>
              <CardHeader style={{ padding: "0px" }}>
                <Image src={TenacityLearn} alt="" layout="responsive" />
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button>Learn more</Button>
        </div>
      </section>

      <section className="responsive-section">
        <div className="container ">
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
            industries and for <br />
            individuals.
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
