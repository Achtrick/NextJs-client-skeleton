import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Les dernières actualités dans un moderne portail"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Index</div>
    </>
  );
}
