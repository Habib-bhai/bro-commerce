import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import LatestArticles from "../Components/latest-articles";
import PopularArticles from "../Components/popular-articles";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar bgColor="bg-transparent" color="text-white"/>
    <main>
      <Hero />
      <PopularArticles />
      <LatestArticles />
      <Contact />
    </main>
    </>
  );
}

