import Head from "next/head";
import Develop from "../components/Develop";
import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Satisfied from "../components/Satisfied";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Jarvis Nu</title>
      </Head>
      <main className="min-h-screen w-full space-y-5">
        <Hero />
        <Satisfied />
        <Develop />
        <Portfolio />
        <OurTeam />
        <Reviews />
        <Subscribe />
      </main>
    </div>
  )
}
