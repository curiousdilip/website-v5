import Head from "next/head";
import portrait from "../public/assets/dilip-kumar.jpg";
import Card from "../components/Card";
import OtherProject from "../components/OtherProject";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
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
        <title>Dilip Kumar | Web Developer in Delhi</title>
        <meta
          name="description"
          content="About Dilip, a web developer from New Delhi, India. Specializing in React, WordPress, and government web projects. Explore my journey, skills, and portfolio."
        />
        <meta
          name="keywords"
          content="Web Developer in India, Freelance Web Developer, web developer, portfolio, WordPress Developer"
        />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/about" />
        <meta
          property="og:title"
          content="Dilip Kumar | Web Developer in Delhi "
        />
        <meta
          property="og:description"
          content="About Dilip, a web developer from New Delhi, India. Specializing in React, WordPress, and government web projects. Explore my journey, skills, and portfolio."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/about" />
        <meta
          name="twitter:title"
          content="Dilip Kumar | Web Developer in Delhi"
        />
        <meta
          name="twitter:description"
          content="About Dilip, a web developer from New Delhi, India. Specializing in React, WordPress, and government web projects. Explore my journey, skills, and portfolio."
        />
        <meta
          name="twitter:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />

        <link rel="canonical" href="https://www.dilipmaurya.in/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-scroll-section>
        <div className="container container__padding-block">
          <motion.h1
            className="about__heading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            About Me
          </motion.h1>

          <motion.h2
            className="about__heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            My Journey as a Web Developer in New Delhi
          </motion.h2>

          <motion.section
            className="side-by-side"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="side-by-side__content" variants={item}>
              <h3 className="side-by-side__paragraph">
                Early Passion and Background
              </h3>
              <p className="side-by-side__paragraph">
                Coming from New Delhi, India, I am a passionate web developer
                dedicated to continuous self-improvement and technology. I
                thrive on solving complex problems, learning new skills, and
                pushing beyond my comfort zone.
              </p>
            </motion.div>

            <Image
              src={portrait.src}
              alt="Dilip, Web Developer in New Delhi, India"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              priority
              variants={item}
              className="side-by-side__img"
            />
          </motion.section>

          <section className="career-path">
            <h3 className="side-by-side__paragraph">Professional Timeline</h3>

            <Card
              year="2019"
              text="First freelance job in 2019: NLP Minerals Pvt. Ltd. Started my career as a freelance web developer in India. Provided a custom web solution, which helped me improve my technical and client communication skills."
            />
            <Card
              year="2021"
              text="International Breakthrough – MPAA Performing Arts Academy. I made the official website for MPAA using WordPress, WooCommerce, and the Essential Theme. Opened doors for working together on a global scale and showed off skills in e-commerce and education platforms."
            />
            <Card
              year="2022"
              text="Full-Time Job at Taknik Bharti I joined Taknik Bharti as a web developer, where I learned a lot by working in a fast-paced professional setting."
            />
            <Card
              year="2022"
              text="Government Project – Pradhanmantri Sangrahalaya Helped make the official website for the Pradhanmantri Sangrahalaya, a national museum about India's Prime Ministers. Learned how important reliability and impact are in web solutions for the public sector."
            />
            <Card
              year="2023"
              text="Ramen Paul on Modern Frontend Development I made my first React website, which helped me get better at JavaScript, UI/UX, and modern frontend frameworks."
            />
            <Card
              year="2023"
              text="Paramarsh – IT Solutions Provider At Paramarsh, I work with talented teams on a variety of projects and use the knowledge I've gained over the years."
            />
            <Card
              year="2025"
              text="I just finished my time at Paramarsh and am now actively looking for new freelance projects and job openings where I can use my creativity, dependability, and technical skills."
            />
          </section>

          <section className="more-projects">
            <motion.div
              className="more-projects__header"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              <h3 className="more-projects__header-heading">
                In addition to my job
              </h3>
              <p className="more-projects__header-text">
                Playing music, video games, and reading all help me see things
                in new ways and come up with new ideas. As "curiousdilip," I can
                learn, contribute, and connect with other people who are
                interested in open source and technology. You can talk to me
                about code, ideas, or working together on Telegram or by email.
              </p>
            </motion.div>

            <div className="more-projects__projects">
              <motion.h3
                className="more-projects__projects-heading"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
                transition={{ duration: 1, ease: "anticipate" }}
              >
                Important Projects and Milestones:
              </motion.h3>

              <OtherProject
                heading="MPAA - Performing Arts Academy"
                text="I used WordPress, WooCommerce, and the Essential Theme to make the MPAA - Performing Arts Academy's official website. The site promotes MPAA's flagship 3-Year BA (Hons) Musical Theatre Performance Degree, which has strong ties to the industry and a high rate of graduates finding work."
              />
              <OtherProject
                heading="Pradhanmantri Sangrahalaya | Museum on Indian Prime Ministers"
                text="I helped make the official website for the Pradhanmantri Sangrahalaya, which is a well-known national museum that tells the stories of India's Prime Ministers and their contributions to the country.

"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
