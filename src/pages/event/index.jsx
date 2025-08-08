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
    location: "Palo Alto, CA",
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
      <div className="min-h-[90vh] bg-pink-50 py-10 px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-adobejenson  text-[#f095d8]">
            Let’s Hang Out!
          </h1>
        </header>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2 z-0" />

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
                  className={`w-full md:w-1/2 px-6 flex flex-col justify-center items-center mt-0  rounded relative ${
                    isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
                  }`}
                >
                  {/* Dot on timeline */}
                  <FaHeart
                    className={`absolute  top-1/2 w-6 h-6  text-[#f095d8] transform -translate-y-1/2 z-10
                     ${isLeft ? "-right-3" : "-left-3"}
                    `}
                  />

                  <div className="w-full max-w-32 aspect-[1/0.4] relative left-0 ">
                    <Image
                      src={event.titleimg}
                      alt={event.title}
                      width={300}
                      height={150}
                      className="flex justify-start"
                    />
                  </div>
                  <div className="font-kievitSerifBold text-gray-800 font-semibold text-xl uppercase">
                    {event.date}
                  </div>
                  <div className="mt-1  leading-none text-xl flex flex-col items-center gap-2  text-gray-600">
                    <span className="font-medium  font-kievitSerif ">{event.title}</span>
                    <span className=" font-kievitSerif "> {event.location}</span>
                  </div>

                 <Link href={event.link}>
                   <button class="group mt-4 text-sm relative bg-[#f095d8] h-9  hover:text-[#f095d8] hover:bg-white inline-flex p-2 sm:px-4 sm:py-2  items-center justify-center overflow-hidden rounded-lg border border-neutral-200   font-medium text-neutral-600 transition-all [box-shadow:0px_2px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">
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
