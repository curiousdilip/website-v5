import Head from 'next/head';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../public/developer.json'; 


export default function Home() {
  const links = [
    { href: "/work", label: "What I have Built?" },
    { href: "/about", label: "More about myself" },
    { href: "/resume", label: "My Latest Resume" },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <>
      <Head>
  <title>Dilip Kumar | Web Developer</title>
  <meta name="description" content="Dilip Kumar is a web developer based in India, who builds user-friendly and responsive websites to meet your needs." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.dilipmaurya.in/" />
  <meta property="og:title" content="Dilip Kumar | Web Developer" />
  <meta property="og:description" content="Dilip Kumar is a web developer based in India, who builds user-friendly and responsive websites to meet your needs." />
  <meta property="og:image" content="https://www.dilipmaurya.in/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.dilipmaurya.in/" />
  <meta name="twitter:title" content="Dilip Kumar | Web Developer" />
  <meta name="twitter:description" content="Dilip Kumar is a web developer based in India, who builds user-friendly and responsive websites to meet your needs." />
  <meta name="twitter:image" content="https://www.dilipmaurya.in/og-image.jpg" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="canonical" href="https://www.dilipmaurya.in/" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Dilip Kumar Maurya" />
  <meta name="publisher" content="Dilip Kumar Maurya" />
  <meta httpEquiv="Content-Language" content="en" />
  <meta name="keywords" content= "Dilip kumar, web developer, curiousdilip," />  
      </Head>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', minHeight: '80vh' }}>
        <div className="hero">
             <Lottie animationData={animationData} loop={true} autoplay={true} />
     


          <div className="hero__info" style={{ flex: 1 }}>
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'anticipate' }}
            >
              Hey there, I&apos;m <h1>Dilip Kumar</h1>, a dedicated <h2>web developer</h2> with a passion to empower your business in the digital world. I specialize in developing websites that elevate online presence.
            </motion.div>

            <motion.p
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.225, ease: 'anticipate' }}
            >
              Feel free to reach out to me if you would like to discuss new opportunities or projects
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: "anticipate" }}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}
              className="hero__links"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.25 + index * 0.15, ease: "anticipate" }}
                  title={link.label}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
}
