import Head from "next/head";
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
      </main>
    </div>
  )
}