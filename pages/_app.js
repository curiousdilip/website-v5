import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-quicksand", // Optional: use as CSS variable
});
export default function MyApp({ Component, pageProps }) {
  const ref = useRef(null);
  const router = useRouter();

  const options = {
    smooth: true,
    multiplier: 1.2,
  };

  useEffect(() => {
    if (ref.current?.locomotive) {
      setTimeout(() => {
        ref.current.locomotive.update();
      }, 100);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main data-scroll-container ref={ref} className={quicksand.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
