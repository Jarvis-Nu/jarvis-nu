import Head from "next/head";
import Develop from "../components/Develop";
import Hero from "../components/Hero";
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
      </main>
    </div>
  )
}