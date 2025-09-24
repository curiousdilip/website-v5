import Head from "next/head";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../public/developer.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <>
      <Head>
        <title>Dilip Kumar | Professional Web Developer in Delhi</title>
        <meta
          name="description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/" />
        <meta property="og:title" content="Dilip Kumar | Professional Web Developer in Delhi" />
        <meta
          property="og:description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/" />
        <meta name="twitter:title" content="Dilip Kumar | Professional Web Developer in Delhi" />
        <meta
          name="twitter:description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta
          name="twitter:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.dilipmaurya.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="keywords"
          content="Dilip kumar, web developer, curiousdilip,"
        />
      </Head>

      <div
        className="container"
        style={{
          // display: "flex",
          // alignItems: "center",
          // gap: "3rem",
          // minHeight: "80vh",
        }}
      >
        <div className="hero">

          <div className="hero__info" style={{ flex: 1 }}>
            <motion.div
              className="hero__head"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              Hi, I&apos;m <h1>Dilip Kumar</h1>,
            </motion.div>
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "anticipate" }}
            >
              a passionate web developer based in Delhi, specializing in responsive website design and custom web development. I create user-friendly, SEO-optimized websites using modern technologies like Next.js, React, PHP, and WordPress.
            </motion.div>

            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: "anticipate" }}
            >
              Beyond coding, I stay updated with the latest web development trends, SEO best practices, and innovative design techniques to deliver impactful solutions.
            </motion.div>
          </div>
        </div>
         <div className="projects">
          <motion.h2
            className="projects-heading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            Key Projects
          </motion.h2>

          <div class="project-cards-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 3fr))",
            gap: "2rem",

          }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="project-card" style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              background: "#131313",
              boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
              overflow: "hidden",
              minHeight: 420,
              border: "1px solid #222",
            }}>
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>

                  <Image
                    src={"https://cdn.cosmicjs.com/0960a860-6eb9-11f0-9635-17c84764a8f2-www-discipleshipcentre-org-in_.png"}
                    alt="Shalom Packers & Movers"
                    fill
                    sizes="(max-width: 768px) 100vw, 387px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>Discipleship Centre
                </h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  Discipleship Centre (DC) is a registered nonprofit organization working toward the sustainable devel...
                </p>
                <a href="work/discipleship-centre" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card" style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              background: "#131313",
              boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
              overflow: "hidden",
              minHeight: 420,
              border: "1px solid #222",
            }}>
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>

                  <Image
                    src={"https://cdn.cosmicjs.com/8df5f630-6eb8-11f0-9c1f-63444cd7c64f-sidharth-design_.png"}
                    alt="Sidharth Design"
                    fill
                    sizes="(max-width: 768px) 100vw, 387px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>Sidharth Design</h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  An independent brand designer on a mission to craft brands that pop! I'm all about teaming up to cre...
                </p>
                <a href="work/sidharth-design" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card" style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              background: "#131313",
              boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
              overflow: "hidden",
              minHeight: 420,
              border: "1px solid #222",
            }}>
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>

                  <Image
                    src={"https://cdn.cosmicjs.com/a591f080-6df7-11f0-8a01-b925a63a09d6-mpaa-ac-uk_.png"}
                    alt="MPAA Academy"
                    fill
                    sizes="(max-width: 768px) 100vw, 387px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>MPAA Academy
                </h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  MPAA is an independent Higher and Further Education Academy for the Performing Arts.
                </p>
                <a href="work/mpaa-academy" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </div>


          </div>


      <div className="block" style={{display:"block", margin:"0 auto", marginBottom:"60px"}}>
              <a href="/work" className="btn btn--primary" >
            View More Project</a>
      </div>
       
      </div>
      </div>

     
    </>
  );
}
