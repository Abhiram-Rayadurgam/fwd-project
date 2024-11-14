'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {

  IconExchange,
  IconHome, IconLogin2,
  IconInfoCircle, IconCheese
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
      href: "Login",
    },
    {
      title: "My Meals",
      icon: (
        <IconCheese className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/mymeals",
    },

  ];

  return (

    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock

        mobileClassName="translate-y-20"
        items={links}
      />
      <div id='nonveg' className="relative -z-10 w-full h-[800px] flex items-center justify-center bg-cover bg-center" style={{ background: 'url(./Nonveg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(20%)' }} />
      <div id="question" className="absolute h-fit flex items-center flex-col gap-4">

        <div className="flex mx-auto bg-amber-500 p-7 rounded-lg h-[70%] w-[70%] flex-col gap-3">
          <h1>ABOUT</h1>
          <p>Welcome to [Company Name]! We’re passionate about making a difference in the world and believe that even small actions can lead to impactful changes. Founded on the principle of quality and innovation, [Company Name] has grown from a small idea to a recognized leader in [industry/field].
            Our Mission

            Our mission is simple: to bring exceptional [products/services] to our customers while prioritizing sustainability and innovation. We aim to create solutions that not only meet the needs of today but also anticipate the challenges of tomorrow. Every decision we make is rooted in our commitment to quality, customer satisfaction, and environmental responsibility.</p>
        </div>

      </div>
      <div className="bottom-0 fixed left-0 w-full h-20 bg-gray-900"></div>

    </div>
  );
}


