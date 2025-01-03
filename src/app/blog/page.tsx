import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import posts from "../../../post-details/data.json";
import Image from "next/image";
import { Card } from "@/Components/ui/card";
import BlogAnimation from "@/Components/animations/BlogAnimation";

export const metadata: Metadata = {
  title: "TalentPulse Ai | Blog",
};

export default function Blog() {
  return (
    <>
      <div className="pt-20 w-full bg-slate-100">
        <div className="max-w-screen-xl mx-auto py-10 md:px-2 px-6">
          <h1 className="text-center text-5xl font-semibold">Our Latest Blog</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 cursor-pointer pt-10">
            {posts.map((post, index) => (
              <BlogAnimation key={index}>
                <Card className="hover:scale-105 duration-200 pb-3 rounded-2xl shadow-lg">
                  <Image
                    src={post.src}
                    alt={post.tittle}
                    height={200} // Set a fixed height
                    width={300}  // Set a fixed width
                    loading="lazy"
                    className="w-full h-48 object-cover mb-4 rounded-t-2xl"
                  />
                  <p className="m-4 text-slate-500">
                    <span>October</span> <span>23, 2024</span>
                  </p>
                  <h1 className="m-4 text-2xl font-semibold">{post.tittle}</h1>
                  <Link href={`/blog/${post.id}`} passHref className="flex items-center gap-1">
                    <p className="ml-4 text-blue-500 hover:text-blue-700 text-xl">Read More</p>
                    <MoveRight className="text-blue-500" />
                    
                  </Link>
                </Card>
              </BlogAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}