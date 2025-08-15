"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
const events = [
  {
    date: "October 14ᵗʰ, 2025",
    title: "Meet Cute Bookshop",
    location: "La Mesa, CA",
    titleimg: "/revolvetitle.png",
    link: " https://meetcutebookshop.com/events/3306620251014",
  },
  {
    date: "October 15ᵗʰ, 2025",
    title: "Books, Inc.",
    location: "Mountain View, CA",
    titleimg: "/revolvetitle.png",
    link: "https://booksinc.net/event/2025-10-15/bal-khabra-books-inc-mountain-view",
  },
  {
    date: "October 16ᵗʰ, 2025",
    title: "The King’s English",
    location: "Salt Lake City, UT",
    titleimg: "/revolvetitle.png",
    link: "https://www.eventbrite.com/e/bal-khabra-revolve-tickets-1538613276729?aff=oddtdtcreator",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function EventsPage() {
  return (
    <Layout>
      <div className="min-h-[90vh] bg-pink-50 pt-36 sm:pt-16 md:pt-20 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-adobejenson  text-[#f095d8]">
            Let’s Hang Out!
          </h1>
        </div>

        <div className="relative max-w-2xl mx-auto">

          {/* Vertical Line */}
          <div className="block absolute left-1/2 top-0 h-full w-[2px]  sm:w-1 bg-gray-300 transform -translate-x-1/2 z-0" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-2 relative z-10"
          >
            {events.map((event, index) => {
              const isLeft = index === 1; // middle one on the left
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className={`w-1/2 sm:px-6 flex flex-col justify-center items-center mt-0  rounded relative ${
                    isLeft ? "ml-0 mr-auto pr-4" : "mr-0 ml-auto pl-4"
                  }`}
                >
                  {/* Dot on timeline */}
                  <FaHeart
                    className={`absolute  top-1/2 w-4 h-4 sm:w-6 sm:h-6  text-[#f095d8] transform -translate-y-1/2 z-10
                     ${isLeft ? "-right-2 sm:-right-3" : "-left-2 sm:-left-3"}
                    `}
                  />

                  <div className="w-full max-w-24 sm:max-w-32 aspect-[1/0.4] relative left-0 ">
                    <Image
                      src={event.titleimg}
                      alt={event.title}
                      width={300}
                      height={150}
                      className="flex justify-start"
                    />
                  </div>
                  <div className="font-kievitSerifBold text-gray-800 font-semibold text-base sm:text-xl uppercase">
                    {event.date}
                  </div>
                  <div className="mt-1  leading-none text-sm sm:text-xl flex flex-col items-center gap-2  text-gray-600">
                    <span className="font-medium  font-kievitSerif ">{event.title}</span>
                    <span className=" font-kievitSerif "> {event.location}</span>
                  </div>

                 <Link href={event.link}>
                   <button class="group mt-3 sm:mt-4 text-xs sm:text-sm relative bg-[#f095d8] h-7 sm:h-9  hover:text-[#f095d8] hover:bg-white inline-flex  px-3 py-2 sm:px-4 sm:py-2  items-center justify-center overflow-hidden rounded-lg border border-neutral-200   font-medium text-neutral-600 transition-all [box-shadow:0px_2px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">
                     GET TICKETS
                   </button></Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
