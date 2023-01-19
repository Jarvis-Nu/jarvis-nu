import Head from "next/head";
import Develop from "../components/Develop";
import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Satisfied from "../components/Satisfied";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Jarvis Nu</title>
      </Head>
      <main className="min-h-screen w-full">
        <Hero />
        <Satisfied />
        <Develop />
        <Portfolio />
        <OurTeam />
        <Reviews />
      </main>
    </div>
  )
}
