"use client";
import Image from "next/image";
import posts from "../../post-details/data.json";
import { Card } from "../Components/ui/card";
import Link from "next/link";
import { MoveRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function LatestArticles() {
  return (
    <section className="pt-32  bg-gray-200">
      <div className="w-screen  lg:px-4 px-7">
        <motion.h1
          initial={{ opacity: 0.3, x: -20 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          exit={{ opacity: 0, x: -20 }}
          className="text-3xl font-semibold my-6 text-center mt-12"
        >
          Latest Articles
        </motion.h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-8 cursor-pointer">
          {
            posts.slice(4, 10).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, y: -20 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                exit={{ opacity: 1, y: -20 }}
              >
                <Card className=" w-[300px] md:w-[400px] hover:scale-105 duration-300 transition-transform pb-3 rounded-2xl shadow-lg my-4">
                  <Image
                    src={post.src}
                    alt={post.tittle}
                    loading="lazy"
                    height={400}
                    width={400}
                    className="w-full h-[65%] mb-4 rounded-t-2xl"
                  />
                  <div className="m-4 flex gap-2 ">
                    <CalendarDays className="w-5" />
                    <span className="font-light">11/3/24</span>
                  </div>
                  <h1 className="m-4 text-2xl font-semibold">{post.tittle}</h1>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1"
                  >
                    <p className="ml-4 text-blue-500 hover:text-blue-700 text-xl">
                      Read More
                    </p>
                    <MoveRight className="text-blue-500" />
                  </Link>
                </Card>
              </motion.div>
            ))}
        </div>
        <div className="flex justify-center py-8">
          <Link href="/blog">
            <button className="bg-zinc-800 hover:bg-zinc-950 text-zinc-50 px-7 py-2 rounded-full">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}