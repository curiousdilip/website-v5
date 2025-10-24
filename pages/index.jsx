import Head from "next/head";
import { motion } from "framer-motion";
import michael from "../public/michael-sam.png";
import tarun from "../public/tarunpreet.png";
import ankit from "../public/ankit-dp.png";
import oxsys from "../public/oxsys-team.png";
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
        <title>Dilip Kumar | Web Developer in Delhi</title>
        <meta
          name="description"
          content="Expert web developer in Delhi specializing in responsive website design, custom web development, React, PHP & WordPress. SEO-optimized solutions for businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/" />
        <meta
          property="og:title"
          content="Dilip Kumar | Web Developer in Delhi"
        />
        <meta
          property="og:description"
          content="Expert web developer in Delhi specializing in responsive website design, custom web development, React, PHP & WordPress. SEO-optimized solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/" />
        <meta
          name="twitter:title"
          content="Dilip Kumar | Web Developer in Delhi"
        />
        <meta
          name="twitter:description"
          content="Expert web developer in Delhi specializing in responsive website design, custom web development, React, PHP & WordPress. SEO-optimized solutions for businesses."
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
          content="freelance web developer, Custom websites, responsive website design,PHP Development"
        />
      </Head>

      <div className="container">
        <div className="hero">
          <div className="hero__info" style={{ flex: 1 }}>
            <motion.div
              className="hero__head"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              <h1> Hi, I'm Dilip Kumar – Web Developer in Delhi</h1>
            </motion.div>

            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "anticipate" }}
            >
              <h2> Custom Web Development Services in Delhi NCR</h2>
            </motion.div>
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: "anticipate" }}
            >
              I am a freelance web developer based in Delhi, specializing in
              responsive website design, custom web development, and
              SEO-optimized solutions. With expertise in Next.js, React, PHP,
              and WordPress, I help businesses in Delhi and beyond build
              high-performing, secure, and user-friendly websites.
            </motion.div>
          </div>
        </div>
        <motion.div
          className="services"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="service-heading" variants={item}>
            Services
          </motion.h2>

          <div className="service-cards-grid">
            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-globe"></i>
              </div>
              <div className="service-detail">
                <h3>Web Development Services</h3>
                <p>
                  Custom websites, web applications, and e-commerce solutions.
                </p>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-wordpress"></i>
              </div>
              <div className="service-detail">
                <h3>WordPress Development</h3>
                <p>Custom themes, plugins, and site optimization.</p>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <div className="service-detail">
                <h3>React & PHP Development</h3>
                <p>Modern, scalable web apps.</p>
              </div>
            </motion.div>
            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="service-detail">
                <h3>Analytics & SEO</h3>
                <p>
                  Performance tracking, SEO audits, and on-page optimization.
                </p>
              </div>
            </motion.div>
            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <div className="service-detail">
                <h3>Web Security</h3>
                <p> Secure coding, vulnerability assessments.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="projects"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="projects-heading" variants={item}>
            Key Projects
          </motion.h2>

          <div
            className="project-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 3fr))",
              gap: "2rem",
            }}
          >
            <motion.div
              className="project-card"
              variants={item}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                background: "#131313",
                boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
                overflow: "hidden",
                minHeight: 420,
                border: "1px solid #222",
              }}
            >
              <div
                style={{ width: "100%", height: "180px", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.4%",
                  }}
                >
                  <Image
                    src="https://cdn.cosmicjs.com/0960a860-6eb9-11f0-9635-17c84764a8f2-www-discipleshipcentre-org-in_.png"
                    alt="Discipleship Centre"
                    width={387}
                    height={258}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Discipleship Centre
                </h3>
                <p
                  style={{
                    color: "rgb(187, 187, 187)",
                    fontSize: "1rem",
                    flexGrow: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  Discipleship Centre (DC) is a registered nonprofit
                  organization working toward the sustainable devel...
                </p>
                <Link
                  href="portfolio/discipleship-centre"
                  className="btn btn--secondary"
                  style={{ alignSelf: "flex-start", lineHeight: 1.6 }}
                >
                  View Project
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="project-card"
              variants={item}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                background: "#131313",
                boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
                overflow: "hidden",
                minHeight: 420,
                border: "1px solid #222",
              }}
            >
              <div
                style={{ width: "100%", height: "180px", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.4%",
                  }}
                >
                  <Image
                    src="https://cdn.cosmicjs.com/8df5f630-6eb8-11f0-9c1f-63444cd7c64f-sidharth-design_.png"
                    alt="Sidharth Design"
                    width={387}
                    height={258}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Sidharth Design
                </h3>
                <p
                  style={{
                    color: "rgb(187, 187, 187)",
                    fontSize: "1rem",
                    flexGrow: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  An independent brand designer on a mission to craft brands
                  that pop! I'm all about teaming up to cre...
                </p>
                <Link
                  href="portfolio/sidharth-design"
                  className="btn btn--secondary"
                  style={{ alignSelf: "flex-start", lineHeight: 1.6 }}
                >
                  View Project
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="project-card"
              variants={item}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                background: "#131313",
                boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
                overflow: "hidden",
                minHeight: 420,
                border: "1px solid #222",
              }}
            >
              <div
                style={{ width: "100%", height: "180px", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.4%",
                  }}
                >
                  <Image
                    src="https://cdn.cosmicjs.com/a591f080-6df7-11f0-8a01-b925a63a09d6-mpaa-ac-uk_.png"
                    alt="MPAA Academy"
                    width={387}
                    height={258}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  MPAA Academy
                </h3>
                <p
                  style={{
                    color: "rgb(187, 187, 187)",
                    fontSize: "1rem",
                    flexGrow: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  MPAA is an independent Higher and Further Education Academy
                  for the Performing Arts.
                </p>
                <Link
                  href="portfolio/mpaa-academy"
                  className="btn btn--secondary"
                  style={{ alignSelf: "flex-start", lineHeight: 1.6 }}
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          </div>

          <div
            className="block"
            style={{ display: "block", margin: "0 auto", marginBottom: "60px" }}
          >
            <Link href="/portfolio" className="btn btn--primary">
              View More Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="skills"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="skill-heading" variants={item}>
            Testimonials
          </motion.h2>

          <div className="review-cards-grid">
            <div className="review-card">
              <div className="review-header">
                <Image
                  src={michael}
                  alt="Michael Sam"
                  className="author-img"
                  width={32}
                  height={32}
                />

                <div className="author-name">Michael Sam</div>
                <div className="rating">★★★★★</div>
              </div>
              <div className="review-text">
                Dilip Kumar did an amazing job on my landing page. He finished
                everything in just one week, and the page ...
              </div>
              <div className="review-date">September 22, 2025</div>
            </div>

            <div className="review-card">
              <div className="review-header">
                <Image
                  src={ankit}
                  alt="ankit"
                  className="author-img"
                  width={32}
                  height={32}
                />
                <div className="author-name">Ankit Kushwaha</div>
                <div className="rating">★★★★★</div>
              </div>
              <div className="review-text">
                Working with Dilip was an excellent experience. He was fast,
                efficient, and delivered a website that exce ...
              </div>
              <div className="review-date">August 23, 2025</div>
            </div>

            <div className="review-card">
              <div className="review-header">
                <Image
                  src={tarun}
                  alt="tarunpreet"
                  className="author-img"
                  width={32}
                  height={32}
                />
                <div className="author-name">Tarunpreet Kaur</div>
                <div className="rating">★★★★★</div>
              </div>
              <div className="review-text">
                Dilip is a talented developer with a knack of developing exactly
                what the client wants. I worked with Dil ...
              </div>
              <div className="review-date">July 30, 2025</div>
            </div>

            <div className="review-card">
              <div className="review-header">
                <Image
                  src={oxsys}
                  alt="oxsys"
                  className="author-img"
                  width={32}
                  height={32}
                />
                <div className="author-name">Oxsys Systems</div>
                <div className="rating">★★★★★</div>
              </div>
              <div className="review-text">
                Excellent professionalism, well coordinated, delivered in time,
                rightly charged, a dedicated coder, stron ...
              </div>
              <div className="review-date">November 7, 2024</div>
            </div>
          </div>

          <div
            className="block"
            style={{ display: "block", margin: "0 auto", marginBottom: "60px" }}
          >
            <Link
              href="https://www.google.com/search?q=Dilip+Kumar+%7C+Web+Developer%E2%80%A6#lrd=0x390d1b0024a3520b:0x7cca2b1632be5ac7,1,"
              target="_blank"
              className="btn btn--primary"
            >
              Read More Reviews
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="ctbox-home"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="ctbox ">
            <p>Ready to grow your business online? </p>
            <p>for a free consultation.</p>
            <div
              className="block"
              style={{ display: "block", margin: "0 auto", marginTop: "20px" }}
            >
              <Link href="/contact" className="btn btn--primary">
                {" "}
                Contact me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
