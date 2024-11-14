'use client'
import React from "react";
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

    <div className="flex items-center flex-col  justify-center h-[35rem] w-full">
      <FloatingDock

        mobileClassName="translate-y-20"
        items={links}
      />
      <div id='nonveg' className="relative -z-10 w-full h-[800px] flex items-center justify-center bg-cover bg-center" style={{ background: 'url(./Nonveg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(20%)' }} />
      <div id="question" className="absolute h-fit flex items-center flex-col gap-4">

        <div className="flex mx-auto bg-amber-500 p-7 rounded-lg h-[70%] w-[70%] flex-col gap-3">
          <h1>Services</h1>
          <p>At [Company Name], we offer a comprehensive range of services designed to meet the diverse needs of our customers. Whether you are an individual looking for personalized solutions or a business seeking to enhance your operations, we are committed to delivering exceptional service at every step. Our core services include [specific service], [another service], and [yet another service], each tailored to ensure the highest level of satisfaction and effectiveness. We take pride in our innovative approach, leveraging the latest technologies and methodologies to solve complex challenges and improve efficiency. From initial consultation to implementation and ongoing support, we work closely with you to understand your unique needs and provide solutions that drive tangible results. Whether you're in [industry] or [another industry], our team of experts brings years of experience and a deep understanding of the latest trends and best practices to every project. At [Company Name], we don’t just provide services — we build long-term partnerships that help you succeed and grow. We believe in putting the customer first, ensuring that every solution is customized, sustainable, and built to last.</p>
        </div>

      </div>
      <div className="bottom-0 fixed left-0 w-full h-20 bg-gray-900"></div>


    </div>
  );
}



