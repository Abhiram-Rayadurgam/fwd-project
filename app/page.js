'use client'
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {

  IconExchange,
  IconHome, IconLogin2,
  IconInfoCircle, IconCheese,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  useEffect(() => {

    const image = document.getElementById('nonveg');
    const qs = document.getElementById('question');

    if (image) {
      gsap.fromTo(
        image,

        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }

      );
    }
    gsap.fromTo(qs, { y: 1000, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  }, []);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },

    {
      title: "Services",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },

    {
      title: "Login/Register",
      icon: (
        <IconLogin2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/login",
    },
    {
      title: "My Meals",
      icon: (
        <IconCheese className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/mymeals",
    },

  ];
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "/1.png",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "/2.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "/4.jpg",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "/5.jpg",
    },

  ];
  const words = `Monetize food from your Home!`;
  return (
    <div>
      <div className="flex flex-col items-center justify-center  w-full">
        <FloatingDock

          mobileClassName="translate-y-20"
          items={links}
        />
        <div id='nonveg' className="relative -z-10 w-full h-[600px] flex items-center justify-center bg-cover bg-center" style={{ background: 'url(./Nonveg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(20%)' }} />
        <div id="question" className="absolute h-fit flex items-center flex-col gap-4">
          <div><form>
            <input className="p-3 w-[20rem] rounded-lg px-6 mx-auto" type="text" placeholder="What do you want to eat today?" />
          </form></div>
          <div className="flex flex-row gap-3">
            <button className="px-3 rounded-md bg-green-500" >Veg</button>
            <button className="px-3 rounded-md bg-red-500">NonVeg</button>
          </div><TextGenerateEffect duration={2} words={words} /></div>
        <div className="mt-3 text-4xl">People Near You!</div>

        <div className="flex flex-row items-center justify-center mt-4 mb-1 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <div className="bottom-0 fixed left-0 w-full h-20 bg-gray-900"></div>
      </div>

    </div>
  );
}

