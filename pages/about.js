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
        <title>About | Dilip Kumar</title>
        <meta
          name="description"
          content="Learn more about Dilip Kumar, a passionate web developer dedicated to creating stylish and responsive websites that meet client needs."
        />
        <meta
          name="keywords"
          content="Dilip Kumar, about, web developer, portfolio, personal background"
        />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/about" />
        <meta property="og:title" content="About | Dilip Kumar " />
        <meta
          property="og:description"
          content="Learn more about Dilip Kumar, a passionate web developer dedicated to creating stylish and responsive websites that meet client needs."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/about" />
        <meta name="twitter:title" content="About | Dilip Kumar" />
        <meta
          name="twitter:description"
          content="Learn more about Dilip Kumar, a passionate web developer dedicated to creating stylish and responsive websites that meet client needs."
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
            My Journey
          </motion.h1>

          <motion.section
            className="side-by-side"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="side-by-side__content" variants={item}>
              <p className="side-by-side__paragraph">
                Coming from New Delhi, India, my journey centers around a
                passion for technology and continuous self-improvement. I find
                great satisfaction in solving problems, learning new skills, and
                pushing myself beyond my comfort zone to achieve growth.
              </p>
              <p className="side-by-side__paragraph">
                Besides coding, I enjoy listening to music, gaming, and reading.
                I also value sharing knowledge and collaborating with others in
                the tech community.
              </p>
            </motion.div>

            <Image
              src={portrait.src}
              alt="Web developer with black coat and blue background"
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
            <Card
              year="2019"
              text="Stepped into the world of real-world web development with my very first freelance project for NLP Minerals Pvt. Ltd. This experience not only sharpened my technical skills but also ignited my passion for creating digital solutions."
            />
            <Card
              year="2021"
              text="Achieved my first international breakthrough with MPAA, opening doors to global collaboration and new perspectives in problem-solving."
            />
            <Card
              year="2022"
              text="Landed my first full-time job at Taknik Bharti, starting a phase of rapid learning and hands-on experience in a professional environment."
            />
            <Card
              year="2022"
              text="Took on a major responsibility with my first government project, Pradhanmantri Sangrahalaya. Designing and building for the public sector taught me the value of impact and reliability in web solutions."
            />
            <Card
              year="2023"
              text="Ventured into modern frontend development by creating my first React website for Ramen Paul, further polishing my skills in JavaScript and user experience design."
            />
            <Card
              year="2023"
              text="Embarked on a new challenge with my second job at Paramarsh, a renowned IT solutions provider. Here, I continue to broaden my expertise, working on diverse projects and leveraging years of accumulated knowledge alongside talented teams."
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
              <h2 className="more-projects__header-heading">
                Besides my career
              </h2>
              <p className="more-projects__header-text">
                Engaging in music, gaming, and reading enriches my perspective
                and creativity. Being part of open-source and tech communities
                as "curiousdilip" allows me to contribute, learn, and connect
                with like-minded peers. I welcome discussions on code, ideas, or
                collaboration via Telegram or email.
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
                Notable Projects & Milestones:
              </motion.h3>

              <OtherProject
                heading="MPAA - Performing Arts Academy"
                text="I developed the official website for the MPAA - Performing Arts Academy using WordPress, WooCommerce, and the Essential Theme. The site promotes MPAA’s flagship 3-Year BA (Hons) Musical Theatre Performance Degree, highlighting strong industry connections and exceptional graduate employment rates."
              />
              <OtherProject
                heading="Pradhanmantri Sangrahalaya | Museum on Indian Prime Ministers"
                text="I contributed to the official website for the Pradhanmantri Sangrahalaya (Prime Ministers' Museum), a prestigious national museum dedicated to chronicling the lives and contributions of India’s Prime Ministers.

"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
