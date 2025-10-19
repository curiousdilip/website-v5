import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Quicksand } from "next/font/google";
import Script from "next/script";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-quicksand",
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
        <meta name="google-site-verification" content="soBSvXZTtbZB3TKHu92b_RAUy6KcQtKKuaf7GcFW1oE" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W78VYNSQ67"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W78VYNSQ67');
        `}
      </Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "url": "https://www.dilipmaurya.in/",
            "name": "Dilip Kumar Maurya",
            "logo": "https://www.dilipmaurya.in/img/logo.svg",
            "description": "Dilip Kumar is a web developer based in India, who builds user-friendly and responsive websites to meet your needs.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
              "addressCountry": "India"
            },

            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 98997 42615",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://twitter.com/curiousdilip",
              "https://www.github.com/curiousdilip",
              "https://www.linkedin.com/in/curiousdilip/",

            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }, "knowsAbout": ["React", "WordPress", "JavaScript", "Web Development", "UI/UX Design"]

          })
        }}
      />
      <Header />
      <main data-scroll-container ref={ref} className={quicksand.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
