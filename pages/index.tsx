import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/Home/hero";
import Animation from "../components/Home/animation";

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col text-gray-600 items-center justify-center body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
          <Animation/>
        </div>
      </section>
    </Layout>
  );
}
