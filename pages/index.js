import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Jarvis Nu</title>
      </Head>
      <main className="min-h-screen bg-pink/10 w-full">
        <Navbar />
      </main>
    </div>
  )
}